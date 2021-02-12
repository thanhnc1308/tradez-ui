<template>
  <base-dialog
    :title="title"
    :visible.sync="isShow"
    width="75%"
  >
    <base-image
      :src="url"
    >
    </base-image>
    <!-- <img width="100%" :src="url" alt=""> -->
  </base-dialog>
</template>

<script>
import BaseFormDialog from '@/views/base/BaseFormDialog.vue'

export default {
  name: 'DialogImageViewer',
  extends: BaseFormDialog,
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
