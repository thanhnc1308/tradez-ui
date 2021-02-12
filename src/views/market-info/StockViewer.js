/**
 * class handle for viewing dialog stock
 */
import DialogUtil from "@/common/dialogUtil";
import DialogStock from "@/views/market-info/DialogStock.vue";

class StockViewer {
  show(row) {
    let options = {
      propsData: {
        symbol: row.symbol
      }
    };
    DialogUtil.showDialog(DialogStock, options);
  }
}

export default new StockViewer();
