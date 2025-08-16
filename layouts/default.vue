<template>
  <main>
    <SpeedInsights />

    <Header />
    <slot />

    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";

// Site metrics initialization
onMounted(() => {
  if (process.client && process.env.NODE_ENV === 'production') {
    $fetch('/api/metrics').then((config: any) => {
      if (config.config && config.config.enabled) {
        const script = document.createElement('script')
        script.textContent = config.config.script || ''
        document.head.appendChild(script)
      }
    }).catch(() => {})
  }
})
</script>

<style lang="scss" scoped></style>
