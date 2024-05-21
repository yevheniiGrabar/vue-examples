import axios from "axios";
import env from '@/services/infrastructure/env'

const HOST = env.getHost();
const CLIENT_ID = env.getClientID();
const CLIENT_SECRET = env.getClientSecret();

const endpoints = {
  login: `${HOST}/api/login`,
  register: `${HOST}/api/register`,
  logout: `${HOST}/api/logout`,
  refresh: `${HOST}/oauth/token`,
  recoverPassword: `${HOST}/api/recover-password`,
  changePassword: `${HOST}/api/change-password`,
}

export function login(password, email) {
  return axios
    .post(endpoints.login, {
      grant_type: "password",
      password,
      email,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    })
    .then((res) => res.data.data);
}

export function register(password, password_confirmation, email) {
  return axios.post(endpoints.register, { password, email, password_confirmation })
    .then((res) => res.data.data);
}

export function recoverPassword(email, recaptchaToken) {
    return axios.post(endpoints.recoverPassword, {email, recaptchaToken});
}

export function logout() {
  return axios.get(endpoints.logout);
}

export function refreshToken(refresh_token) {
  return axios.create().post(endpoints.refresh, {
    grant_type: "refresh_token",
    refresh_token,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }).then((res) => res.data);
}

export function changePassword(password, new_password, new_password_confirmation) {
    return axios.post(endpoints.changePassword, {
        password, new_password, new_password_confirmation
    })
}

export default {
  login,
  register,
  logout,
  refreshToken,
  changePassword,
  recoverPassword,
}
