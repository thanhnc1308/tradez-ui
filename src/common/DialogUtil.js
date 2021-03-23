/**
 * Class handle everything about dialog
 */
import Vue from "vue";
import router from "@/router/router";
class DialogUtil {
  /**
   * show a dialog
   * @param {*} component
   * @param {*} owner
   * @param {*} initOptions contains options for constructor and events
   * @param {*} showOptions
   */
  showDialog(dialog, showOptions = {}) {
    if (dialog) {
      if (dialog && dialog.show instanceof Function) {
        dialog.show(showOptions);
      }
      return dialog;
    }
  }

  /**
   * Create a dialog class from component
   * @param {'*'} component
   * @param {*} owner
   * @param {*} initOptions
   */
  prepareDialog(component, owner, initOptions={}) {
    if (component) {
      if (component.default) {
        component = component.default;
      }
      let DialogType = Vue.extend(component),
        { options } = initOptions,
        { events } = initOptions;
      if (options) {
        options.router = router;
      }
      let dialog = new DialogType(options);
      // register event handler
      for (const key in events) {
        if (Object.hasOwnProperty.call(events, key)) {
          const fn = events[key];
          dialog.$on(key, fn);
        }
      }
      dialog.owner = owner;
      dialog.$mount();

      let el = document.body;
      // if owner is a dialog, append to el of dialog so that new dialog is not below the owner dialog
      if (owner.isDialog) {
        el = owner.$refs.dialogx;
      }
      el.appendChild(dialog.$el);
      return dialog;
    }
  }

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
      let dialog = this.prepareDialog(FrmType, owner, initOptions);
      let frm = this.showDialog(dialog, showOptions);
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
      throw new Error("Does not exist form " + dialogType);
    }
    return FormType;
  }
}

export default new DialogUtil();

const EnumDialogType = {
  Type: 1
};

export { EnumDialogType };
