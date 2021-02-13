<template>
  <layout-list>
    <template slot="utility">
      <div class="flex flex-end filter-container">
        <el-button class="filter-item" type="primary" icon="el-icon-search">
          Search
        </el-button>
        <el-button
          class="filter-item"
          style="margin-left: 10px"
          type="primary"
          icon="el-icon-edit"
          @click="create"
        >
          Add
        </el-button>
        <el-button
          :loading="downloadLoading"
          class="filter-item"
          type="primary"
          icon="el-icon-download"
          @click="exportExcel"
        >
          Export
        </el-button>
      </div>
    </template>
    <template slot="table">
      <table-viewer
        ref="tableData"
        @click="onClickTableRow"
        :store="storeJournal"
        pagination
        autoLoad
        :columns="columnsJournal"
      ></table-viewer>
    </template>
  </layout-list>
</template>

<script>
import BaseFormList from "@/views/base/BaseFormList.vue";
import LayoutList from "@/views/base/LayoutList.vue";
import StockViewer from "@/views/market-info/StockViewer";
import { columnsJournal } from "@/common/columnConfig";
import DialogJournal from "@/views/investing-journal/DialogJournal.vue";
import TableStore from "@/common/TableStore";

export default {
  name: "InvestingJournal",
  extends: BaseFormList,
  components: {
    LayoutList,
  },
  data() {
    this.columnsJournal = columnsJournal;
    this.storeJournal = new TableStore({
      proxy: {
        url: 'test',
        type: 'remote'
      }
      // data: [
      //   {
      //     date: new Date(),
      //     symbol: "RAL",
      //     type: "Buy",
      //     entry: 100000,
      //     exit: 120000,
      //     pnl: 20,
      //     status: 1,
      //     screenshot:
      //       "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      //     comment: "this is a comment",
      //   },
      // ]
    });
    return {};
  },
  methods: {
    /**
     * form dialog detail
     * @override
     */
    getDialogDetailForm() {
      return DialogJournal;
    },
    /**
     * @override
     */
    onClickTableRow(row) {
      StockViewer.show(row);
    },
    /**
     * @override
     */
    getDataForExportExcel() {
      const filterVal = ["date", "symbol", "type", "entry", "exit", "pnl", "comment"];
      return this.formatJson(filterVal);
    },
    /**
     * @override
     */
    formatJson(filterVal) {
      return this.list.map((v) =>
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
      return "investing-journal";
    },
  },
};
</script>
