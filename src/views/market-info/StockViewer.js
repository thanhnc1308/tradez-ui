/**
 * class handle for viewing dialog stock
 */
import DialogUtil from "@/common/DialogUtil";

class StockViewer {
  async show(row, owner) {
    if (!this.dialog) {
      let DialogStock = await import ("@/views/market-info/DialogStock.vue");
      this.dialog = DialogUtil.prepareDialog(DialogStock, owner);
    }
    let showOptions = {
      symbol: row.symbol
    };
    DialogUtil.showDialog(this.dialog, showOptions);
  }
}

export default new StockViewer();
