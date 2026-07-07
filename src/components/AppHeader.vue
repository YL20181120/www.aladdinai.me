<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '@/composables/useSiteLocale'

defineEmits<{
  openDemo: []
}>()

const { t, toggleLocale } = useSiteLocale()
const isMenuOpen = ref(false)

const navItems = [
  { to: '/solutions', label: 'navSolutions' },
  { to: '/features', label: 'navFeatures' },
  { to: '/pricing', label: 'navPricing' },
  { to: '/about', label: 'navAbout' },
] as const
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-white/10 bg-background/75 px-5 py-4 backdrop-blur-2xl md:px-margin-desktop"
  >
    <div class="mx-auto flex max-w-container-max items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3 font-display text-xl font-bold tracking-tighter text-secondary" @click="isMenuOpen = false">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10">
          <span class="material-symbols-outlined text-[20px]">hub</span>
        </span>
        Aladdin AI
      </RouterLink>

      <nav class="hidden items-center rounded-full border border-white/10 bg-white/[0.025] px-2 py-1 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:text-secondary"
          active-class="bg-secondary/10 text-secondary"
        >
          {{ t[item.label] }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2 sm:gap-stack-md">
        <button
          class="flex h-10 items-center gap-1 rounded-full border border-white/10 bg-white/[0.025] px-3 text-secondary transition-colors hover:bg-secondary/10"
          type="button"
          @click="toggleLocale"
        >
          <span class="material-symbols-outlined text-[20px]">language</span>
          <span class="hidden text-xs font-semibold tracking-wider sm:inline">{{ t.langLabel }}</span>
        </button>
        <button
          class="btn-primary hidden rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider sm:block"
          type="button"
          @click="$emit('openDemo')"
        >
          {{ t.startNow }}
        </button>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-secondary md:hidden"
          type="button"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="material-symbols-outlined">{{ isMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="mt-4 rounded-2xl border border-white/10 bg-surface-container/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
      <nav class="grid gap-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-xl px-4 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-secondary/10 hover:text-secondary"
          active-class="bg-secondary/10 text-secondary"
          @click="isMenuOpen = false"
        >
          {{ t[item.label] }}
        </RouterLink>
      </nav>
      <button class="btn-primary mt-3 w-full rounded-xl py-3 text-sm font-bold" type="button" @click="$emit('openDemo'); isMenuOpen = false">
        {{ t.startNow }}
      </button>
    </div>
  </header>
</template>
