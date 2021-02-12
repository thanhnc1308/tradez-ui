<script>
import JsonUtil from "@/common/JsonUtil";
import DialogUtil from "@/common/dialogUtil";

export default {
  name: "BaseList",
  data() {
    return {
      downloadLoading: false,
    };
  },
  methods: {
    /**
     * form dialog detail
     * @override
     */
    getDialogDetailForm() {
      return null;
    },
    create() {
      let DetailForm = this.getDialogDetailForm(),
        options = this.getCreateOptions();
      DialogUtil.showDialog(DetailForm, options);
    },
    getCreateOptions() {
      return {
        propsData: {
          formStatus: "Create",
        },
      };
    },
    view(row) {
      let DetailForm = this.getDialogDetailForm(),
        options = this.getCreateOptions(row);
      DialogUtil.showDialog(DetailForm, options);
    },
    getViewOptions() {
      return {
        propsData: {
          formStatus: "View",
          selectedItem: row,
        },
      };
    },
    edit(row) {
      let DetailForm = this.getDialogDetailForm(),
        options = this.getEditOptions(row);
      DialogUtil.showDialog(DetailForm, options);
    },
    getEditOptions() {
      return {
        propsData: {
          formStatus: "View",
          selectedItem: row,
        },
      };
    },
    delete(row) {
      let message = this.getDeleteMessage();
      this.$confirm(message, "Warning", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(async () => {
          let id = row.id;
          // await this.api.delete(row.key)
          // this.list.splice($index, 1)
          this.$notify({
            title: "Success",
            message: "Delete Successfully",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getDeleteMessage() {
      return `Confirm to remove this item?`;
    },
    search() {},
    exportExcel() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = this.getHeaderForExportExcel();
        const filterVal = [
          "timestamp",
          "title",
          "type",
          "importance",
          "status",
        ];
        const data = JsonUtil.formatJson(filterVal);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "table-list",
        });
        this.downloadLoading = false;
      });
    },
    getHeaderForExportExcel() {
      return ["timestamp", "title", "type", "importance", "status"];
    },
  },
};
</script>
