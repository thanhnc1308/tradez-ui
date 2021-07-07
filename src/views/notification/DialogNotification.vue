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
      <!-- <base-form-item class="w-1/3" label="Test Gmail">
        <base-button @click="sendTestEmail">Test</base-button>
      </base-form-item> -->
      <base-form-item label="Send Gmail" prop="send_gmail">
        <base-checkbox :disabled="isViewing" v-model="currentItem.send_gmail" />
      </base-form-item>
      <!-- <base-form-item class="w-2/3" label="Telegram Chat ID" prop="tg_chat_id">
        <base-input v-if="currentItem.tg_chat_id" :disabled="isViewing" v-model="currentItem.tg_chat_id" />
        <base-button v-else title='Open link and send a message to get the telegram chat id' @click="getTelegramChatID">Get Telegram ChatId</base-button>
      </base-form-item>
      <base-form-item label="Send Telegram" prop="send_telegram">
        <base-checkbox :disabled="isViewing" v-model="currentItem.send_telegram" />
      </base-form-item> -->
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
import StockFilter from "@/views/stock-screener/StockFilter.js";

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
        this.currentItem.condition_key = this.buildCondition(frm.stockFilters, frm.symbol);
        this.currentItem.condition_description = this.buildConditionDescription(this.currentItem.condition_key);
      }
    },
    buildCondition(condition_key, symbol) {
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
      return filters;
    },
    buildConditionDescription(condition_key) {
      let filterSymbol = '',
        arrFilter = [];
      condition_key.forEach(item => {
        if (item.type !== 'stock_date') {
          if (item.type === 'symbol') {
            filterSymbol = item.value;
          } else {
            let filterText = StockFilter.buildSingleFilterDescription(item);
            arrFilter.push(filterText);
          }
        }
      })
      return `Symbol ${filterSymbol}: ${arrFilter.join(', ')}`;
    },
    /**
     * Open _blank tab to get telegram chat id
     */
    getTelegramChatID() {
      // window.open('https://web.telegram.org/#/im?p=@ncthanh_bot', '_blank');
      window.open('https://t.me/ncthanh_bot', '_blank');
    },
    async sendTestEmail() {
      let api = new NotificationAPI();
      let url = '/test_gmail';
      let payload = {...this.currentItem};
      payload.condition_key = JSON.parse(payload.condition_key);
      let res = await api.request(url, 'post', payload);
      if (res && res.success) {
        this.$notify({
          title: "Success",
          message: "Success",
          type: "success",
          duration: 2000,
        });
      }
    }
  },
};
</script>
