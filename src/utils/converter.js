/**
 * Class handle convert base64, serialize
 */

import Buffer from "buffer";

class Converter {
  encodeBase64(data) {
    if (typeof data != "string") {
      data = this.serialize(data);
    }
    let buffer = Buffer.from(data);
    return buffer.toString("base64");
  }

  decodeBase64(data) {
    let buffer = Buffer.from(data, "base64");
    return buffer.toString("utf8");
  }

  serialize(data) {
    return JSON.stringify(data);
  }

  deserialize(data) {
    return JSON.parse(data);
  }
}

export default new Converter();
