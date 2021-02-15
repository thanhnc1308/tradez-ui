<script>
import BaseFormDialog from "@/views/base/BaseFormDialog.vue";
import BaseAPI from "@/api/BaseAPI";

let SAVE_CONFIG = {
  Create: {
    method: "post",
    message: "Created Successfully",
  },
  Edit: {
    method: "put",
    message: "Updated Successfully",
  },
  Duplicate: {
    method: "post",
    message: "Created Successfully",
  },
};

/**
 * Form dialog handles create, edit, duplicate, view item
 */
export default {
  name: "BaseFormDetail",
  extends: BaseFormDialog,
  props: {
    /**
     * status of form (view/edit/create)
     */
    formStatus: {
      type: String,
      default: "View",
    },
    /**
     * selected item passed from the form list
     */
    selectedItem: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    /**
     * if status of form is view, all the editable field will be disable
     */
    isViewing() {
      return this.formStatus === "View";
    },
    /**
     * title of the dialog
     */
    title() {
      let mapStatus = {
        View: "View",
        Edit: "Edit",
        Create: "Create new",
        Duplicate: "Duplicate",
      };
      let prefix = mapStatus[this.formStatus];
      return `${prefix} ${this.formName}`;
    },
    /**
     * @override
     */
    formName() {
      return "";
    },
    /**
     * @override
     */
    validationContainer() {
      return this.$refs["dataForm"];
    }
  },
  data() {
    this.api = BaseAPI;
    return {
      currentItem: {},
    };
  },
  mounted() {
    debugger
    switch (this.formStatus) {
      case "Create":
        this.create();
      case "Edit":
        this.edit();
      case "Duplicate":
        this.duplicate();
        break;
      case "View":
      default:
        this.view();
        break;
    }
  },
  watch: {
    currentItem(_old, _new) {
      debugger
    }
  },
  methods: {
    //#region CRUD
    create() {
      this.resetForm();
      this.resetValidation();
      this.show();
    },
    view() {
      this.setSelectedItem();
      this.resetValidation();
      this.show();
    },
    duplicate() {
      this.setSelectedItem();
      this.resetValidation();
      this.show();
    },
    edit() {
      this.setSelectedItem();
      this.resetValidation();
      this.show();
    },
    setSelectedItem() {
      this.currentItem = Object.assign({}, this.selectedItem);
    },
    async handleConfirm() {
      await this.save();
    },
    async save() {
      const me = this;
      if (await this.validate()) {
        let config = SAVE_CONFIG[this.formStatus];
        debugger
        let response = await me.api[config.method](me.currentItem);
        debugger
        if (response && response.success) {
          this.$notify({
            title: "Success",
            message: config.message,
            type: "success",
            duration: 2000,
          });
        } else if (response && response.message) {
          this.$notify({
            title: "Error",
            message: response.message,
            type: "danger",
            duration: 2000,
          });
        }
      }
    },
    async validate() {
      return (
        (await this.validateContainer()) && (await this.validateBusiness())
      );
    },
    async validateContainer() {
      return await this.validationContainer.validate();
    },
    /**
     * @override
     */
    async validateBusiness() {
      return true;
    },
    /**
     * return validation rules for base-form
     * @override
     */
    getFormRules() {
      return {};
    },
    resetValidation() {
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    /**
     * reset form to default
     * @override
     */
    resetForm() {
      debugger
      this.currentItem = {};
    },
    //#endregion CRUD
  },
};
</script>
