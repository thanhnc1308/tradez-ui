/**
 * Class for render stock filters
 */

const dict_basic_operation = {
  'less' : ' < ',
  'eless' : ' <= ',
  'greater' : ' > ',
  'egreater' : ' >= ',
  'equal' : ' = ',
  'nequal' : ' <> ',
  'equals' : " = ",
}
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
      let specialValue = null;
      if (item.value.typeValue !== 'input') {
        specialValue = item.value.typeValue;
      }
      let filter = {
        type: item.type,
        label: item.label,
        operation: item.operation.value,
        value: specialValue || item.value.value,
      };
      filters.push(filter);
    }
    return filters;
  }

  static buildFilterDescription(filters) {
    let arrRes = [];
    filters.forEach(item => {
      let filterDescription = this.buildSingleFilterDescription(item);
      arrRes.push(filterDescription)
    })
    return arrRes.join(', ');
  }

  static buildSingleFilterDescription(filter) {
    let res = '',
      operation = filter.operation;
    if (operation in dict_basic_operation) {
      let filterOperation = dict_basic_operation[operation];
      res = `${filter.label} ${filterOperation} ${filter.value}`;
    } else {
      res = `${filter.label} ${operation} ${filter.value}`;
    }
    return res;
  }
}
