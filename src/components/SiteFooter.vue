<template>
  <footer>
    <div class="footer-inner">
      <a
        href="https://canvasjs.com/"
        title="Beautiful HTML5 JavaScript Charts | CanvasJS"
        target="_blank"
      >
        <div class="footer-resource">
          <img src="@/assets/images/canvasjs-logo.svg">
          <span>CanvasJS</span>
        </div>
      </a>
      <a
        href="https://docs.coincap.io/"
        title="CoinCap.io | Reliable Cryptocurrency Prices and Market Capitalizations"
        target="_blank"
      >
        <div class="footer-resource">
          <img src="@/assets/images/coincap-logo.png">
          <span>CoinCap API 2.0</span>
        </div>
      </a>
      <a
        href="https://www.cryptocompare.com/api/"
        title="CryptoCompare API - The only free cryptocurrency data API for over 90 exchanges and 1800 coins"
        target="_blank"
      >
        <div class="footer-resource">
          <img src="@/assets/images/cryptocompare.png">
          <span>CryptoCompare API</span>
        </div>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
footer {
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #4a4a4a;
  background-color: #f1f1f1;
  .footer-inner {
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem;
    gap: 0.5rem;
    a {
      .footer-resource {
        display: flex;
        align-items: center;
        img {
          height: 2rem;
          margin-right: 0.25rem;
        }
      }
    }
  }
}
</style>
