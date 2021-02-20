<script>
import Vue from "vue";
import DialogUtil from "@/common/dialogUtil";
import BaseAPI from "@/api/BaseAPI";

export default {
  name: "BaseFormList",
  computed: {
    tableContainer() {
      return this.$refs.tableData;
    },
  },
  created() {
    /**
     * form detail dialog
     */
    this._frmDetail = null;
  },
  mounted() {
    this.processAsyncTaskWhenMounted();
    this.addHandler();
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
    //#region Main flow
    /**
     * process all async task in hook mounted here
     * do not put async hook mounted
     */
    async processAsyncTaskWhenMounted() {
      await this.setTablePerPage();
      await this.loadTableLayout();
      await this.setTableDefaultFilter();
      await this.loadTableData();
    },
    async setTablePerPage() {},
    async loadTableLayout() {},
    async setTableDefaultFilter() {},
    async loadTableData() {
      let tableContainer = this.tableContainer;
      if (tableContainer) {
        let store = tableContainer.store;
        if (store) {
          let lastFilters = this.lastFilters || [],
            filters = this.getFilterBeforeLoad();
          // remove old filters
          if (lastFilters && lastFilters.length > 0) {
            store.filters.remove(lastFilters);
          }
          store.addFilter(filters);
          // save to remove later
          this.lastFilters = filters;

          // NCThanh-TODO: do query for table here
        }
      }
    },
    /**
     * @override
     */
    getFilterBeforeLoad() {
      return [];
    },
    addHandler() {
      this.addTableHandler();
    },
    addTableHandler() {
      if (this.tableContainer) {
        this.tableContainer.$on("filter", () => {});
        this.tableContainer.$on("loaded", () => {});
        this.tableContainer.$on("perPageChanged", () => {});
      }
    },
    removeHandler() {
      this.removeTableHandler();
    },
    removeTableHandler() {
      if (this.tableContainer) {
        this.tableContainer.$off("filter", () => {});
        this.tableContainer.$off("loaded", () => {});
        this.tableContainer.$off("perPageChanged", () => {});
      }
    },
    //#endregion
    //#endregion CRUD
    onButtonClick(command, data) {
      switch (command) {
        case "Create":
          break;
        case "Edit":
          break;
        case "Duplicate":
          break;
        case "View":
          break;
        case "Delete":
          break;
      }
    },
    /**
     * form dialog detail component
     * @override
     */
    getFormDetailComponent() {
      return null;
    },
    create() {
      let DetailForm = this.getFormDetailComponent(),
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
      let DetailForm = this.getFormDetailComponent(),
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
      let DetailForm = this.getFormDetailComponent(),
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
        close: this.onFormDetailClose,
      };
    },
    showFormDetail(mode, entity) {
      let frmDetail = this._frmDetail;
      if (!frmDetail) {
        let FormDetailComponent = this.getFormDetailComponent();
        if (FormDetailComponent) {
          let FormDetailClass = Vue.extend(FormDetailComponent);
          frmDetail = new FormDetailClass({
            i18n: this.$i18n,
            router: this.$router,
            propsData: this.getCustomPropsForFormDetail(),
            data: this.getCustomDataForFormDetail(),
          });
          frmDetail.mode = mode;
          frmDetail.$mount();
          this.$el.appendChild(frmDetail.$el);
          this._frmDetail = frmDetail;
          this.addHandlerForFormDetail(frmDetail);
        }
      }
      this.initStaticDataForFormDetail(frmDetail);
      this.prepareBeforeShow(frmDetail, mode, entity);
      frmDetail.show();
    },
    /**
     * @override
     */
    getCustomPropsForFormDetail() {},
    /**
     * @override
     */
    getCustomDataForFormDetail() {},
    /**
     * @override
     */
    addHandlerForFormDetail(frmDetail) {
      if (frmDetail) {
        let listEvent = this.getEventHandlerForFormDetail();
        if (listEvent && listEvent instanceof Object) {
          for (const key in listEvent) {
            if (Object.hasOwnProperty.call(listEvent, key)) {
              const fn = listEvent[key];
              if (!frmDetail._events[key]) {
                frmDetail.$on(key, fn);
              }
            }
          }
        }
      }
    },
    /**
     * @override
     */
    getEventHandlerForFormDetail() {
      const self = this;
      return {
        close: self.onFormDetailClose,
      };
    },
    /**
     * @override
     */
    initStaticDataForFormDetail(frmDetail) {
      // api
      // title
      // TableStore
    },
    prepareBeforeShow(frmDetail, mode, entity) {
      if (mode === "Create") {
        frmDetail.currentItem = this.getDefaultItem();
      } else {
        frmDetail.currentItem = entity;
      }
    },
    /**
     * @override
     */
    getDefaultItem() {
      return {};
    },
    onFormDetailClose(dialogResult) {
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
          // NCThanh1-TODO: show mask
          const res = await this.api.delete(row);
          if (res && res.success) {
            // NCThanh1-TODO: create some log here
            this.$notify({
              title: "Success",
              message: "Delete Successfully",
              type: "success",
              duration: 2000,
            });
            await this.refresh();
          } else {
            // handle error
            this.$notify({
              title: "Error",
              message: res.message || "An error has occured",
              type: "danger",
              duration: 2000,
            });
          }
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
    // exportExcel() {
    //   let param = this.getExportExcelParams();
    //   exportApi.export(param);
    // },
    exportExcel() {
      const self = this;
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then((excel) => {
        const header = self.getHeaderForExportExcel();
        const data = self.getDataForExportExcel();
        const filename = self.getFileNameExcel();
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
    },
    //#endregion Methods
    //#region Shortkey
    handleShortkey(e) {
      e.originEvent.preventDefault();
      e.originEvent.stopPropagation();
      e.originEvent.cancel = true;
      let selectedItem = null; // TODO: get selected item for delete
      this.onButtonClick(e.srcKey, selectedItem);
    },
    //#endregion Shortkey
  },
  /**
   * remove all event listener before destroying the form
   */
  beforeDestroy() {
    this.removeHandler();
  }
};
</script>
