/**
 * Class handle JSON
 */

class JsonUtil {
  formatJson(filterVal) {
    return this.list.map(v =>
      filterVal.map(j => {
        if (j === "timestamp") {
          return parseTime(v[j]);
        } else {
          return v[j];
        }
      })
    );
  }
}

export default new JsonUtil();