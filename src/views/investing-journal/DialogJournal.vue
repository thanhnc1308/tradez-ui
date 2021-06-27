<template>
  <base-dialog
    :title="title"
    :visible.sync="isShow"
    width="55%"
    @shortkey="handleShortkeyAction"
    :before-close="handleClose"
  >
    <base-form
      ref="dataForm"
      :inline="true"
      :rules="getFormRules()"
      :model="currentItem"
      label-position="left"
      label-width="100px"
      style="margin-left: 50px"
    >
      <base-form-item label="Date" prop="transaction_date">
        <base-date-picker
          v-model="currentItem.transaction_date"
          type="datetime"
          :disabled="isViewing"
          placeholder="Please pick a date"
        />
      </base-form-item>
      <base-form-item label="Entry" prop="entry">
        <base-input-number @change="calculatePnL" :disabled="isViewing" v-model="currentItem.entry" />
      </base-form-item>
      <base-form-item label="Symbol" prop="symbol">
        <el-select
          v-model="currentItem.symbol"
          class="filter-item"
          :disabled="isViewing"
          placeholder="Please select"
        >
          <el-option
            v-for="symbol in listStock"
            :key="symbol.id"
            :label="symbol.symbol"
            :value="symbol.symbol"
          />
        </el-select>
      </base-form-item>
      <base-form-item label="Exit" prop="exit">
        <base-input-number @change="calculatePnL" :disabled="isViewing" v-model="currentItem.exit" />
      </base-form-item>
      <base-form-item label="Type" prop="transaction_type">
        <el-select
          v-model="currentItem.transaction_type"
          :disabled="isViewing"
          class="filter-item"
          placeholder="Please select type"
        >
          <el-option
            v-for="type in listType"
            :key="type"
            :label="type"
            :value="type"
          />
        </el-select>
      </base-form-item>
      <base-form-item label="PnL" prop="pnl">
        <base-input-number :disabled="isViewing" v-model="currentItem.pnl" />
      </base-form-item>
      <!-- <base-form-item label="Screenshot" prop="screenshot">
        <el-upload
          class="avatar-uploader"
          :disabled="isViewing"
          v-if="!currentItem.screenshot"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          list-type="picture-card"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="currentItem.screenshot"
            :src="currentItem.screenshot"
            class="avatar"
          />
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <base-image
          v-if="currentItem.screenshot"
          :src="currentItem.screenshot"
          fit="cover"
        />
      </base-form-item> -->
      <base-form-item style="display:block;" label="Comment" prop="comments">
        <base-input
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          :disabled="isViewing"
          v-model="currentItem.comments"
        />
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
import JournalAPI from "@/api/JournalAPI";
import { fnStoreAllStock } from "@/api/storeConfig.js";

export default {
  name: "DialogAddNewNotification",
  extends: BaseFormDetail,
  mixins: [callBase],
  data() {
    this.listType = ["Buy", "Sell"];
    return {
      listStock: []
    };
  },
  created() {
    const self = this;
    fnStoreAllStock().then((res) => {
      if (res && res.success) {
        self.listStock = res.data;
      }
    });
  },
  // mounted() {
  //   this.currentItem = {
  //     transaction_date: new Date(),
  //     symbol: "VIC",
  //     transaction_type: "Buy",
  //     status: "win",
  //     entry: 100000,
  //     exit: 100000,
  //     pnl: 100000,
  //     comments: "comments",
  //   };
  // },
  computed: {
    /**
     * @override
     */
    formName() {
      return "journal";
    },
  },
  methods: {
    /**
     * @override
     */
    getApi() {
      return new JournalAPI();
    },
    /**
     * @override
     */
    getFormRules() {
      return {
        type: [
          { required: true, message: "type is required", trigger: "change" },
        ],
        timestamp: [
          {
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change",
          },
        ],
        title: [
          { required: true, message: "title is required", trigger: "blur" },
        ],
      };
    },
    /**
     * @override
     */
    resetForm() {
      this.currentItem = {
        transaction_date: new Date(),
        symbol: "VIC",
        transaction_type: "Buy",
        status: "win",
        entry: 100000,
        exit: 100000,
        pnl: 0,
        comments: "comments",
      };
    },
    calculatePnL() {
      this.currentItem.pnl = (this.currentItem.exit - this.currentItem.entry) / this.currentItem.entry * 100;
    },
    getPayloadForSave() {
      let result = {...this.currentItem};
      result.transaction_date = new Date(result.transaction_date);
      return result;
    },
    //#region Handle upload
    handleAvatarSuccess(res, file) {
      this.currentItem.screenshot = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.currentItem.screenshot = file.url;
      this.dialogVisible = true;
    },
    //#endregion Handle upload
  },
};
</script>
