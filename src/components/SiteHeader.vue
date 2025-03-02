<template>
  <header>
    <div class="header-left">
      <img src="@/assets/images/cointrends.svg" alt="CoinTrends logo">
    </div>
    <h1>CoinTrends</h1>
    <div class="header-right">
      <div id="portfolio-links">
        <a
          href="https://oliverdavies.me/"
          title="Oliver Davies | Portfolio"
          target="_blank"
        >oliverdavies.me</a>
        <a
          class="github-link"
          href="https://github.com/oliver-0/CoinTrends"
          title="oliver-0/CoinTrends"
          target="_blank"
        ><span class="footer-resources-text">CoinTrends on GitHub</span></a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  .header-left {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
  h1 {
    font-family: 'Changa', sans-serif;
    font-size: 2.5rem;
  }
  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    #portfolio-links {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      a {
        color: #292929;
        font-weight: 500;
        font-size: 0.875rem;
        margin-right: 1.5rem;
      }
    }
  }
}
</style>
