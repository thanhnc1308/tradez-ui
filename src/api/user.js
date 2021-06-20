import request from '@/utils/request'
import HttpClient from "@/api/HttpClient";


export function login(data) {
  return HttpClient.request({
    url: '/auth/login',
    method: 'post',
    data
  })
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        token: 'admin-token'
      }
    })
  })
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function signup(data) {
  return HttpClient.request({
    url: '/auth/register',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return HttpClient.request({
    url: '/auth/user_info',
    method: 'post',
    data: {token}
  })
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        username: 'Super Admin'
      }
    })
  })
  // return request({
  //   url: '/vue-element-admin/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
