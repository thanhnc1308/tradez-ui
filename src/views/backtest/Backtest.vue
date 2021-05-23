<template>
  <layout-list>
    <template slot="utility">
      <div class="row select-stock">
        <div class="param-label">Choose a stock symbol</div>
        <el-select v-model="symbol" multiple filterable placeholder="Please select">
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
        <div class="param-label">Stop loss ATR factor</div>
        <base-input-number v-model="strategy_params.atr_stop_loss"></base-input-number>
      </div>
      <div class="row">
        <div class="param-label">Scale out ATR factor</div>
        <base-input-number v-model="strategy_params.atr_stop_scale_out"></base-input-number>
      </div>
      <div class="row select-strategy">
        <div class="param-label">Choose a strategy</div>
        <el-select
          v-model="strategy"
          @change="onSelectStrategy"
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
        <!-- RSIStrategy -->
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
        <!-- end RSIStrategy -->
        <!-- BollingerBandsAndRSIStrategy -->
        <div
          v-if="strategy.id === 'BollingerBandsAndRSIStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Bollinger Bands Period</div>
            <base-input-number
              v-model="strategy_params.bbband_period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Bollinger Bands Devfactor</div>
            <base-input-number
              v-model="strategy_params.devfactor"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">RSI Period</div>
            <base-input-number
              v-model="strategy_params.rsi_period"
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
        <!-- end BollingerBandsAndRSIStrategy -->
        <!-- BollingerBandsSidewayStrategy -->
        <div
          v-if="strategy.id === 'BollingerBandsSidewayStrategy' || strategy.id === 'BollingerBandsStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Bollinger Bands Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Bollinger Bands Devfactor</div>
            <base-input-number
              v-model="strategy_params.devfactor"
            ></base-input-number>
          </div>
        </div>
        <!-- end BollingerBandsSidewayStrategy -->
      </div>
      <div class="row horizontal-center">
        <base-button :loading="false" @click="showResult"
          >Show Result</base-button
        >
      </div>
    </template>
    <template slot="table">
      <div v-show="hasData">
        <div v-for="result in results" :key="result.symbol" class="result-item">
        <div style="font-size: 20px" class="title text-center bold mb-1">
          {{ result.title }}
        </div>
        <div class="title text-center italic mb-1">
          Total trades: {{ result.total_trades | formatData(EnumFormatType.Number) }}
        </div>
        <!-- <div class="title text-center italic mb-1">
          PnL: {{ result.pnl | formatData(EnumFormatType.Number) }}
        </div>
        <div class="title text-center italic mb-1">
          % PnL: {{ result.percent_pnl || 0 }}%
        </div> -->
        <div class="title text-center italic mb-1">
          Total wins: {{ result.total_won || 0 }}%
        </div>
        <div class="title text-center italic mb-1">
          Total losses: {{ result.total_lost || 0 }}%
        </div>
        <div class="title text-center italic mb-1">
          Win rate: {{ result.win_rate || 0 }}%
        </div>
        <!-- <div class="title text-center italic mb-1">
          Final portfolio:
          {{ finalPortfolio | formatData(EnumFormatType.Number) }}
        </div> -->
        <div class="table-result">
          <table-viewer
            :pagination="false"
            ref="tableResult"
            id="tableResult"
            :data="result.data"
            :columns="columnsBacktestResult"
          >
          </table-viewer>
        </div>

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
      // {
      //   id: "BollingerBandsAndRSIStrategy",
      //   label: "Bollinger Bands And RSI Strategy",
      //   description: "Bollinger Bands And RSI Strategy",
      // },
      // {
      //   id: "BollingerBandsSidewayStrategy",
      //   label: "Bollinger Bands Sideway Strategy",
      //   description: "Bollinger Bands Sideway Strategy",
      // },
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
      strategy: "RSIStrategy",
      strategy_params: {
        atr_stop_loss: 1.5,
        atr_stop_scale_out: 1,
      },
      symbol: ["HPG", "RAL"],
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
      daterange: [new Date('2020-02-01'), new Date('2020-07-01')],
      results: []
      // commission: 0.001,
      // cash: 100000,
      // winRate: 0,
      // totalTrades: 0,
      // finalPortfolio: 0,
      // pnl: 0,
      // percent_pnl: 0,
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
     * Handle event when selecting strategy
     * Set default strategy_params
     */
    onSelectStrategy(strategy) {
      this.strategy_params = {}; // reset
      switch (strategy.id) {
        case "RSIStrategy":
          this.strategy_params = {
            period: 14,
            upper: 70,
            lower: 30
          };
          break;
        case "BollingerBandsAndRSIStrategy":
          this.strategy_params = {
            bbband_period: 20,
            devfactor: 2,
            rsi_period: 14,
            upper: 70,
            lower: 30
          };
          break;
        case "BollingerBandsSidewayStrategy":
          this.strategy_params = {
            period: 20,
            devfactor: 2
          };
          break;
        case "BollingerBandsStrategy":
          this.strategy_params = {
            period: 20,
            devfactor: 2
          };
          break;
        case "MACDStrategy":
          this.strategy_params = {};
          break;
        case "MaCrossoverStrategy":
          this.strategy_params = {};
          break;
        case "ADXDMICrossStrategy":
          this.strategy_params = {};
          break;
      }
      this.strategy_params.atr_stop_loss = 1.5;
      this.strategy_params.atr_stop_scale_out = 1;
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
          this.results = this.prepareResults(res.data);
          // this.totalTrades = res.data.total_trades;
          // this.winRate = res.data.win_rate;
          // this.finalPortfolio = res.data.final_portfolio;
          // this.pnl = res.data.pnl;
          // this.percent_pnl = res.data.percent_pnl;
          // let data = this.prepareDisplayData(res.data.result);
          // self.$refs.tableResult.setDisplayData(data);
          self.hasData = true;
        }
      }
      this.loading = false;
    },
    prepareResults(data) {
      let results = [];
      for (let item of data) {
        let result = {
          ...item
        };
        result.title = this.buildBacktestTitle(item);
        result.data = this.prepareDisplayData(item.result);
        results.push(result);
      }
      return results;

    },
    buildBacktestTitle(item) {
      let fromDate = this.$utility.formatDate(this.daterange[0]),
        toDate = this.$utility.formatDate(this.daterange[1]);
      return `Backtest result for ${this.strategy.label} of ${item.symbol} symbol from ${fromDate} to ${toDate}`;
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
      let result = "";
      switch (item.transaction_type) {
        case "BUY CREATE":
        case "SELL CREATE":
          result = `Price close at ${this.$utility.toThousandFilter(
            item.price
          )}`;
          break;
        case "BUY EXECUTED":
          result = `Buy executed at ${this.$utility.toThousandFilter(
            item.price
          )} with cost ${this.$utility.toThousandFilter(
            item.cost
          )} and commission ${this.$utility.toThousandFilter(item.commission)}`;
          break;
        case "SELL EXECUTED":
          result = `Sell executed at ${this.$utility.toThousandFilter(
            item.price
          )} with cost ${this.$utility.toThousandFilter(
            item.cost
          )} and commission ${this.$utility.toThousandFilter(item.commission)}`;
          break;
        case "OPERATION PROFIT":
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
    },
  },
};
</script>

<style lang="scss" scoped>
.param-label {
  min-width: 250px;
}
.result-item {
  margin-bottom: 2rem;
}
</style>