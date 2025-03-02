<template>
  <footer class="footer-inner">
    <div class="footer-inner-left">
      <a id="portfolio" href="https://oliverdavies.me/" title="Oliver Davies Portfolio" target="_blank">oliverdavies.me</a>
      <div>Oliver Davies 2020</div>
    </div>
    <div class="footer-inner-right">
      <h5 class="footer-resources-title">Made with
        <a href="https://vuejs.org/guide/introduction.html" title="Vue.js - The Progressive JavaScript Framework" target="_blank">
          <img id="vue-logo" src="@/assets/images/vue-logo.png"/>Vue.js</a>, using:
      </h5>
      <div class="footer-resources">
        <div>
          <a href="https://canvasjs.com/" title="Beautiful HTML5 JavaScript Charts | CanvasJS" target="_blank"><img class="footer-resources-img" src="@/assets/images/canvasjs-logo.svg"/><span class="footer-resources-text">CanvasJS</span></a>
        </div>
        <div>
          <a href="https://docs.coincap.io/" title="CoinCap.io | Reliable Cryptocurrency Prices and Market Capitalizations" target="_blank"><img class="footer-resources-img" src="@/assets/images/coincap-logo.png"/><span class="footer-resources-text">CoinCap API 2.0</span></a>
        </div>
        <div>
          <a href="https://www.cryptocompare.com/api/" title="CryptoCompare API - The only free cryptocurrency data API for over 90 exchanges and 1800 coins" target="_blank"><img class="footer-resources-img" src="@/assets/images/cryptocompare.png"/><span class="footer-resources-text">CryptoCompare API</span></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
</style>
