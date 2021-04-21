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
      <div class="row">
        <div class="param-label">Captial</div>
        <base-input-number v-model="cash"></base-input-number>
      </div>
      <div class="row">
        <div class="param-label">Commission</div>
        <base-input-number v-model="commission"></base-input-number>
      </div>
      <div class="row select-strategy">
        <div class="param-label">Choose a strategy</div>
        <el-select
          v-model="strategy"
          filterable
          value-key="id"
          placeholder="Please select"
        >
          <el-option
            v-for="strategy in listStrategy"
            :key="strategy.id"
            :label="strategy.label"
            :value="strategy"
          />
        </el-select>
      </div>
      <div class="row">
        <div class="param-label">Choose strategy parameters</div>
        <div v-if="strategy.id === 'RSIStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Buy when RSI overbought at</div>
            <base-input-number
              v-model="strategy_params.upper"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Sell when RSI oversold at</div>
            <base-input-number
              v-model="strategy_params.lower"
            ></base-input-number>
          </div>
        </div>
      </div>
      <div class="row horizontal-center">
      <base-button :loading="false" @click="showResult">Show Result</base-button>
      </div>
    </template>
    <template slot="table">
      <div v-show="hasData">
        <div style="font-size: 20px;" class="title text-center bold mb-1">{{ backtestTitle }}</div>
        <div class="title text-center italic mb-1">Total trades: {{ totalTrades | formatData(EnumFormatType.Number) }}</div>
        <div class="title text-center italic mb-1">PnL: {{ pnl | formatData(EnumFormatType.Number) }}</div>
        <div class="title text-center italic mb-1">% PnL: {{ percent_pnl || 0 }}%</div>
        <div class="title text-center italic mb-1">Win rate: {{ winRate || 0 }}%</div>
        <div class="title text-center italic mb-1">Final portfolio: {{ finalPortfolio | formatData(EnumFormatType.Number) }}</div>
        <div class="table-result">
          <table-viewer
            :pagination="false"
            ref="tableResult"
            id="tableResult"
            :columns="columnsBacktestResult"
          >
          </table-viewer>
        </div>
      </div>
    </template>
  </layout-list>
</template>

<script>
import LayoutList from "@/views/base/LayoutList.vue";
import { fnStoreAllStock } from "@/api/storeConfig.js";
import BacktestAPI from "@/api/BacktestAPI.js";
import { columnsBacktestResult } from "@/common/columnConfig";
import { EnumFormatType } from "@/common/enum";

export default {
  name: "Backtest",
  components: {
    LayoutList,
  },
  computed: {
    backtestTitle() {
      let fromDate = this.$utility.formatDate(this.daterange[0]),
        toDate = this.$utility.formatDate(this.daterange[1]);
      return `Backtest result for ${this.strategy.label} of ${this.symbol} from ${fromDate} to ${toDate}`;
    },
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
    this.EnumFormatType = EnumFormatType;
    this.api = this.getApi();
    this.columnsBacktestResult = columnsBacktestResult;
    this.listStrategy = [
      {
        id: "RSIStrategy",
        label: "RSI Strategy",
        description: "RSI Strategy",
      },
      {
        id: "BollingerBandsAndRSIStrategy",
        label: "Bollinger Bands And RSI Strategy",
        description: "Bollinger Bands And RSI Strategy",
      },
      {
        id: "BollingerBandsSidewayStrategy",
        label: "Bollinger Bands Sideway Strategy",
        description: "Bollinger Bands Sideway Strategy",
      },
      {
        id: "BollingerBandsStrategy",
        label: "Bollinger Bands Strategy",
        description: "Bollinger Bands Strategy",
      },
      {
        id: "MACDStrategy",
        label: "MACD Strategy",
        description: "MACD Strategy",
      },
      {
        id: "MaCrossoverStrategy",
        label: "Moving Average Crossover Strategy",
        description: "Moving Average Crossover Strategy",
      },
      {
        id: "ADXDMICrossStrategy",
        label: "ADX-DMI Cross Strategy",
        description: "ADX-DMI Cross Strategy",
      },
    ];
    return {
      loading: false,
      hasData: false,
      listStock: [],
      strategy: {},
      strategy_params: {},
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
      commission: 0.001,
      cash: 100000,
      winRate: 0,
      totalTrades: 0,
      finalPortfolio: 0,
      pnl: 0,
      percent_pnl: 0
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
      this.loading = true;
      let self = this,
        symbol = this.symbol,
        strategy = this.strategy.id,
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
        let url = "",
          payload = {
            symbol: symbol,
            from_date: fromDate,
            to_date: toDate,
            cash: this.cash,
            commission: this.commission,
            strategy: strategy,
            strategy_params: this.strategy_params,
          },
          res = await this.api.request(url, "post", payload);
        if (res && res.success) {
          this.totalTrades = res.data.total_trades;
          this.winRate = res.data.win_rate;
          this.finalPortfolio = res.data.final_portfolio;
          this.pnl = res.data.pnl;
          this.percent_pnl = res.data.percent_pnl;
          let data = this.prepareDisplayData(res.data.result);
          self.$refs.tableResult.setDisplayData(data);
          self.hasData = true;
        }
      }
      this.loading = false;
    },
    prepareDisplayData(data) {
      return (data || []).map((item) => {
        return {
          transaction_date: this.$utility.formatDate(item.transaction_date),
          transaction_type: item.transaction_type,
          description: this.getDescription(item),
        };
      });
    },
    getDescription(item) {
      let result = '';
      switch (item.transaction_type) {
        case 'BUY CREATE':
        case 'SELL CREATE':
          result = `Price close at ${this.$utility.toThousandFilter(item.price)}`;
          break;
        case 'BUY EXECUTED':
          result = `Buy executed at ${this.$utility.toThousandFilter(item.price)} with cost ${this.$utility.toThousandFilter(item.cost)} and commission ${this.$utility.toThousandFilter(item.commission)}`;
          break;
        case 'SELL EXECUTED':
          result = `Sell executed at ${this.$utility.toThousandFilter(item.price)} with cost ${this.$utility.toThousandFilter(item.cost)} and commission ${this.$utility.toThousandFilter(item.commission)}`;
          break;
        case 'OPERATION PROFIT':
          const net = this.$utility.toThousandFilter(item.net),
            gross = this.$utility.toThousandFilter(item.gross);
          if (item.net >= 0) {
            result = `Gross profit is ${gross} and net profit is ${net}`;
          } else {
            result = `Gross loss is ${gross} and net loss is ${net}`;
          }
          break;
      }
      return result;
    }
  },
};
</script>

<style lang="scss" scoped>
.param-label {
  min-width: 250px;
}
</style>