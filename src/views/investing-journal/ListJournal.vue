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
          @click="create"
        >
          Add
        </base-button>
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
        :store="storeJournal"
        pagination
        autoLoad
        :columns="columnsJournal"
      >
        <template slot="actions" slot-scope="{ row }">
          <el-dropdown split-button type="primary" size="small" @click="edit(row)">
            Edit
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="deleteEntity(row)"> Delete </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </table-viewer>
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
        url: "/journals",
        type: "remote",
      }
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
    onDblClickTableRow(row) {
      this.edit(row);
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
