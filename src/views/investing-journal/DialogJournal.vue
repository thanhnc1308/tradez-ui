<template>
  <base-dialog
    :title="title"
    :visible.sync="isShow"
    width="75%"
    :before-close="handleClose"
  >
    <span>Choose type of notification</span>
    <el-select v-model="selectedNotification" placeholder="Select">
      <el-option
        v-for="item in listNotificationTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <span slot="footer" class="dialog-footer flex flex-between">
      <div class="right-footer">
        <el-button @click="goToSettings">Settings</el-button>
      </div>
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
  name: 'DialogAddNewNotification',
  extends: BaseFormDialog,
  mixins: [callBase],
  data() {
    this.listNotificationTypes = [
      /**
       * 1. Increase/Decrease in number of transaction
       * 2. Break the top or bottom in number of transaction
       */
      {
        label: 'Voletile',
        value: '1'
      },
      /**
       * 1. Price goes above SMA (EMA): n periods
       * 2. Price goes below SMA EMA: n periods
       * 3. Short-term SMA (EMA) goes above long-term
       * 4. Short-term SMA (EMA) goes below long-term
       */
      {
        label: 'SMA',
        value: '2'
      },
      {
        label: 'EMA',
        value: '3'
      },
      /**
       * RSI goes into/out overbought/oversold area
       */
      {
        label: 'RSI',
        value: '4'
      },
      /**
       * MFI goes into/out overbought/oversold area
       */
      {
        label: 'MFI',
        value: '5'
      },
      /**
       * MACD goes above/below signal line/zero line
       */
      {
        label: 'MACD',
        value: '6'
      },
      /**
       * Price goes above/below upper/lower band
       */
      {
        label: 'Bolinger Band',
        value: '7'
      }
    ]
    return {
      selectedNotification: '1'
    }
  },
  computed: {
    title() {
      return 'Add new notification'
    }
  },
  methods: {
    async agree() {
      this.close()
    },
    /**
     * redirect to setting page
     */
    goToSettings() {

    }
  }
}
</script>
