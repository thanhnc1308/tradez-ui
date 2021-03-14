<template>
  <layout-list>
    <template slot="utility">
      <div class="flex flex-end filter-container">
        <!-- <base-button class="filter-item" type="primary" icon="el-icon-search">
          Search
        </base-button> -->
        <base-button
          class="filter-item"
          style="margin-left: 10px"
          type="primary"
          icon="el-icon-edit"
          @click="refresh"
        >
          Refresh
        </base-button>
        <base-button
          :loading="downloadLoading"
          class="filter-item"
          type="primary"
          icon="el-icon-download"
          @click="exportExcel"
        >
          Export
        </base-button>
      </div>
    </template>
    <template slot="table">
      <table-viewer
        ref="tableData"
        @click="onClickTableRow"
        @dblclick="onDblClickTableRow"
        :store="storeMarketInfo"
        pagination
        autoLoad
        :columns="columnsStockPrice"
      >
      </table-viewer>
    </template>
  </layout-list>
</template>

<script>
import BaseFormList from "@/views/base/BaseFormList.vue";
import LayoutList from "@/views/base/LayoutList.vue";
import StockViewer from "@/views/market-info/StockViewer";
import { columnsStockPrice } from "@/common/columnConfig";
import TableStore from "@/common/TableStore";
import StockPriceAPI from "@/api/StockPriceAPI";

export default {
  name: "ListStock",
  extends: BaseFormList,
  components: {
    LayoutList,
  },
  data() {
    this.columnsStockPrice = columnsStockPrice;
    this.storeMarketInfo = new TableStore({
      proxy: {
        url: "/stock_price/market_info",
        type: "remote",
      },
    });
    return {};
  },
  methods: {
    /**
     * @override
     */
    getApi() {
      return new StockPriceAPI();
    },
    /**
     * @override
     */
    onClickTableRow(row) {
      StockViewer.show(row, this);
    },
    /**
     * @override
     */
    onDblClickTableRow(row) {
      StockViewer.show(row, this);
    },
    /**
     * @override
     */
    getDataForExportExcel() {
      const filterVal = [
        "date",
        "symbol",
        "type",
        "entry",
        "exit",
        "pnl",
        "comment",
      ];
      return this.formatJson(filterVal);
    },
    /**
     * @override
     */
    formatJson(filterVal) {
      let data = this.tableContainer.store.getData();
      return data.map((v) =>
        filterVal.map((j) => {
          if (j === "date") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    /**
     * @override
     */
    getHeaderForExportExcel() {
      return ["date", "symbol", "type", "entry", "exit", "pnl", "comment"];
    },
    /**
     * @override
     */
    getFileNameExcel() {
      return "stock";
    },
  },
};
</script>
