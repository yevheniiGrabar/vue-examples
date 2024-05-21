import authHttp from './api/auth-http'

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';

export function login(password, email) {
  return authHttp
    .login(password, email)
    .then((res) => {
      setTokens({
        access_token: res.access_token,
        refresh_token: res.refresh_token
      })
    });
}

export function register(password, password_confirmation, email) {
  return authHttp.register(password, password_confirmation, email)
    .then(({ access_token, refresh_token }) => {
      setTokens({ access_token, refresh_token });
    });
}

export function recoverPassword(email, recaptchaToken) {
  return authHttp.recoverPassword(email, recaptchaToken)
}

export function logout() {
  return authHttp.logout()
    .then(() => clearTokens())
    .catch(() => clearTokens());
}

export async function refresh() {
  let token = getRefreshToken();

  if (token) {
    return authHttp
      .refreshToken(token)
      .then(setTokens);
  }
}

export async function changePassword(password, new_password, new_password_confirmation) {
  return authHttp.changePassword(password, new_password, new_password_confirmation)
}

export function setTokens({ access_token, refresh_token }) {
  saveAccessToken(access_token);
  saveRefreshToken(refresh_token);
}

function saveAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function saveRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

function isSessionValid() {
  return !!getAccessToken();
}

export default {
  login,
  logout,
  register,
  clearTokens,
  isSessionValid,
  getAccessToken,
  recoverPassword
}
