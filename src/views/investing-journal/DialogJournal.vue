<template>
  <base-dialog
    :title="title"
    :visible.sync="isShow"
    width="75%"
    :before-close="handleClose"
  >
    <base-form
      ref="dataForm"
      :inline="true"
      :rules="getFormRules()"
      :model="currentItem"
      label-position="left"
      label-width="100px"
      style="width: 400px; margin-left: 50px"
    >
      <base-form-item label="Date" prop="date">
        <base-date-picker
          v-model="currentItem.date"
          type="datetime"
          placeholder="Please pick a date"
        />
      </base-form-item>
      <base-form-item label="Symbol" prop="symbol">
        <el-select
          v-model="currentItem.symbol"
          class="filter-item"
          placeholder="Please select"
        >
          <el-option
            v-for="symbol in listStock"
            :key="symbol"
            :label="symbol"
            :value="symbol"
          />
        </el-select>
      </base-form-item>
      <base-form-item label="Type" prop="type">
        <el-select
          v-model="currentItem.type"
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
      <base-form-item label="Entry" prop="entry">
        <base-input-number v-model="currentItem.entry" />
      </base-form-item>
      <base-form-item label="Exit" prop="exit">
        <base-input-number v-model="currentItem.exit" />
      </base-form-item>
      <base-form-item label="PnL" prop="pnl">
        <base-input-number v-model="currentItem.pnl" />
      </base-form-item>
      <base-form-item label="Screenshot" prop="screenshot">
        <el-upload
          class="avatar-uploader"
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
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </base-form-item>
      <base-form-item label="Comment" prop="comment">
        <base-input
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          v-model="currentItem.comment"
        />
      </base-form-item>
    </base-form>
    <span slot="footer" class="dialog-footer flex flex-end">
      <base-button @click="cancel">Cancel</base-button>
      <base-button type="primary" @click="confirm">Save</base-button>
    </span>
  </base-dialog>
</template>

<script>
import BaseDetail from "@/views/base/BaseDetail.vue";
import { callBase } from "@/mixins/callBase";
import JournalAPI from '@/api/JournalAPI';

export default {
  name: "DialogAddNewNotification",
  extends: BaseDetail,
  mixins: [callBase],
  data() {
    this.listStock = ["RAL", "HPG", "VIC"];
    this.listType = ["Buy", "Sell"];
    return {};
  },
  computed: {
    /**
     * @override
     */
    formName() {
      return "journal";
    },
    /**
     * @override
     */
    api() {
      return JournalAPI;
    }
  },
  methods: {
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
        date: new Date(),
        symbol: "",
        type: "Buy",
        status: "win",
      };
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
