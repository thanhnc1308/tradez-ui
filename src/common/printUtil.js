/**
 * Class handle everything about dialog
 */
import DialogUtil from "@/common/dialogUtil";
import logger from "@/common/Logger";

class PrintUtil {
  /**
   * cache component
   */
  component = null;

  /**
   * show print
   * @param {*} owner
   */
  show(owner, options) {
    let promise = null;
    if (!this.component) {
      let component = import("");
      promise = new Promise((resolve, reject) => {
        let fnSucess = module => {
          if (module && module.default) {
            this.component = module.default;
            this.showDialog(this.component, owner, options);
          }
        };

        let fnFailure = error => {
          reject(error);
          logger.handleException(error);
        };

        component.then(fnSucess, fnFailure);
      });
    } else {
      this.showDialog(this.component, owner, options);
    }

    return promise;
  }

  /**
   * show dialog
   * @param {*} component
   * @param {*} owner
   * @param {*} options
   */
  showDialog(component, owner, options) {
    return new Promise((resolve, reject) => {
      if (component && owner) {
        let frm = DialogUtil.prepareDialog(component, owner, options);
        if (frm) {
          if (!frm._events.close) {
            // remove element when close form
            frm.$on("close", function(dialogResult, frm) {
              let parentElement = frm.$el.parentElement;
              parentElement.removeChild(frm.$el);
              frm.$destroy();
            });
          }

          frm.owner = owner;
          frm.show(options);
        }
      }
    });
  }
}

export default new PrintUtil();
