/**
 * Class handle CRUD, filter, sort for table viewer
 */
import Vue from "vue";
import HttpClient from "@/api/HttpClient";

export default class TableStore {
  constructor(options = {}) {
    this.setProperties(options);
    // this.load(options);
  }

  /**
   * data after sorting or filtering
   */
  data = [];

  /**
   * original data
   */
  dataSource = [];

  /**
   * proxy to load data
   */
  proxy = {
    /**
     * if loaded from server
     */
    url: "",

    /**
     * if loaded from cache
     */
    cacheKey: "",

    /**
     * type cache or api
     */
    type: "api"
  };

  remoteFilter = false;

  remoteSort = false;

  loading = false;

  setProperties(options) {
    for (const key in options) {
      if (Object.hasOwnProperty.call(options, key)) {
        this[key] = options[key];
        // Object.defineProperty(this, key, {
        //   get() { return this[key]; },
        //   set(newValue) { this[key] = newValue; }
        // });
      }
    }
  }

  //#region API
  async load() {
    let url = this.proxy.url;
    let service = HttpClient;
    let data = await service.request({
      url: url,
      method: 'get',
    })
    // paging
    if (data.meta) {
      this.data = data.items;
    } else {
      this.data = data;
    }
  }
  // load() {
    // this.data = [
    //   {
    //     id: 1,
    //     date: new Date(),
    //     symbol: "RAL",
    //     type: "Buy",
    //     entry: 100000,
    //     exit: 120000,
    //     pnl: 20,
    //     status: 1,
    //     // screenshot:
    //     //   "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    //     comment: "this is a comment"
    //   }
    // ];

  //   if (this.proxy.type === "cache") {
  //     this.loadFromCache();
  //   } else {
  //     this.loadFromServer();
  //   }
  // }

  loadFromCache() {
    this.loading = true;
    this.loading = true;
  }

  loadFromServer() {
    this.loading = true;
    if (this.proxy.url) {
      let service = HttpClient;
      let response = service.get({
        url: this.proxy.url,
        method: 'get',
        data
      })
    }
    this.loading = true;
  }
  //#endregion API
  //#region CRUD
  add(item) {}
  remove(item) {}
  removeAll() {
    this.data.splice();
  }
  filter() {}
  localFilter() {}
  sort() {}
  localSort() {}
  //#endregion CRUD
  //#region Methods
  getCount() {
    return this.data.length;
  }
  getData() {
    return this.data;
  }
  getOriginalData() {
    return this.dataSource;
  }
  //#endregion Methods
}
