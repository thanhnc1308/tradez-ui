<script>
import DialogUtil from "@/common/dialogUtil";

export default {
  name: "BaseFormList",
  computed: {
    tableContainer() {
      return this.$refs.tableData;
    },
  },
  data() {
    return {
      downloadLoading: false,
      list: [],
    };
  },
  methods: {
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
        options = this.getCreateOptions(row);
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
        "close": this.onDialogClose
      }
    },
    onDialogClose(dialogResult) {
      if (dialogResult === 'Confirm') {
        this.tableContainer.doQuery();
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
  },
};
</script>
