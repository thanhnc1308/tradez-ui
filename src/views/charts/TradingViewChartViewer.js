import DialogUtil from "@/common/DialogUtil";

let dialogChart = null;

export default async function showTradingViewChart(
  owner,
  initOptions = {},
  showOptions = {}
) {
  if (!dialogChart) {
    let FormChart = await import("@/views/charts/TradingVueChart.vue");
    dialogChart = DialogUtil.prepareDialog(FormChart, owner, initOptions);
  }
  DialogUtil.showDialog(dialogChart, showOptions);
}
