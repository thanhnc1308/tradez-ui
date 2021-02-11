<template>
  <base-dialog
    :title="title"
    :visible.sync="isShow"
    width="75%"
  >
    <span>Stock info</span>
    <span slot="footer" class="dialog-footer flex flex-between">
      <div class="left-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="agree">Save</el-button>
      </div>
    </span>
  </base-dialog>
</template>

<script>
import BaseFormDialog from '@/views/base/BaseFormDialog.vue'
import { callBase } from '@/mixins/callBase.js'

export default {
  name: 'DialogStock',
  extends: BaseFormDialog,
  mixins: [callBase],
  props: {
    symbol: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  computed: {
    title() {
      return this.symbol;
    }
  },
  methods: {

  }
}
</script>
