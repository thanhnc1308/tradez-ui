import Cookies from "js-cookie";

const TokenKey = "token";

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
