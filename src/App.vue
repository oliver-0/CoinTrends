<template>
  <div id="app-content">
    <header>
      <div><img src="@/assets/images/cointrends.svg" alt="CoinTrends logo"></div>
      <h1>CoinTrends</h1>
    </header>
    <main>
      <div />
    </main>
    <site-footer />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<style scoped lang="scss">
#app-content {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  font-size: 16px;
  font-family: rawline, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: $colorText;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    height: 2rem;
    margin: auto;
    margin-right: 0.5rem;
  }
  h1 {
    font-family: 'Changa', sans-serif;
    font-size: 2.5rem;
  }
}
</style>
