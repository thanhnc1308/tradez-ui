<template>
  <div>
    <el-select v-model="selectedFilter" placeholder="Select">
      <el-option
        v-for="item in listFilters"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div class="list-selected-filters">
      <div v-for="item in stockFilters" :key="item.id" class="filter-item">
        <div class="filter-type">
          {{ item.type }}
        </div>
        <div class="filter-operator">
          {{ item.operator }}
        </div>
        <div class="filter-value">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseStockFilters",
  data() {
    this.listFilters = [
      {
        type: "RSI14",
        operator: "less",
        value: 30,
        label: "RSI",
      },
      {
        type: "MFI14",
        value: 14,
        operator: "less",
        label: "Money Flow (14)",
      },
      {
        type: "ADX14",
        value: 14,
        operator: "less",
        label: "Average Directional Index (14)",
      },
      {
        type: "ATR",
        value: 14,
        operator: "less",
        label: "Average True Range (14)",
      },
      {
        type: "MACD.macd",
        value: 14,  // open high low last macd.signal
        operator: "less",
        label: "MACD Level (12, 26)",
      },
      {
        type: "MACD.signal",
        value: 14,
        operator: "less",
        label: "MACD Signal (12, 26)",
      },
      {
        type: "CCI20",
        value: 14,
        operator: "less",
        label: "Commodity Channel Index (20)",
      },
      {
        type: "BB.lower",
        value: 14,
        operator: "less",
        label: "Bollinger Lower Band (20)",
      },
      {
        type: "BB.upper",
        value: 14,
        operator: "less",
        label: "Bollinger Upper Band (20)",
      },
      {
        type: "EMA10",
        value: 14,
        operator: "less",
        label: "Exponential Moving Average (10)",
      },
      {
        type: "P.SAR",
        value: 14, // Open/High/Low/Close
        operator: "less",
        label: "Parabolic SAR",
      },
      {
        type: "SMA10",
        value: 14,  // Open/High/Low/Close/Other SMA
        operator: "less",
        label: "Simple Moving Average (10)",
      },
      {
        type: "RSI7",
        value: 14,
        operator: "less",
        label: "Relative Strength Index (7)",
      },
      {
        type: "W.R",
        value: 14,
        operator: "less",
        label: "Williams Percent Range (14)",
      },
      {
        type: "AO",
        value: 14,
        operator: "less",
        label: "Awesome Oscillator",
      },
      {
        type: "Stoch.K",
        value: 14,  // open high low last stock.d
        operator: "less",
        label: "Stochastic %K (14, 3, 3)",
      },
      {
        type: "Stoch.D",
        value: 14,  // open high low last stock.k
        operator: "less",
        label: "Stochastic %D (14, 3, 3)",
      },
      {
        type: "CMF20",
        value: 14,  // open high low last stock.k
        operator: "less",
        label: "Chaikin Money Flow (20)",
      },
      {
        type: "pattern",
        value: "Any",  // candlestick patterns
        operator: "equal",
        label: "Pattern",
      },
    ];

    this.listOperations = [
      {
        key: "less",
        label: "Less",
        value: "less",
      },
      {
        key: "eless",
        label: "Less",
        value: "eless",
      },
      {
        key: "greater",
        label: "Less",
        value: "greater",
      },
      {
        key: "egreater",
        label: "Less",
        value: "egreater",
      },
      {
        key: "crosses",
        label: "Crosses",
        value: "crosses",
      },
      {
        key: "crosses_above",
        label: "Crosses Up",
        value: "crosses_above",
      },
      {
        key: "crosses_below",
        label: "Crosses Down",
        value: "crosses_below",
      },
      {
        key: "in_range",
        label: "Between",
        value: "in_range",
      },
      {
        key: "not_in_range",
        label: "Outside",
        value: "not_in_range",
      },
      {
        key: "equal",
        label: "Equal",
        value: "equal",
      },
      {
        key: "nequal",
        label: "Not Equal",
        value: "nequal",
      },
    ];

    this.titleParam = [];

    return {
      /**
       * object stores all filters emitted to form list
       */
      stockFilters: [],
      selectedFilter: null,
    };
  },
  methods: {
    async confirm() {
      if (await this.validateFilters()) {
        this.$emit("close", this.stockFilters, this.titleParam);
      }
    },
    async validateFilters() {},
  },
};
</script>
