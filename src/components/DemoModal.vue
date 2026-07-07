<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const props = defineProps<{
  open: boolean
}>()

defineEmits<{
  close: []
}>()

const { currentLocale, t } = useSiteLocale()

type SubmitStatus = 'idle' | 'success' | 'error'

const formState = reactive({
  name: '',
  contact: '',
  industry: 'banking',
  scale: 'startup',
  website: '',
})

const submitStatus = ref<SubmitStatus>('idle')
const isSubmitting = ref(false)
const statusMessage = ref('')

const industryOptions = [
  ['banking', '传统银行', 'Traditional Banking'],
  ['consumer_finance', '消费金融', 'Consumer Finance'],
  ['micro_loan', '小额贷款', 'Micro Loans'],
  ['supply_chain', '供应链金融', 'Supply Chain Finance'],
  ['other', '其他', 'Other'],
] as const

const scaleOptions = [
  ['startup', '初创期', 'Startup'],
  ['growth', '成长期', 'Growth'],
  ['mature', '成熟期', 'Mature'],
  ['enterprise', '大型集团', 'Enterprise'],
] as const

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      submitStatus.value = 'idle'
      statusMessage.value = ''
    }
  },
  { immediate: true },
)

function optionLabel(option: readonly [string, string, string]) {
  return document.documentElement.lang === 'zh-CN' ? option[1] : option[2]
}

function resetForm() {
  formState.name = ''
  formState.contact = ''
  formState.industry = 'banking'
  formState.scale = 'startup'
  formState.website = ''
}

function readErrorMessage(payload: unknown) {
  if (payload && typeof payload === 'object' && 'message' in payload) {
    const message = (payload as { message?: unknown }).message
    return typeof message === 'string' ? message : ''
  }

  return ''
}

async function submit() {
  if (isSubmitting.value) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = 'idle'
  statusMessage.value = ''

  try {
    const response = await fetch('/api/demo-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formState,
        locale: currentLocale.value,
        source: window.location.pathname,
      }),
    })

    const payload = await response.json().catch(() => null)

    if (!response.ok) {
      throw new Error(readErrorMessage(payload) || t.value.submitError)
    }

    submitStatus.value = 'success'
    statusMessage.value = t.value.submitSuccess
    resetForm()
  } catch (error) {
    submitStatus.value = 'error'
    statusMessage.value = error instanceof Error ? error.message : t.value.submitError
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        class="absolute inset-0 bg-background/80 backdrop-blur-md"
        type="button"
        aria-label="Close modal"
        @click="$emit('close')"
      />
      <div
        class="glass-card relative w-full max-w-md rounded-3xl border-secondary/30 p-8 shadow-[0_0_50px_rgba(0,242,255,0.1)]"
      >
        <button
          class="absolute right-4 top-4 text-on-surface-variant hover:text-white"
          type="button"
          @click="$emit('close')"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
        <h2 class="mb-2 text-2xl font-bold text-white">{{ t.modalTitle }}</h2>
        <p class="mb-8 text-sm text-on-surface-variant">{{ t.modalSubtitle }}</p>

        <form class="space-y-6" @submit.prevent="submit">
          <div>
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-secondary">
              {{ t.labelName }}
            </label>
            <input
              v-model.trim="formState.name"
              class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-secondary focus:outline-none"
              name="name"
              placeholder="Aladdin AI"
              required
              type="text"
            >
          </div>
          <div>
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-secondary">
              {{ t.labelContact }}
            </label>
            <input
              v-model.trim="formState.contact"
              class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-secondary focus:outline-none"
              name="contact"
              placeholder="support@aladdinai.me"
              required
              type="text"
            >
          </div>
          <input v-model="formState.website" autocomplete="off" class="hidden" name="website" tabindex="-1" type="text">
          <div>
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-secondary">
              {{ t.labelIndustry }}
            </label>
            <select
              v-model="formState.industry"
              class="w-full appearance-none rounded-lg border border-white/10 bg-surface-container px-4 py-3 text-white transition-colors focus:border-secondary focus:outline-none"
              name="industry"
            >
              <option v-for="option in industryOptions" :key="option[0]" :value="option[0]">
                {{ optionLabel(option) }}
              </option>
            </select>
          </div>
          <div>
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-secondary">
              {{ t.labelScale }}
            </label>
            <select
              v-model="formState.scale"
              class="w-full appearance-none rounded-lg border border-white/10 bg-surface-container px-4 py-3 text-white transition-colors focus:border-secondary focus:outline-none"
              name="scale"
            >
              <option v-for="option in scaleOptions" :key="option[0]" :value="option[0]">
                {{ optionLabel(option) }}
              </option>
            </select>
          </div>
          <p
            v-if="statusMessage"
            class="rounded-xl border px-4 py-3 text-sm"
            :class="submitStatus === 'success' ? 'border-secondary/30 bg-secondary/10 text-secondary' : 'border-red-400/30 bg-red-500/10 text-red-200'"
          >
            {{ statusMessage }}
          </p>
          <button class="btn-primary w-full rounded-xl py-4 text-lg font-bold disabled:cursor-not-allowed disabled:opacity-60" :disabled="isSubmitting" type="submit">
            {{ isSubmitting ? t.submitting : t.submit }}
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>
