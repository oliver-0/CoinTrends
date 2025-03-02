<template>
  <div id="app-content">
    <site-header />
    <main>
      <div />
      <site-footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<style scoped lang="scss">
#app-content {
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: auto;
  height: 100%;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: $colorText;
  main {
    display: grid;
    grid-template-rows: 1fr auto;
    overflow: auto;
  }
}
</style>
