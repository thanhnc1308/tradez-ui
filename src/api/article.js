import request from '@/utils/request'
import BaseAPI from '@/api/BaseAPI'
import HttpClient from '@/api/HttpClient'

class Article extends BaseAPI {
  prefix = '/vue-element-admin/article'
}

// const api = new Article()

const service = HttpClient.getInstance()

export function fetchList(query) {
  return service({
    url: '/vue-element-admin/article',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
