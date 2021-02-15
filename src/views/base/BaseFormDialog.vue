<script>
export default {
  name: "BaseFormDialog",
  data() {
    /**
     * Confirm: save the currently selected item
     * Cancel: discard all the changes
     */
    this.dialogResult = "Cancel";

    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
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
      this.$emit("close", this.dialogResult);
      this.isShow = false;
    },
    handleClose(done) {
      done();
    },
  },
};
</script>
