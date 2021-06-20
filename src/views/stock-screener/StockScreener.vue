<template>
  <layout-list>
    <template slot="utility">
      <div class="flex flex-end choose-filters">
        <base-button type="primary" @click="showDialogChooseFilters"
          >Choose filters</base-button
        >
        <base-button type="primary" @click="refresh">Refresh</base-button>
        <!-- <base-button type="primary" @click="saveFilters"
          >Save filters</base-button
        > -->
        <base-button type="primary" @click="saveAsNotification"
          >Save as notification</base-button
        >
      </div>
    </template>
    <template slot="table">
      <div class="result">
        <div style="font-size: 20px;" class="filter-title mb-1 mt-1 text-center">{{ title }}</div>
        <div class="table-result">
          <table-viewer
            ref="tableData"
            @click="onClickTableRow"
            :store="storeStockScreener"
            :pagination="false"
            hasActionColumn
            :columns="columnsStockScreener"
          >
          <template slot="actions" slot-scope="{ row }">
            <base-button @click="showChart(row)">Show chart</base-button>
          </template>
          </table-viewer>
        </div>
      </div>
    </template>
  </layout-list>
</template>

<script>
import DialogUtil from "@/common/DialogUtil";
import StockViewer from "@/views/market-info/StockViewer";
import { columnsStockScreener } from "@/common/columnConfig";
import TableStore from "@/common/TableStore";
import { EnumColumnType, EnumFormatType } from "@/common/enum";
import showTradingViewChart from "@/views/charts/TradingViewChartViewer.js";
import NotificationAPI from "@/api/NotificationAPI";
import StockFilter from "@/views/stock-screener/StockFilter.js";
import { mapGetters } from 'vuex'

export default {
  name: "StockScreener",
  data() {
    /**
     * object stores all filters = filters in form choose filters
     */
    this.currentParams = {
      stockFilters: [],
      titleParam: [],
    };
    this.columnsStockScreener = columnsStockScreener;
    this.storeStockScreener = new TableStore({
      proxy: {
        url: "/stock_screener",
        type: "remote",
      },
      method: "post",
    });
    return {
      stockDate: null,
    };
  },
  computed: {
    ...mapGetters([
      'email'
    ]),
    title() {
      if (this.stockDate) {
        let options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        return `Stock screener result on ${this.stockDate.toLocaleDateString(
          "en-US",
          options
        )}`;
      } else {
        return `Stock screener result`;
      }
    },
  },
  mounted() {
    this.loadListStock();
  },
  methods: {
    async showDialogChooseFilters() {
      if (!this.component) {
        this.component = await import(
          "@/views/stock-screener/ChooseStockFilters.vue"
        );
      }
      if (!this.dialog) {
        let initOptions = {
          options: {},
          events: {
            close: this.onDialogChooseStockFiltersClose,
          },
        };
        this.dialog = DialogUtil.prepareDialog(
          this.component,
          this,
          initOptions
        );
      }
      let showOptions = {};
      DialogUtil.showDialog(this.dialog, showOptions);
    },
    onDialogChooseStockFiltersClose(dialogResult, frm) {
      if (dialogResult === "Confirm") {
        this.currentParams.stockFilters = frm.stockFilters;
        this.currentParams.titleParam = frm.titleParam;
        this.stockDate = frm.stockDate;
        this.loadListStock();
        // set cache currentParams
      }
    },
    refresh() {
      this.loadListStock();
    },
    loadListStock() {
      let filters = this.buildStockFilters();
      // let filters = [
      //   { type: "rsi14", label: "Relative Strength Index (14)", operation: "egreater", value: 40 },
      //   // { type: "ema20", operation: "egreater", value: 'ema200' },
      //   // { type: "ema200", operation: "in_range", value: [10,40] },
      //   // { type: "ema20", operation: "not_in_range", value: [10,40] },
      // ];
      let columns = ["symbol"];
      if (filters.length > 0) {
        this.setColumnTable(filters);
        filters.forEach((filter) => {
          if (this.checkIfShowColumn(filter.type)) {
            columns.push(filter.type);
          }
        });
        let options = {
          data: {
            filters,
            columns,
          },
        };
        this.$refs["tableData"].doQuery(options);
      }
    },
    buildStockFilters() {
      let filters = this.currentParams.stockFilters;
      if (this.stockDate) {
        let filterDate = filters.find((item) => item.type === "stock_date");
        if (filterDate) {
          filterDate.value = this.stockDate.toLocaleDateString("en-US");
        } else {
          filters.push({
            type: "stock_date",
            operation: "equals",
            value: this.stockDate.toLocaleDateString("en-US"),
          });
        }
      }
      return filters;
    },
    checkIfShowColumn(column) {
      return !["stock_date", "single_candle", "double_candles", "triple_candles"].includes(column);
    },
    setColumnTable(filters) {
      this.$refs.tableData.columnsx = this.$refs.tableData.columnsx.filter(
        (item) => !item.isCustomColumn
      );
      filters.forEach((filter) => {
        if (this.checkIfShowColumn(filter.type)) {
          this.$refs.tableData.columnsx.push({
            dataField: filter.type,
            label: filter.label,
            columnAlign: "center",
            dataAlign: "center",
            width: "180",
            isCustomColumn: true,
            columnType: EnumColumnType.Number,
            formatType: EnumFormatType.Number,
          });
        }
      });
    },
    onClickTableRow(row) {
      StockViewer.show(row, this);
    },
    saveFilters() {
      alert("saveFilters");
    },
    async saveAsNotification() {
      if (this.currentParams.stockFilters && this.currentParams.stockFilters.length > 0) {
        if (!this.notificationAPI) {
          this.notificationAPI = new NotificationAPI();
        }
        let description = this.buildConditionDescription(this.currentParams.stockFilters);
        let payload = {
          description: description,
          gmail: this.email,
          send_gmail: true,
          tg_chat_id: "",
          send_telegram: false,
          condition_key: JSON.stringify(this.currentParams.stockFilters),
          condition_description: description
        };
        let response = await this.notificationAPI.post(payload);
          if (response && response.success) {
            this.$notify({
              title: "Success",
              message: "Success",
              type: "success",
              duration: 2000,
            });
          } else if (response && response.message) {
            this.$notify({
              title: "Error",
              message: response.message || "An error has occured",
              type: "error",
              duration: 2000,
            });
          }
      } else {
        this.$notify({
          title: "Error",
          message: "You must choose conditions first",
          type: "error",
          duration: 2000,
        });
      }
    },
    buildConditionDescription(condition_key) {
      let filterSymbol = '',
        arrFilter = [];
      condition_key.forEach(item => {
        if (item.type !== 'stock_date') {
          if (item.type === 'symbol') {
            filterSymbol = item.value;
          } else {
            let filterText = StockFilter.buildSingleFilterDescription(item);
            arrFilter.push(filterText);
          }
        }
      })
      if (filterSymbol) {
        return `Symbol ${filterSymbol}: ${arrFilter.join(', ')}`;
      } else {
        return `All symbol: ${arrFilter.join(', ')}`;
      }
    },
    showChart(row) {
      let toDate = this.stockDate,
        fromDate = toDate.addDays(-60);
      showTradingViewChart(
        this,
        {},
        {
          symbol: row.symbol,
          daterange: [fromDate, toDate],
          offchart: [],
          onchart: [],
        }
      );
    }
  },
};
</script>
