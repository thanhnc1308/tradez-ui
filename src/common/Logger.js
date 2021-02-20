/**
 * Class handle log
 */

class Logger {
  handleException(e) {
    console.log(e);
  }
}

const logger = new Logger();
Object.freeze(logger);

export default logger;
