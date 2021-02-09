<template>
  <div>
    <div class="open-popup">
      <base-button type="primary" @click="openPopupAddNotification">Add Notification</base-button>
    </div>
    <div class="list-notification">Notification Table</div>
  </div>
</template>

<script>
// import StockNotification from '@/views/notification/StockNotification.js'
import dialogUtil from '@/common/dialogUtil.js'
import DialogNotification from '@/views/notification/DialogNotification.vue'

export default {
  name: 'StockNotification',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async openPopupAddNotification() {
      dialogUtil.showDialog(DialogNotification)
    }
  }
}
</script>
