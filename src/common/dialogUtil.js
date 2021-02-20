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

  /**
   * show a dialog
   * @param {*} component
   * @param {*} owner
   * @param {*} initOptions contains options for constructor and events
   * @param {*} showOptions
   */
  showDialog2(component, owner, initOptions = {}, showOptions = {}) {
    if (component) {
      // if (!initOptions.i18n) {
      //   initOptions.i18n = i18n;
      // }
      initOptions.options.router = router;
      let frm = this.prepareDialog(component, owner, initOptions);
      if (frm && frm.show instanceof Function) {
        frm.owner = owner;
        frm.show(showOptions);
      }
      return frm;
    }
  }

  /**
   * Create a dialog class from component
   * @param {'*'} component
   * @param {*} owner
   * @param {*} initOptions
   */
  prepareDialog(component, owner, initOptions) {
    if (component && owner) {
      let DialogType = Vue.extend(component),
        { options } = initOptions,
        dialog = new DialogType(options),
        { events } = initOptions;
      // register event handler
      for (const key in events) {
        if (Object.hasOwnProperty.call(events, key)) {
          const fn = events[key];
          dialog.$on(key, fn);
        }
      }
      dialog.$mount();

      let el = owner;
      // if owner is a dialog, append to el of dialog so that new dialog is not below the owner dialog
      if (owner.isDialog) {
        el = owner.$refs.dialogx;
      } else if (!owner instanceof Element) {
        el = owner.$el;
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
