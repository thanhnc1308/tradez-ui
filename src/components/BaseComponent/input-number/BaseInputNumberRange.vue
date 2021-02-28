<template>
  <div class="flex vertical-center">
    <base-input-number
      class="w-120 mr-1"
      :controls="false"
      v-model="value1"
    ></base-input-number>
    <div>-</div>
    <base-input-number
      class="w-120 ml-1"
      :controls="false"
      v-model="value2"
    ></base-input-number>
  </div>
</template>
<script>
export default {
  name: "BaseInputNumberRange",
  props: {
    value: [Array, Number],
  },
  data() {
    return {
      value1: 0,
      value2: 0,
    };
  },
  created() {
    if (this.value instanceof Array) {
      this.value1 = this.value[0];
      this.value1 = this.value[1];
    } else if (this.value instanceof Number) {
      this.value1 = this.value2 = this.value;
    }
  },
  watch: {
    value1: {
      immediate: true,
      handler(value) {
        let result = [this.value1 || 0, this.value2 || 0];
        this.$emit("input", result);
      },
    },
    value2: {
      immediate: true,
      handler(value) {
        let result = [this.value1 || 0, this.value2 || 0];
        this.$emit("input", result);
      },
    },
  },
};
</script>
