/**
 * Class handle request RESTful API in client
 */
import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoibmN0aGFuaCIsImV4cCI6MTYxMzMxNTc1MX0.wBcaUk7xk9I6Ehcocl8kc9nyo-qoK1xvaOKIj6hZaJM";

class HttpClient {
  constructor() {
    this.init();
  }
  init() {
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
      // withCredentials: true, // send cookies when cross-domain requests
      timeout: 5000 // request timeout
    });

    // request interceptor
    this.instance.interceptors.request.use(
      config => {
        // do something before request is sent

        if (store.getters.token) {
          // let each request carry token
          // config.headers['X-Token'] = getToken()
          config.headers["x-access-token"] = token;
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
    this.instance.interceptors.response.use(
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
          return res.data;
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

  getInstance() {
    return this.instance;
  }
}

export default new HttpClient();
