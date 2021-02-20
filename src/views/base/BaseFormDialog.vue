<script>
export default {
  name: "BaseFormDialog",
  data() {
    /**
     * Confirm: save the currently selected item
     * Cancel: discard all the changes
     */
    this.dialogResult = "Cancel";

    this.dialogName = "dialog";
    return {
      isShow: false,
    };
  },
  mounted() {
    this.initDialogInstance();
    this.addHandler();
  },
  methods: {
    initDialogInstance() {
      if (!this._dialogVM) {
        this._dialogVM = this.$refs[this.dialogName];
      }
    },
    show(options = {}) {
      this.prepareWhenShowDialog(options);
      this.isShow = true;
    },
    /**
     * @override
     */
    prepareWhenShowDialog(options) {
      for (const key in options) {
        if (Object.hasOwnProperty.call(options, key)) {
          this[key] = options[key];
        }
      }
    },
    onButtonClick(command) {
      switch (command) {
        case "Confirm":
          this.confirm();
          break;
        case "Cancel":
        case "Close":
          this.cancel();
          break;
        default:
          break;
      }
    },
    async confirm() {
      this.dialogResult = "Confirm";
      await this.handleConfirm();
      this.close();
    },
    /**
     * @override
     */
    async handleConfirm() {},
    cancel() {
      this.dialogResult = "Cancel";
      this.handleClose(this.close);
    },
    close() {
      this.$emit("close", this.dialogResult, this);
      this.isShow = false;
    },
    handleClose(done) {
      done();
    },
    addHandler() {
      let dialog = this._dialogVM;
      if (dialog) {
        dialog.$on("close", this.closeDialog);
      }
    },
    closeDialog(isShow, event) {
      if (!isShow) {
        this.close();
      }
    },
    removeHandler() {
      let dialog = this._dialogVM;
      if (dialog) {
        dialog.$off("close", this.closeDialog);
      }
    },
  },
  beforeDestroy() {
    this.removeHandler();
  },
};
</script>
