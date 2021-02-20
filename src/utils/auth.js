import Cookies from "js-cookie";

const TokenKey = "token";
const REFRESH_TOKEN_KEY = "refresh_token";

export function getToken() {
  let token = Cookies.get(TokenKey);
  if (!token) {
    token = localStorage.getItem(TokenKey);
  }
  return token;
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token);
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  localStorage.removeItem(TokenKey);
  return Cookies.remove(TokenKey);
}


export function getRefreshToken() {
  let token = Cookies.get(REFRESH_TOKEN_KEY);
  if (!token) {
    token = localStorage.getItem(REFRESH_TOKEN_KEY);
  }
  return token;
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
  return Cookies.set(REFRESH_TOKEN_KEY, token);
}

export function removeRefreshToken() {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  return Cookies.remove(REFRESH_TOKEN_KEY);
}
