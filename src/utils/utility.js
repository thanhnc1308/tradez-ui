/**
 * Some function utility
 */
import { parseTime, formatTime } from "@/utils";
import router from '@/router/router.js';
class Utility {
  formatDate(sDate, format = "{d}-{m}-{y}") {
    if (sDate) {
      let date = new Date(sDate);
      return parseTime(date, format);
    } else {
      return "";
    }
  }

  toThousandFilter(num) {
    return (+num || 0)
      .toString()
      .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
  }

  downloadLink(url) {
    let a = document.getElementById("adownload");
    if (!a) {
      a = document.createElement("a");
      a.id = "adownload";
    }
    a.href = url;
    a.click();
  }

  previewLink(url) {
    let newWindow = window.open(url, "_blank");
    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed == "undefined"
    ) {
      // blocked?
    }
  }

  focusFirstInputControl(scope) {
    setTimeout(() => {
      let input = this.findFirstInputControl(scope);
      if (input) {
        input.focus();
        input.select();
      }
    });
  }

  /**
   * find the first input in the parent scope
   * @param {Element} scope
   */
  findFirstInputControl(scope) {
    if (scope && scope.querySelector) {
      const input = scope.querySelector("input");
      return input;
    }
    return null;
  }

  /**
   * Go to a url
   */
  redirectTo(url) {
    router.push(url);
  }
}

export default new Utility();
