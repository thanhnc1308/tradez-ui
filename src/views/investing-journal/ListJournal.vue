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
        @click="onClickTableRow"
        :pagination="true"
        :columns="columnsJournal"
      ></table-viewer>
    </template>
  </layout-list>
</template>

<script>
import BaseList from "@/views/base/BaseList.vue";
import LayoutList from "@/views/base/LayoutList.vue";
import StockViewer from "@/views/market-info/StockViewer";
import { columnsJournal } from "@/common/columnConfig";
import DialogJournal from "@/views/investing-journal/DialogJournal.vue";

export default {
  name: "InvestingJournal",
  extends: BaseList,
  components: {
    LayoutList,
  },
  data() {
    this.columnsJournal = columnsJournal;
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
  },
};
</script>
