<template>
  <layout-list>
    <template slot="utility">
      <div class="row select-stock">
        <div class="param-label">Choose a stock symbol</div>
        <el-select v-model="symbol" filterable placeholder="Please select">
          <el-option
            v-for="stock in listStock"
            :key="stock.id"
            :label="stock.symbol"
            :value="stock.symbol"
          />
        </el-select>
      </div>
      <div class="row">
        <div class="param-label">Choose a period</div>
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
      <div class="row select-strategy">
        <div class="param-label">Choose a strategy</div>
        <el-select v-model="strategy" filterable placeholder="Please select">
          <el-option
            v-for="strategy in listStrategy"
            :key="strategy.id"
            :label="strategy.label"
            :value="strategy.id"
          />
        </el-select>
      </div>
      <div class="row">
        <div class="param-label">Choose strategy parameters</div>
      </div>
      <base-button @click="showResult">Show Result</base-button>
    </template>
    <template slot="table"> Result </template>
  </layout-list>
</template>

<script>
// import BaseFormList from "@/views/base/BaseFormList.vue";
import LayoutList from "@/views/base/LayoutList.vue";
import { fnStoreAllStock } from "@/api/storeConfig.js";
import BacktestAPI from "@/api/BacktestAPI.js";

export default {
  name: "Backtest",
  // extends: BaseFormList,
  components: {
    LayoutList,
  },
  created() {
    const self = this;
    fnStoreAllStock().then((res) => {
      if (res && res.success) {
        self.listStock = res.data;
      }
    });
  },
  data() {
    this.api = this.getApi();
    this.listStrategy = [
      {
        id: "RSIStrategy",
        label: "RSI",
        description: "RSI",
      },
      {
        id: "BollingerBandsAndRSIStrategy",
        label: "Bollinger Bands And RSI",
        description: "Bollinger Bands And RSI",
      },
      {
        id: "BollingerBandsSidewayStrategy",
        label: "Bollinger Bands And RSI",
        description: "Bollinger Bands And RSI",
      },
      {
        id: "BollingerBandsStrategy",
        label: "Bollinger Bands",
        description: "Bollinger Bands",
      },
      {
        id: "MACDStrategy",
        label: "MACD",
        description: "MACD",
      },
      {
        id: "MaCrossoverStrategy",
        label: "Moving Average Crossover",
        description: "Moving Average Crossover",
      },
      {
        id: "ADXDMICrossStrategy",
        label: "ADX-DMI Cross",
        description: "ADX-DMI Cross",
      },
    ];
    return {
      listStock: [],
      strategy: "",
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
  methods: {
    /**
     * @override
     */
    getApi() {
      return new BacktestAPI();
    },
    /**
     * Do backtest strategy and show result
     */
    async showResult() {
      let symbol = this.symbol,
        strategy = this.strategy,
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
      if (symbol && strategy) {
        let url = `?symbol=${this.symbol}&strategy=${strategy}${
          fromDate ? `&from_date=${fromDate}` : ""
        }${toDate ? `&to_date=${toDate}` : ""}`;
        let res = await this.api.request(url, "get");
        if (res && res.success) {
          debugger;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.param-label {
  min-width: 250px;
}
</style>