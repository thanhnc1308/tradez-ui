/**
 * Class handle request RESTful API in client
 */
import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
class HttpClient {
  constructor() {
    if (!HttpClient.instance) {
      this.init();
      HttpClient.instance = this;
    }
    return HttpClient.instance;
  }
  init() {
    this.service = axios.create({
      baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
      // withCredentials: true, // send cookies when cross-domain requests
      timeout: 5000 // request timeout
    });

    // request interceptor
    this.service.interceptors.request.use(
      config => {
        // do something before request is sent

        if (store.getters.token) {
          // let each request carry token
          config.headers["Authorization"] = getToken();
        }
        return config;
      },
      error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
      }
    );

    // response interceptor
    this.service.interceptors.response.use(
      /**
       * If you want to get http information such as headers or status
       * Please return  response => response
       */

      /**
       * Determine the request status by custom code
       * Here is just an example
       * You can also judge the status by HTTP Status Code
       */
      response => {
        const res = response.data;

        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
          Message({
            message: res.message || "Error",
            type: "error",
            duration: 5 * 1000
          });

          // 50014: Token expired;
          if (res.code === 401 || res.code === 50014) {
            // to re-login
            MessageBox.confirm(
              "You have been logged out, you can cancel to stay on this page, or log in again",
              "Confirm logout",
              {
                confirmButtonText: "Re-Login",
                cancelButtonText: "Cancel",
                type: "warning"
              }
            ).then(() => {
              store.dispatch("user/resetToken").then(() => {
                location.reload();
              });
            });
          }
          return Promise.reject(new Error(res.message || "Error"));
        } else {
          return res;
        }
      },
      error => {
        console.log("err" + error); // for debug
        Message({
          message: error.message,
          type: "error",
          duration: 5 * 1000
        });
        return Promise.reject(error);
      }
    );
  }

  request(options) {
    return this.service.request(options);
  }

  get(options) {
    return this.service.get(options);
  }

  post(options) {
    return this.service.post(options);
  }

  put(options) {
    return this.service.put(options);
  }

  delete(options) {
    return this.service.delete(options);
  }

  callRequest(options) {
    let token = null; // NCThanh-TODO: process token

    this.processHeader(options);
    this.processData(options);
    let _axios = axios.create();
    _axios.defaults.timeout = 20000;
    const promise = new Promise((resolve, reject) => {
      _axios(options)
        .then(res => {
          resolve(res);
        })
        .catch(ex => {
          reject(ex);
          // NCThanh-TODO: log exception here
        });
    });
    return promise;
  }

  processData(options) {}

  processHeader(options) {}
}

const instance = new HttpClient();
Object.freeze(instance);

export default instance;
