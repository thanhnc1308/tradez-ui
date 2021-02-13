/**
 * Class handle JSON
 */
import { parseTime } from "@/utils";

class JsonUtil {
  formatJson(list, filterVal) {
    return list.map(v =>
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