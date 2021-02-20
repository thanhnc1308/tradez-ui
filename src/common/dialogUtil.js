/**
 * Class handle everything about dialog
 */
import Vue from "vue";
// import i18n from "@/i18n/i18n"
import router from "@/router/router";
class DialogUtil {
  showDialog(baseComponent, options = {}, event = {}) {
    const SubComponent = Vue.extend(baseComponent);
    this.instance = new SubComponent(options);
    // register event handler
    for (const key in event) {
      if (Object.hasOwnProperty.call(event, key)) {
        const fn = event[key];
        this.instance.$on(key, fn);
      }
    }
    this.instance.$mount();
    document.body.append(this.instance.$el);
    this.instance.show();
  }

  showDialog2(component, owner, initOptions = {}, showOptions = {}) {
    if (component) {
      // if (!initOptions.i18n) {
      //   initOptions.i18n = i18n;
      // }
      initOptions.router = router;
      let frm = this.prepareDialog(component, owner, initOptions);
      if (frm && frm.show instanceof Function) {
        frm.owner = owner;
        frm.show(showOptions);
      }
      return frm;
    }
  }

  prepareDialog(component, owner, initOptions) {}

  /**
   * show form dialog from path
   * 1. import form
   * 2. show
   * @param {*} dialogType
   * @param {*} owner
   * @param {*} initOptions
   * @param {*} showOptions
   */
  async showDialogDynamic(
    dialogType,
    owner,
    initOptions = {},
    showOptions = {}
  ) {
    let FrmType = await this.loadDialogComponent(dialogType);
    if (FrmType) {
      let frm = this.showDialog2(FrmType, owner, initOptions, showOptions);
      return frm;
    }
  }

  async loadDialogComponent(dialogType) {
    let component = null,
      FormType = null;
    switch (dialogType) {
      case EnumDialogType.Type:
        // component = await import("@/components");
        break;
      default:
        break;
    }
    if (component && component.default) {
      FormType = component.default;
    } else {
      throw new Error("Does not exist form "+ dialogType);
    }
    return FormType;
  }
}

export default new DialogUtil();

const EnumDialogType = {
  Type: 1
}

export { EnumDialogType }
