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
      <base-form-item class="w-full" label="Condition" prop="condition">
        {{ currentItem.condition_description }}
      </base-form-item>
    </base-form>
    <span slot="footer" class="dialog-footer flex flex-end">
      <base-button @click="openChooseStockFilterDialog">Choose conditions</base-button>
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
import DialogUtil from "@/common/DialogUtil";

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
        condition_key: "",
        condition_description: ""
      };
    },
    /**
     * @override
     */
    getPayloadForSave() {
      let result = { ...this.currentItem };
      result.condition_key = result.condition_key ? JSON.stringify(result.condition_key) : null;
      return result;
    },
    async openChooseStockFilterDialog() {
      if (!this.component) {
        this.component = await import(
          "@/views/stock-screener/ChooseStockFilters.vue"
        );
      }
      if (!this.dialog) {
        let initOptions = {
          options: {
            propsData: {
              caller: 'dialog_notification'
            }
          },
          events: {
            close: this.onDialogChooseStockFiltersClose,
          },
        };
        this.dialog = DialogUtil.prepareDialog(
          this.component,
          this,
          initOptions
        );
      }
      let showOptions = {};
      DialogUtil.showDialog(this.dialog, showOptions);
    },
    onDialogChooseStockFiltersClose(dialogResult, frm) {
      if (dialogResult === "Confirm") {
        this.currentItem.condition_key = frm.stockFilters;
        this.currentItem.condition_description = this.buildConditionDescription(frm.stockFilters, frm.symbol);
      }
    },
    buildConditionDescription(condition_key, symbol) {
      let filters = condition_key;
      if (symbol) {
        let filterSymbol = filters.find(item => item.type === 'symbol');
        if (filterSymbol) {
          filterSymbol.value = symbol;
        } else {
          filters.push({
            type: "symbol",
            operation: "equals",
            value:symbol
          })
        }
      }
      let filterDate = filters.find(item => item.type === 'stock_date');
      if (filterDate) {
        filterDate.value = new Date().toLocaleDateString("en-US");
      } else {
        filters.push({
          type: "stock_date",
          operation: "equals",
          value: new Date().toLocaleDateString("en-US"),
        });
      }
      return JSON.stringify(filters);
    }
  },
};
</script>
