/**
 * class handle for viewing dialog stock
 */
import DialogUtil from "@/common/DialogUtil";
import DialogStock from "@/views/market-info/DialogStock.vue";

class StockViewer {
  show(row) {
    let initOptions = {
      propsData: {
        symbol: row.symbol
      }
    };
    if (!this.dialog) {
      this.dialog = DialogUtil.prepareDialog(DialogStock, null, initOptions);
    }
    DialogUtil.showDialog(this.dialog);
  }
}

export default new StockViewer();
