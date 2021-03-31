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
        @dblclick="onDblClickTableRow"
        :store="storeNotification"
        pagination
        hasActionColumn
        autoLoad
        :columns="columnsNotification"
      >
        <template slot="actions" slot-scope="{ row }">
          <el-dropdown split-button type="primary" size="small" @click="edit(row)">
            Edit
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div @click="view(row)">View</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="deleteEntity(row)">Delete</span>
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
import { columnsNotification } from "@/common/columnConfig";
import DialogNotification from "@/views/notification/DialogNotification.vue";
import TableStore from "@/common/TableStore";
import NotificationAPI from '@/api/NotificationAPI';

export default {
  name: "ListNotification",
  extends: BaseFormList,
  components: {
    LayoutList,
  },
  data() {
    this.columnsNotification = columnsNotification;
    this.storeNotification = new TableStore({
      proxy: {
        url: "/journals",
        type: "remote",
      }
    });
    return {};
  },
  methods: {
    /**
     * @override
     */
    getApi() {
      return new NotificationAPI();
    },
    /**
     * form dialog detail
     * @override
     */
    getFormDetailComponent() {
      return DialogNotification;
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
      return "notification";
    },
  },
};
</script>
