import Vue from "vue";
import Converter from "@/utils/converter";

const install = Vue => {
  Vue.prototype.$converter = Converter;

  Vue.mixin({
    /**
     * remove all event listeners of the component
     */
    destroyed() {
      if (
        this._isVue &&
        this._events &&
        Object.keys(this._events).length !== 0
      ) {
        this.$off();
      }
    }
  });
};

install(Vue);

export default install;
