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
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    async confirm() {
      this.dialogResult = 'Confirm';
      await this.handleConfirm();
      this.close();
    },
    /**
     * @override
     */
    async handleConfirm() {},
    cancel() {
      this.dialogResult = 'Cancel';
      this.close();
    },
    close() {
      this.$emit("close", this.dialogResult);
      this.isShow = false;
    },
  },
};
</script>
