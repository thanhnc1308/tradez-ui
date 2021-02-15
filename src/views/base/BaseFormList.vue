<script>
import DialogUtil from "@/common/dialogUtil";
import BaseAPI from "@/api/BaseAPI";

export default {
  name: "BaseFormList",
  computed: {
    tableContainer() {
      return this.$refs.tableData;
    },
  },
  data() {
    this.api = this.getApi();
    return {
      downloadLoading: false,
      list: [],
    };
  },
  methods: {
    /**
     * @override
     */
    getApi() {
      return new BaseAPI();
    },
    //#endregion CRUD
    /**
     * form dialog detail
     * @override
     */
    getDialogDetailForm() {
      return null;
    },
    create() {
      let DetailForm = this.getDialogDetailForm(),
        options = this.getCreateOptions(),
        events = this.getDialogHandler();
      DialogUtil.showDialog(DetailForm, options, events);
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
        options = this.getViewOptions(row);
      DialogUtil.showDialog(DetailForm, options);
    },
    getViewOptions(row) {
      return {
        propsData: {
          formStatus: "View",
          selectedItem: row,
        },
      };
    },
    edit(row) {
      let DetailForm = this.getDialogDetailForm(),
        options = this.getEditOptions(row),
        events = this.getDialogHandler();
      DialogUtil.showDialog(DetailForm, options, events);
    },
    getEditOptions(row) {
      return {
        propsData: {
          formStatus: "Edit",
          selectedItem: row,
        },
      };
    },
    getDialogHandler() {
      return {
        close: this.onDialogClose,
      };
    },
    onDialogClose(dialogResult) {
      if (dialogResult === "Confirm") {
        this.refresh();
      }
    },
    deleteEntity(row) {
      let message = this.getDeleteMessage();
      this.$confirm(message, "Warning", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(async () => {
          const res = await this.api.delete(row)
          if (res && res.success) {
            this.$notify({
              title: "Success",
              message: "Delete Successfully",
              type: "success",
              duration: 2000,
            });
          } else {
            this.$notify({
              title: "Error",
              message: res.message || "An error has occured",
              type: "danger",
              duration: 2000,
            });
          }
          await this.refresh();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getDeleteMessage() {
      return `Confirm to remove this item?`;
    },
    //#endregion CRUD
    //#region search
    search() {},
    //#endregion search
    //#region export excel
    exportExcel() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then((excel) => {
        const header = this.getHeaderForExportExcel();
        const data = this.getDataForExportExcel();
        const filename = this.getFileNameExcel();
        excel.export_json_to_excel({
          header,
          data,
          filename,
        });
        this.downloadLoading = false;
      });
    },
    /**
     * @override
     */
    getDataForExportExcel() {
      return [];
    },
    /**
     * @override
     */
    getHeaderForExportExcel() {
      return [];
    },
    /**
     * @override
     */
    getFileNameExcel() {
      return "file";
    },
    //#endregion export excel
    //#region Methods
    refresh() {
      this.tableContainer.doQuery();
    }
    //#endregion Methods
  },
};
</script>
