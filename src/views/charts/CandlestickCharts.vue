<template>
  <div>
    <div class="block">
      <span class="demonstration">Choose a stock index</span>
      <el-select
        @change="loadStockHistoricalPrice"
        v-model="selectedStock"
        filterable
        placeholder="Select"
      >
        <el-option
          v-for="item in listStock"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
    <div class="block">
      <span class="demonstration">Choose a period</span>
      <el-date-picker
        v-model="daterange"
        type="daterange"
        @change="loadStockHistoricalPrice"
        align="right"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
    <vue-apex-charts
      height="350"
      type="candlestick"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import dayjs from "dayjs";
import VueApexCharts from "vue-apexcharts";
// import StockAPI from "@/api/StockAPI";
// import StockPriceAPI from "@/api/StockPriceAPI";
import TableStore from "@/common/TableStore";

export default {
  name: "CandlestickCharts",
  components: {
    VueApexCharts,
  },
  created() {},
  methods: {
    async loadStockList() {
      await this.storeStock.load();
      this.listStock = this.storeStock.getData().map((item) => item.symbol);
    },
    async loadStockHistoricalPrice() {
      let symbol = this.selectedStock,
        formatDate = (date) => {
          if (date && date instanceof Date) {
            return date.getUTCFullYear() +"/"+ (date.getUTCMonth()+1) +"/"+ date.getUTCDate();
          } else {
            return ''
          }
        },
        fromDate = formatDate(this.daterange[0]),
        toDate = formatDate(this.daterange[1]);
      const filters = [
        {
          key: "symbol",
          operator: "=",
          value: symbol,
        },
        {
          key: "from_date",
          operator: "=",
          operand: "and",
          value: fromDate,
        },
        {
          key: "to_date",
          operator: "=",
          operand: "and",
          value: toDate,
        },
      ];
      this.storeHistoricalPrice.clearFilter();
      this.storeHistoricalPrice.addFilter(filters);
      await this.storeHistoricalPrice.load();
      let data = this.storeHistoricalPrice.getData();
      this.series = [
        {
          data,
        },
      ];
    },
  },
  data() {
    this.storeHistoricalPrice = new TableStore({
      proxy: {
        url: "/stock_price/historical_price/all",
        type: "remote",
      },
      paging: false,
    });
    this.storeStock = new TableStore({
      proxy: {
        url: "/stock",
        type: "remote",
      },
    });
    this.loadStockList();
    return {
      listStock: [],
      selectedStock: null,
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
      series: [
        {
          name: "candle",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "candlestick",
        },
        title: {
          text: "CandleStick Chart - Category X-axis",
          align: "left",
        },
        annotations: {
          xaxis: [
            {
              x: "Oct 06 14:00",
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  fontSize: "12px",
                  color: "#fff",
                  background: "#00E396",
                },
                orientation: "horizontal",
                offsetY: 7,
                text: "Annotation Test",
              },
            },
          ],
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: "category",
          labels: {
            formatter: function (val) {
              return dayjs(val).format("MMM DD HH:mm");
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  },
};
</script>
