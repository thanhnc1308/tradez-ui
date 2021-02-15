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
    if (this.proxy.type === "cache") {
      await this.loadFromCache();
    } else {
      await this.loadFromServer();
    }
  }

  async loadFromCache() {
    this.loading = true;
    this.loading = true;
  }

  async loadFromServer() {
    this.loading = true;
    let url = this.proxy.url,
      service = HttpClient,
      res = await service.request({
        url: url,
        method: "get"
      });
    if (res && res.success) {
      let data = res.data;
      // paging
      if (data.meta) {
        this.data = data.items;
      } else {
        this.data = data;
      }
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
