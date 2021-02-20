/**
 * Some function utility
 */

class Utility {
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
}

export default new Utility();
