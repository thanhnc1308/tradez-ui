<template>
  <div class="candlestick-chart">
    <div class="block select-stock">
      <span class="demonstration">Choose a stock symbol</span>
      <el-select
        v-model="symbol"
        placeholder="Please select"
      >
        <el-option
          v-for="symbol in listStock"
          :key="symbol"
          :label="symbol"
          :value="symbol"
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

export default {
  name: "CandlestickCharts",
  components: { TradingVueChart },
  data() {
    this.listStock = ["RAL", "HPG", "VIC"];
    return {
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