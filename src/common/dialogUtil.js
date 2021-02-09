/**
 * Class handle everything about dialog
 */
import Vue from 'vue'

class DialogUtil {
  showDialog(baseComponent, options = {}) {
    // const { props } = options
    if (!this.instance) {
      const SubComponent = Vue.extend(baseComponent)
      this.instance = new SubComponent()
    }
    this.instance.$mount()
    document.body.append(this.instance.$el)
    this.instance.show()
  }
}

export default new DialogUtil()
