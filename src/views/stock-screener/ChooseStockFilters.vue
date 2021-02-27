<template>
  <base-dialog
    title="Choose stock filters"
    v-shortkey="{ Save: ['ctrl', 's'], Close: ['esc'] }"
    @shortkey="handleShortkeyAction"
    :visible.sync="isShow"
    width="75%"
  >
    <div class="list-selected-filters">
      <div v-for="item in filters" :key="item.id" class="filter-item flex mb-1">
        <div class="filter-type mr-1">
          {{ item.label }}
        </div>
        <div class="filter-operator mr-1">
          {{ item.operator }}
        </div>
        <div class="filter-value mr-1">
          {{ item.defaultValue }}
        </div>
        <div class="remove-filter">
          <i @click="removeFilter(item)" class="el-icon-delete c-pointer"></i>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer flex flex-between">
      <div class="footer-left">
        <el-select
          @change="onSelectFilter"
          v-model="selectedFilter"
          filterable
          placeholder="Select filter"
        >
          <el-option
            v-for="item in listFilters"
            :key="item.type"
            :label="item.label"
            :value="item"
          />
        </el-select>
      </div>
      <div class="footer-right">
        <base-button @click="onButtonClick('Cancel')">Cancel</base-button>
        <base-button type="primary" @click="onButtonClick('Confirm')"
          >View</base-button
        >
      </div>
    </span>
  </base-dialog>
</template>

<script>
import BaseFormDialog from "@/views/base/BaseFormDialog.vue";
import { listFilters, listOperation } from "@/data/StockFilters";
import StockFilter from "@/views/stock-screener/StockFilter.js";

export default {
  name: "ChooseStockFilters",
  extends: BaseFormDialog,
  data() {
    this.listFilters = listFilters.clone();
    this.listOperations = listOperation.clone();
    this.titleParam = [];
    return {
      /**
       * object stores all filters emitted to form list
       */
      filters: [],
      selectedFilter: null,
    };
  },
  created() {
    this._stockFilter = new StockFilter(this.filters);
  },
  methods: {
    async handleConfirm() {
      if (await !this.validateFilters()) {
        return;
      }
    },
    async validateFilters() {
      return true;
    },
    handleShortkeyAction(event) {
      switch (event.srcKey) {
        case "Save":
          this.onButtonClick("Confirm");
          break;
        case "Close":
          this.onButtonClick("Cancel");
          break;
      }
    },
    onSelectFilter(filter) {
      this._stockFilter.add(filter);
      this.selectedFilter = null;
    },
    removeFilter(filter) {
      this._stockFilter.remove(filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-item {
  .filter-type {
    min-width: 10rem;
  }

  .filter-operator {
    min-width: 10rem;
  }

  .filter-value {
    min-width: 10rem;
  }
}
</style>