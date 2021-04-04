<template>
  <base-dialog
    title="Choose stock filters"
    v-shortkey="{ Save: ['ctrl', 's'], Close: ['esc'] }"
    @shortkey="handleShortkeyAction"
    :visible.sync="isShow"
    width="770px"
  >
    <div class="list-selected-filters">
      <div v-if="caller === 'stock_screener'" class="filter-item flex mb-1">
        <div class="filter-type mr-1">Transaction Date</div>
        <div class="filter-operation">
          <base-date-picker
            v-model="stockDate"
            type="date"
            placeholder="Pick a day"
          />
        </div>
      </div>
      <div v-if="caller === 'dialog_notification'" class="filter-item flex mb-1">
        <div class="filter-type mr-1">Symbol</div>
        <div class="filter-operation">
          <el-select
          v-model="symbol"
          class="filter-item"
          placeholder="Please select"
        >
          <el-option
            v-for="symbol in listStock"
            :key="symbol"
            :label="symbol"
            :value="symbol"
          />
        </el-select>
        </div>
      </div>
      <div v-if="caller === 'dialog_backtest'" class="filter-item flex mb-1">
        <div class="filter-type mr-1">Period</div>
        <div class="filter-operation">
          <base-date-picker
            v-model="stockDate"
            type="date"
            placeholder="Pick a day"
          />
          <div class="ml-1 mr-1">-</div>
          <base-date-picker
            v-model="stockDate"
            type="date"
            placeholder="Pick a day"
          />
        </div>
      </div>
      <div
        v-for="filter in filters"
        :key="filter.id"
        class="filter-item flex mb-1"
      >
        <div class="filter-type mr-1">
          {{ filter.label }}
        </div>
        <div class="filter-operation mr-1">
          <div
            v-if="filter.operation.type === 'combo'"
            class="filter-operation__combo"
          >
            <el-select
              v-model="filter.operation.value"
              filterable
              placeholder="Select filter"
            >
              <el-option
                v-for="item in filter.operation.list"
                :key="`operation_${item.key}_${filter.id}`"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="filter-value mr-1">
          <div
            v-if="['in_range', 'not_in_range'].includes(filter.operation.value)"
            class="filter-value-item"
          >
            <base-input-number-range
              :controls="false"
              v-model="filter.value.value"
            ></base-input-number-range>
          </div>
          <div
            v-else-if="filter.value.type === 'input'"
            class="filter-value-item"
          >
            <base-input-number
              class="w-120"
              :controls="false"
              v-model="filter.value.value"
            ></base-input-number>
          </div>
          <div
            v-else-if="
              [
                'Input_LOHLC',
                'Input_LOHLC_EMA',
                'Input_LOHLC_SMA',
                'Input_LOHLC_MACD_Signal',
                'Input_LOHLC_MACD_Level',
                'Input_LOHLC_Stock_D',
                'Input_LOHLC_Stock_K',
              ].includes(filter.value.type)
            "
            class="filter-value-item flex"
          >
            <el-select
              v-model="filter.value.typeValue"
              filterable
              class="w-120"
              :class="{ 'mr-1': filter.value.typeValue === 'input' }"
              placeholder="Select type of filter value"
            >
              <el-option
                v-for="item in filter.value.list"
                :key="`value_${item.type}_${filter.id}`"
                :label="item.label"
                :value="item.type"
              />
            </el-select>
            <base-input-number
              class="w-120"
              :controls="false"
              v-if="filter.value.typeValue === 'input'"
              v-model="filter.value.value"
            ></base-input-number>
          </div>
          <div
            v-else-if="['comboFilter'].includes(filter.value.type)"
            class="filter-value-item flex"
          >
            <el-select
              v-model="filter.value.value"
              filterable
              class="w-120"
              placeholder="Select candlestick pattern"
            >
              <el-option
                v-for="item in filter.value.list"
                :key="`value_${item.type}_${filter.id}`"
                :label="item.label"
                :value="item.type"
              />
            </el-select>
          </div>
        </div>
        <div class="remove-filter">
          <i @click="removeFilter(filter)" class="el-icon-delete c-pointer"></i>
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
          >Confirm</base-button
        >
      </div>
    </span>
  </base-dialog>
</template>

<script>
import BaseFormDialog from "@/views/base/BaseFormDialog.vue";
import { listFilters, listOperation } from "@/data/StockFilterData";
import StockFilter from "@/views/stock-screener/StockFilter.js";
import BaseInputNumberRange from "@/components/BaseComponent/input-number/BaseInputNumberRange.vue";

export default {
  name: "ChooseStockFilters",
  extends: BaseFormDialog,
  components: {
    BaseInputNumberRange,
  },
  props: {
    /**
     * form that shows this dialog
     * stock_screener - dialog_notification - dialog_backtest
     */
    caller: {
      type: String,
      default: 'stock_screener'
    }
  },
  mounted() {
    this.$el.click();
  },
  data() {
    this.listStock = ["RAL", "HPG", "VIC"];
    this.listFilters = listFilters.clone();
    this.listOperations = listOperation.clone();
    this.titleParam = [];
    return {
      /**
       * object stores all filters emitted to form list
       */
      filters: [],
      selectedFilter: null,
      symbol: null,
      stockDate: new Date(),
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
      this.stockFilters = this._stockFilter.buildFilter();
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
    width: 210px;
    min-width: 210px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .filter-operation {
    width: 180px;
    min-width: 180px;
  }

  .filter-value {
    flex: 1;
  }

  .remove-filter {
    margin: auto;
  }
}
</style>