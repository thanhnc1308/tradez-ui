<template>
  <base-dialog :title="title" :visible.sync="isShow" width="75%">
    <div>
      <table-viewer
        ref="tableData"
        :store="storeHistoricalPrice"
        pagination
        autoLoad
        :columns="columnsHistoricalPrice"
      >
      </table-viewer>
    </div>
    <span slot="footer" class="dialog-footer flex flex-end">
      <base-button @click="cancel">Cancel</base-button>
    </span>
  </base-dialog>
</template>

<script>
import BaseFormDialog from "@/views/base/BaseFormDialog.vue";
import { columnsHistoricalPrice } from "@/common/columnConfig";
import TableStore from "@/common/TableStore";

export default {
  name: "DialogStock",
  extends: BaseFormDialog,
  props: {
    symbol: {
      type: String,
    },
  },
  data() {
    this.columnsHistoricalPrice = columnsHistoricalPrice;
    this.storeHistoricalPrice = new TableStore({
      proxy: {
        url: "/stock_price/historical_price",
        type: "remote",
      },
      filters: [
        {
          "key": "symbol",
          "operator": "=",
          "value": this.symbol
        }
      ]
    });
    return {
      companyName: null,
    };
  },
  created() {
    this.getCompanyName();
  },
  computed: {
    title() {
      if (this.companyName) {
        return `${this.symbol} - ${this.companyName}`;
      }
      return this.symbol;
    },
  },
  methods: {
    getCompanyName() {
      this.companyName = 'companyName'
    },
  },
};
</script>
