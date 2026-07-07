<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import DemoModal from '@/components/DemoModal.vue'

const isDemoOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-background text-on-surface">
    <AppHeader @open-demo="isDemoOpen = true" />
    <main>
      <slot :open-demo="() => (isDemoOpen = true)" />
    </main>
    <AppFooter />
    <DemoModal :open="isDemoOpen" @close="isDemoOpen = false" />
  </div>
</template>
