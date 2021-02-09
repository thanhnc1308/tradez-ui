export const callBase = {
  methods: {
    callBase(methodName) {
      const base = this.$options.extends
      if (base.methods[methodName]) {
        base.methods[methodName].call(arguments)
      }
    }
  }
}
