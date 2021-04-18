<template>
  <div class="candlestick-chart">
    <div class="block select-stock">
      <span class="demonstration">Choose a stock symbol</span>
      <el-select
        v-model="symbol"
        filterable
        placeholder="Please select"
      >
        <el-option
          v-for="stock in listStock"
          :key="stock.id"
          :label="stock.symbol"
          :value="stock.symbol"
        />
      </el-select>
    </div>
    <div class="block">
      <span class="demonstration">Choose a period</span>
      <el-date-picker
        v-model="daterange"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
    <trading-vue-chart :symbol="symbol" :daterange="daterange">
    </trading-vue-chart>
  </div>
</template>

<script>
import TradingVueChart from "@/views/charts/TradingVueChart.vue";
import { fnStoreAllStock } from "@/api/storeConfig.js";

export default {
  name: "CandlestickCharts",
  components: { TradingVueChart },
  created() {
    const self = this;
    fnStoreAllStock().then(res => {
      if (res && res.success) {
        self.listStock = res.data;
      }
    })
  },
  data() {
    return {
      listStock: [],
      symbol: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last 3 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      daterange: [],
    };
  },
};
</script>