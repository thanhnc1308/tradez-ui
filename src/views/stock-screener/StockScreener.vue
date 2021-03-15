<template>
  <div>
    <div class="choose-filters">
      <base-button type="primary" @click="showDialogChooseFilters"
        >Choose filters</base-button
      >
      <base-button type="primary" @click="refresh">Refresh</base-button>
      <base-button type="primary" @click="saveFilters">Save filters</base-button>
    </div>
    <div class="result">
      <div class="filter-title">{{ title }}</div>
      <div class="table-result">
        <table-viewer
          ref="tableData"
          @click="onClickTableRow"
          :store="storeStockScreener"
          :pagination="false"
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
import { EnumColumnType, EnumFormatType } from "@/common/enum";

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
          if (filter.type !== "stock_date") {
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
        let filterDate = filters.find(item => item.type === 'stock_date');
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
    setColumnTable(filters) {
      this.$refs.tableData.columnsx = this.$refs.tableData.columnsx.filter(
        (item) => !item.isCustomColumn
      );
      filters.forEach((filter) => {
        if (filter.type !== "stock_date") {
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
      alert('saved')
    }
  },
};
</script>
