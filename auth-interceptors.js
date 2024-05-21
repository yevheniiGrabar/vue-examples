import axios from "axios";

import router from "@/routes/router";
import { refresh, getAccessToken, clearTokens } from "@/services/auth";
import { Notification } from "@/components/library/NotificationPlugin";

export function setInterceptor() {
  axios
    .interceptors
    .request
    .use(
      config => {
        config.headers.Authorization = `Bearer ${getAccessToken()}`;
        return config;
      },
      error => Promise.reject(error)
    );

  axios
    .interceptors
    .response
    .use((response) => response, async (error) => {
      const originalRequest = error.config;
      const status = error?.response?.status

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await refresh();
        } catch (e) {
          clearAndMoveToLogin()

          return Promise.reject(error);
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`;
        return axios(originalRequest);
      }

      if (status === 401 && originalRequest._retry) {
        clearAndMoveToLogin()

        return Promise.reject(error);
      }

      showResponseError(error);
      return Promise.reject(error);
    });
}

function clearAndMoveToLogin() {
  clearTokens();
  router.push({ name: 'login' });
}

function showResponseError(error) {
  const message = getResponseErrorMessage(error);

  message && Notification().notify({type: 'danger', message });
}

function getResponseErrorMessage(error) {
  const errors = error?.response?.data?.errors;
  return errors ? concatMessages(errors) : error?.response?.data?.message;
}

function concatMessages(errors) {
  return Object.keys(errors)
    .map((key) => errors[key])
    .join('<br>');
}

export default {
  setInterceptor
}
