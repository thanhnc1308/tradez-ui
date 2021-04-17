<template>
  <div class="trading-vue-chart">
    <base-button @click="toggleFullScreen">Toggle fulllscreen</base-button>
    <trading-vue
      id="trading-vue-chart"
      @dblclick="toggleFullScreen"
      :data="chart"
      :titleTxt="chartTitle"
      :width="this.width"
      :height="this.height"
      :color-back="colors.colorBack"
      :color-grid="colors.colorGrid"
      :color-text="colors.colorText"
    >
    </trading-vue>
  </div>
</template>

<script>
import TradingVue from "trading-vue-js";
import StockPriceAPI from "@/api/StockPriceAPI";
import screenfull from 'screenfull'

export default {
  name: "TradingVueChart",
  components: { TradingVue },
  computed: {
    chartTitle() {
      return this.symbol;
    },
  },
  props: {
    symbol: {
      type: String,
      default: "",
    },
    daterange: {
      type: Array,
      default: function () {
        return [];
      },
    },
    offchart: {
      type: Array,
      default: function () {
        return [];
      },
    },
    onchart: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  watch: {
    symbol() {
      this.loadStockHistoricalPrice();
    },
    daterange() {
      this.loadStockHistoricalPrice();
    },
    offchart() {
      this.chart.offchart = this.offchart;
    },
    onchart() {
      this.chart.onchart = this.onchart;
    },
  },
  methods: {
    onResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight - 85;
    },
    /**
     * Reload data of chart
     */
    async loadStockHistoricalPrice() {
      let symbol = this.symbol,
        formatDate = (date) => {
          if (date && date instanceof Date) {
            return (
              date.getUTCFullYear() +
              "/" +
              (date.getUTCMonth() + 1) +
              "/" +
              date.getUTCDate()
            );
          } else {
            return "";
          }
        },
        fromDate = formatDate(this.daterange[0]),
        toDate = formatDate(this.daterange[1]);
      if (symbol) {
        let url = `/historical_price/all?symbol=${this.symbol}${
          fromDate ? `&from_date=${fromDate}` : ""
        }${toDate ? `&to_date=${toDate}` : ""}`;
        let res = await this.api.request(url, "get");
        if (res && res.success) {
          setTimeout(() => {
            this.chart.chart.data = this.processChartData(res.data);
          }, 500);
        }
      }
    },
    /**
     * Process data from server
     */
    processChartData(data) {
      const self = this;
      return data.map((item) => {
        let result = [];
        result.push(self.normailzeDate(item.x));
        result.append(item.y);
        result.push(100);
        return result;
      });
    },
    /**
     * Normalize date in timestamp format
     */
    normailzeDate(sDate) {
      return new Date(sDate).getTime();
    },
    /**
     * Toggle full screen chart
     */
    toggleFullScreen() {
      const el = document.getElementById("trading-vue-chart");
      screenfull.request(el);
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    this.api = new StockPriceAPI();
    return {
      chart: {
        chart: {
          data: [],
          type: "Candles",
        },
        // offchart: [
        //   {
        //     type: "RSI",
        //     data: [],
        //     name: "RSI, 20",
        //     settings: {
        //       lower: 30,
        //       upper: 70
        //     }
        //   }
        // ],
        // onchart: [
        //   {
        //     type: "EMA",
        //     data: [],
        //     name: "EMA, 25",
        //     settings: {}
        //   }
        // ]
      },
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