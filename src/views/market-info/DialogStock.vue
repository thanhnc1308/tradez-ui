<template>
  <base-dialog class="stock-viewer" :title="title" :visible.sync="isShow" width="75%" height="75%">
    <!-- <div> -->
      <table-viewer
        ref="tableData"
        :store="storeHistoricalPrice"
        pagination
        :columns="columnsHistoricalPrice"
      >
      </table-viewer>
    <!-- </div> -->
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
    /**
     * @override
     */
    prepareWhenShowDialog(options) {
      for (const key in options) {
        if (Object.hasOwnProperty.call(options, key)) {
          this[key] = options[key];
        }
      }
      this.storeHistoricalPrice.filters = [
        {
          "key": "symbol",
          "operator": "=",
          "value": this.symbol
        }
      ]
      this.$nextTick(() => {
        this.refresh();
      })
    },
    refresh() {
      this.$refs.tableData.doQuery();
    },
    getCompanyName() {
      // this.companyName = 'companyName'
    },
  },
};
</script>

<style lang="scss" scoped>
// .stock-viewer {
//   >>> .el-dialog__body {
//     height: 100%;
//     >>> .table-viewer {
//       height: 100%;
//       >>> .el-table {
//         height: 100%;
//         >>> .el-table__body-wrapper {
//           height: 100%;
//           overflow: overlay;
//         }
//       }
//     }
//   }
// }
</style>