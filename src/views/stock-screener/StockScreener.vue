<template>
  <div>
    <div class="choose-filters">
      <base-button type="primary" @click="showDialogChooseFilters"
        >Choose filters</base-button
      >
    </div>
    <div class="result">
      <div class="filter-title">Some title</div>
      <div class="table-result"></div>
    </div>
    <div>Add to WatchList</div>
  </div>
</template>

<script>
import DialogUtil from "@/common/DialogUtil";

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
    return {};
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
        this.dialog = DialogUtil.prepareDialog(this.component, this, initOptions);
      }
      let showOptions = {};
      DialogUtil.showDialog(this.dialog, showOptions);
    },
    onDialogChooseStockFiltersClose(dialogResult, frm) {
      debugger;
      if (dialogResult === "Confirm") {
        this.currentParams.stockFilters = frm.stockFilters;
        this.currentParams.titleParam = frm.titleParam;
        this.loadListStock();
        // set cache currentParams
      }
    },
    loadListStock() {},
  },
};
</script>
