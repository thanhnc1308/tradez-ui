<template>
  <div>
    <div class="choose-filters">
      <base-button type="primary" @click="showDialogChooseFilters"
        >Choose filters</base-button
      >
      <base-button type="primary" @click="refresh">Refresh</base-button>
    </div>
    <div class="result">
      <div class="filter-title">Some title</div>
      <div class="table-result">
        <table-viewer
          ref="tableData"
          @click="onClickTableRow"
          :store="storeStockScreener"
          pagination
          :columns="columnsStockScreener"
        >
        </table-viewer>
      </div>
    </div>
    <div>Add to WatchList</div>
  </div>
</template>

<script>
import DialogUtil from "@/common/DialogUtil";
import StockViewer from "@/views/market-info/StockViewer";
import { columnsStockScreener } from "@/common/columnConfig";
import TableStore from "@/common/TableStore";

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
    return {};
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
        this.loadListStock();
        // set cache currentParams
      }
    },
    refresh() {
      this.loadListStock();
    },
    loadListStock() {
      // let filters = this.currentParams.stockFilters;
      let filters = [
        { type: "bb_20_lower", operation: "less", value: 10 },
        { type: "bb_20_upper", operation: "nequal", value: 20 },
        { type: "rsi14", operation: "egreater", value: 40 },
        { type: "ema200", operation: "in_range", value: [10,40] },
        { type: "ema20", operation: "not_in_range", value: [10,40] },
      ];
      let columns = ["symbol"];
      if (filters.length > 0) {
        let options = {
          data: {
            filters,
            columns,
          },
        };
        this.storeStockScreener.load(options);
      }
    },
    onClickTableRow(row) {
      StockViewer.show(row);
    },
  },
};
</script>
