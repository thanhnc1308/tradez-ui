/**
 * Class handle everything about dialog
 */
import Vue from "vue";
class DialogUtil {
  showDialog(baseComponent, options = {}, event={}) {
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
}

export default new DialogUtil();
