/**
 * class base for handling CRUD
 */
import HttpClient from '@/api/HttpClient'

export default class BaseAPI {
  /**
   * prefix of api
   */
  prefix = null;

  constructor() {
    this.service = HttpClient.getInstance()
  }

  /**
   * @override
   */
  getUrl() {
    return this.prefix
  }

  getAll() {
    return this.service.request({
      url: this.getUrl(),
      method: 'get',
    })
  }

  /**
   * get paging
   * options contains:
   * 1. pageNumber
   * 2. pageSize
   * 3. filter
   * 4. sort
   * @param {'*'} options
   */
  getPaging(options) {}

  getById(id) {}

  post(payload) {}

  put(id, payload) {}

  delete(id) {}
}
