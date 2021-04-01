<template>
  <base-dialog
    :title="title"
    :visible.sync="isShow"
    @shortkey="handleShortkeyAction"
    width="75%"
    :before-close="handleClose"
  >
    <base-form
      ref="dataForm"
      :inline="true"
      :rules="getFormRules()"
      :model="currentItem"
      label-position="left"
      label-width="150px"
    >
      <base-form-item class="w-full" label="Description" prop="description">
        <base-input
          :autosize="{ minRows: 2, maxRows: 4 }"
          class="w-full"
          type="textarea"
          :disabled="isViewing"
          v-model="currentItem.description"
        />
      </base-form-item>
      <base-form-item class="w-2/3" label="Gmail" prop="gmail">
        <base-input :disabled="isViewing" v-model="currentItem.gmail" />
      </base-form-item>
      <base-form-item label="Send Gmail" prop="send_gmail">
        <base-checkbox :disabled="isViewing" v-model="currentItem.send_gmail" />
      </base-form-item>
      <base-form-item class="w-2/3" label="Telegram Chat ID" prop="tg_chat_id">
        <base-input :disabled="isViewing" v-model="currentItem.tg_chat_id" />
      </base-form-item>
      <base-form-item label="Send Telegram" prop="send_telegram">
        <base-checkbox :disabled="isViewing" v-model="currentItem.send_telegram" />
      </base-form-item>
    </base-form>
    <span slot="footer" class="dialog-footer flex flex-end">
      <base-button @click="cancel">Cancel</base-button>
      <base-button v-if="!isViewing" type="primary" @click="confirm"
        >Save</base-button
      >
    </span>
  </base-dialog>
</template>

<script>
import BaseFormDetail from "@/views/base/BaseFormDetail.vue";
import { callBase } from "@/mixins/callBase";
import NotificationAPI from "@/api/NotificationAPI";

export default {
  name: "DialogNotification",
  extends: BaseFormDetail,
  mixins: [callBase],
  data() {
    return {};
  },
  computed: {
    /**
     * @override
     */
    formName() {
      return "notification";
    },
  },
  methods: {
    /**
     * @override
     */
    getApi() {
      return new NotificationAPI();
    },
    /**
     * @override
     */
    getFormRules() {
      return {
        gmail: [
          { required: true, message: "Gmail is required", trigger: "blur" },
        ],
      };
    },
    /**
     * @override
     */
    resetForm() {
      this.currentItem = {
        description: "",
        gmail: "",
        send_gmail: false,
        tg_chat_id: "",
        send_telegram: false,
        condition: "",
      };
    },
    /**
     * @override
     */
    getPayloadForSave() {
      let result = { ...this.currentItem };
      result.condition = result.condition ? JSON.stringify(result.condition) : null;
      return result;
    },
  },
};
</script>
