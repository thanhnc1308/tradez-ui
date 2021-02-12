<script>
import BaseFormDialog from "@/views/base/BaseFormDialog.vue";
import BaseAPI from "@/api/BaseAPI";

/**
 * Form dialog handles create, edit, duplicate, view item
 */
export default {
  name: "BaseDetail",
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
    },
    /**
     * @override
     */
    api() {
      return BaseAPI;
    },
  },
  data() {
    return {
      currentItem: {},
    };
  },
  mounted() {
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
  methods: {
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
      switch (this.formStatus) {
        case "Create":
          await this.createData();
        case "Edit":
          await this.updateData();
        case "Duplicate":
          await this.duplicateData();
          break;
        default:
          break;
      }
    },
    async createData() {
      if (await this.validate()) {
        this.$notify({
          title: "Success",
          message: "Created Successfully",
          type: "success",
          duration: 2000,
        });
      }
    },
    async updateData() {
      if (await this.validate()) {
        this.$notify({
          title: "Success",
          message: "Update Successfully",
          type: "success",
          duration: 2000,
        });
      }
    },
    async duplicateData() {
      if (await this.validate()) {
        this.$notify({
          title: "Success",
          message: "Created Successfully",
          type: "success",
          duration: 2000,
        });
      }
    },
    async validate() {
      return (
        (await this.validationContainer()) && (await this.validateBusiness())
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
      this.currentItem = {};
    },
  },
};
</script>
