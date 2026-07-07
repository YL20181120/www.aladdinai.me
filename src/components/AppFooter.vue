<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale, t } = useSiteLocale()
const currentYear = new Date().getFullYear()

const footerCopy = {
  zh: {
    eyebrow: '自动化信贷',
    metricReach: '自动触达',
    metricRisk: '风险决策',
    desc: '面向金融机构的 AI 信贷自动化系统，从获客到放款、从风控到贷后形成闭环。',
    scenarios: '场景',
    consumerFinance: '消费金融',
    microLoan: '小额贷款',
    supplyChain: '供应链金融',
  },
  en: {
    eyebrow: 'Autonomous Lending',
    metricReach: 'Automated reach',
    metricRisk: 'Risk decisioning',
    desc: 'An AI lending automation system for financial institutions, closing the loop from acquisition to disbursement, risk control, and post-loan management.',
    scenarios: 'Scenarios',
    consumerFinance: 'Consumer finance',
    microLoan: 'Micro lending',
    supplyChain: 'Supply chain finance',
  },
}

const f = computed(() => footerCopy[currentLocale.value])
</script>

<template>
  <footer class="w-full border-t border-white/5 bg-surface-container-lowest px-6 py-16 md:px-margin-desktop">
    <div class="mx-auto max-w-container-max">
      <div class="premium-panel mb-10 rounded-3xl p-8 md:p-10">
        <div class="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p class="eyebrow mb-5">{{ f.eyebrow }}</p>
            <h2 class="mb-4 font-display text-3xl font-bold text-white md:text-4xl">Aladdin AI</h2>
            <p class="max-w-2xl text-base leading-relaxed text-on-surface-variant">
              {{ t.footerDesc }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <div class="text-2xl font-bold text-secondary">24/7</div>
              <div class="mt-1 text-on-surface-variant">{{ f.metricReach }}</div>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <div class="text-2xl font-bold text-tertiary">ms</div>
              <div class="mt-1 text-on-surface-variant">{{ f.metricRisk }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-3xl text-secondary">hub</span>
            <span class="font-display text-xl font-bold tracking-tighter text-white">Aladdin AI</span>
          </div>
          <p class="max-w-sm text-sm leading-relaxed text-on-surface-variant">
            {{ f.desc }}
          </p>
        </div>

        <div>
          <h4 class="mb-6 font-bold text-white">{{ t.footerProduct }}</h4>
          <ul class="space-y-4">
            <li>
              <RouterLink class="text-sm text-on-surface-variant transition-colors hover:text-secondary" to="/features">
                {{ t.footerLink1 }}
              </RouterLink>
            </li>
            <li>
              <RouterLink class="text-sm text-on-surface-variant transition-colors hover:text-secondary" to="/solutions">
                {{ t.footerLink2 }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-6 font-bold text-white">{{ f.scenarios }}</h4>
          <ul class="space-y-4">
            <li class="text-sm text-on-surface-variant">{{ f.consumerFinance }}</li>
            <li class="text-sm text-on-surface-variant">{{ f.microLoan }}</li>
            <li class="text-sm text-on-surface-variant">{{ f.supplyChain }}</li>
          </ul>
        </div>

        <div>
          <h4 class="mb-6 font-bold text-white">{{ t.footerContact }}</h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-2 text-sm text-on-surface-variant">
              <span class="material-symbols-outlined text-xs">mail</span>
              <a class="transition-colors hover:text-secondary" href="mailto:support@aladdinai.me">
                support@aladdinai.me
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-on-surface-variant md:flex-row"
      >
        <div>© {{ currentYear }} Aladdin AI. {{ t.copyright }}</div>
        <div class="flex gap-6">
          <RouterLink class="transition-colors hover:text-white" to="/privacy">{{ t.privacy }}</RouterLink>
          <RouterLink class="transition-colors hover:text-white" to="/terms">{{ t.terms }}</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
