/**
 * Class for render stock filters
 */

export default class StockFilter {
  filters = [];

  count = 0;

  constructor(_filters) {
    this.filters = _filters;
  }

  add(filter) {
    let _filter = { ...filter };
    _filter.id = this.generateId();
    this.filters.push(_filter);
  }

  generateId() {
    return this.count++;
  }

  remove(filter) {
    let _filter = this.filters.find(item => item.id === filter.id);
    if (_filter) {
      this.filters.remove(_filter);
    }
  }

  buildFilter() {
    let filters = [];
    for (const item of this.filters) {
      let filter = {
        type: item.type,
        operation: item.operation.value,
        value: item.value.value,
      };
      filters.push(filter);
    }
    return filters;
  }
}
