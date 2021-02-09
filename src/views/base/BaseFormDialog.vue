<script>
export default {
  name: 'BaseFormDialog',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    async agree() {
      this.close()
    },
    cancel() {
      this.handleClose(this.close)
    },
    close() {
      this.isShow = false
    }
  }
}
</script>
