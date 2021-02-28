<!--
https://github.com/tvjsx/trading-vue-js/tree/master/docs/guide
-->

<template>
  <trading-vue
    :data="chart"
    :width="this.width"
    :height="this.height"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText"
  >
  </trading-vue>
</template>

<script>
import TradingVue from "trading-vue-js";
import Data from "./data.json";

export default {
  name: "app",
  components: { TradingVue },
  methods: {
    onResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight - 85;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    return {
      chart: Data,
      width: window.innerWidth,
      height: window.innerHeight - 85,
      colors: {
        colorBack: "#fff",
        colorGrid: "#eee",
        colorText: "#333",
      },
    };
  },
};
</script>