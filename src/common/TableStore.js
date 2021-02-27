/**
 * Class handle CRUD, filter, sort for table viewer
 */
import Vue from "vue";
import HttpClient from "@/api/HttpClient";

export default class TableStore extends Vue {
  constructor(options = {}) {
    super();
    this.init();
    this.setProperties(options);
    if (this.model) {
      this.idProperty = this.model.prototype.getIdProperty();
    }
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

  init() {
    let privateData = {
      /**
       * list of record to be removed update in server
       */
      _removed: [],
      /**
       * finish loading data from server
       */
      complete: true,
      remoteFilter: false,
      remoteSort: false,
      loading: false,
      paging: true,
      filters: [],
      sorters: [],
      model: null,
      idProperty: null,
      _loaded: true,
      _filterFn: null,
      _filterChanged: false
    };

    Object.keys(privateData).forEach(key => {
      if (privateData.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          enumerable: false,
          configurable: false,
          get: function() {
            return privateData[key];
          },
          set: function(value) {
            privateData[key] = value;
          }
        });
      }
    });
  }

  setProperties(options) {
    for (const key in options) {
      if (Object.hasOwnProperty.call(options, key)) {
        if (key == "data") {
          this.loadRecords(options[key]);
        } else {
          this[key] = options[key];
        }
        // Object.defineProperty(this, key, {
        //   get() { return this[key]; },
        //   set(newValue) { this[key] = newValue; }
        // });
      }
    }
  }

  //#region API
  async load(opts = {}) {
    const options = {
      page: opts.page || 1,
      per_page: opts.limit || 20,
      method: opts.method || this.method
    };
    if (this.proxy.type === "cache") {
      await this.loadFromCache(options);
    } else {
      await this.loadFromServer(options);
    }
  }

  async loadFromCache(options) {
    this.loading = true;
    this.loading = true;
  }

  async loadFromServer(options) {
    this.loading = true;

    this.page = options.page;
    this.per_page = options.per_page;

    let url = this.buildRequestUrl(options),
      service = HttpClient,
      res = await service.request({
        url,
        method: options.method || "get",
        data: options.data
      });
    if (res && res.success) {
      let data = res.data;
      // paging
      if (data.meta) {
        this.data = data.items;
        this.total = data.meta.total;
        this.pages = data.meta.pages;
      } else {
        this.data = data;
        this.total = data.length;
      }
    }
    this.loading = true;
  }
  loadRecords(data) {
    this.data.removeAll();
    this.data.append(data);
  }
  buildRequestUrl(options) {
    let url = "",
      method = options.method || this.method || "get";
    if (method === "get") {
      url = `${this.proxy.url}?page=${options.page}&per_page=${options.per_page}`;
      let filter = this.buildFilterUrl();
      if (!this.paging) {
        url = `${this.proxy.url}?`;
      }
      if (filter) {
        url += filter;
      }
    } else if (method === 'post') {
      url = `${this.proxy.url}`;
    }

    return url;
  }
  buildFilterUrl() {
    let url = "";
    if (this.filters) {
      for (const item of this.filters) {
        if (item.value) {
          url += `&${item.key}${item.operator}${item.value}`;
        }
      }
    }
    return url;
  }
  //#endregion API
  //#region CRUD
  add(item) {}
  remove(item) {}
  clearData() {
    this.data.removeAll();
  }
  //#endregion CRUD
  //#region filter
  addFilter(filter) {
    if (filter instanceof Array) {
      this.filters.append(filter);
    } else if (filter instanceof Object) {
      this.filters.push(filter);
    } else {
      return;
    }
    this._filterFn = null;
    this._filterChanged = true;
    this.localFilter();
  }
  /**
   * generate filter function for local filter
   */
  genFilterFn() {
    if (this.filters && !this._filterFn) {
      this._filterFn = null; // generate here
    }
    return this._filterFn;
  }
  removeFilter(filter) {
    this.filters.remove(filter);
  }
  clearFilter() {
    this.filters.removeAll();
  }
  filter() {}
  localFilter(force) {
    if (!this.remoteFilter && this.dataSource.length > 0) {
      if (force || this._filterChanged) {
        if (force) {
          this._filterFn = null;
        }

        let filtered = this.dataSource;
        let filterFn = this.genFilterFn();
        if (filterFn) {
          filtered = this.dataSource.filter(filterFn);
        }

        this.data.removeAll();
        this.data.append(filtered);
        this.localSort();
        this.pageTotal = this.getCount();
        delete this._filterChanged;
      }
    }
  }
  //#endregion filter
  //#region sort
  sort() {}
  localSort() {}
  genSortFn() {
    if (!this._sortFn) {
    }
  }
  //#endregion sort
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
  isLoaded() {
    return this._loaded;
  }
  //#endregion Methods
}
