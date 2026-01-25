import api from "../api/axiosInstance";
import { API_URLS } from "../api/apiUrls";

export const authService = {
  login(payload) {
    return api.post(API_URLS.AUTH.LOGIN, payload);
  },

  signup(payload) {
    return api.post(API_URLS.USER.SIGNUP, payload);
  },

  logout() {
    return api.post(API_URLS.AUTH.LOGOUT);
  },

  refreshToken() {
    return api.post(API_URLS.AUTH.REFRESH);
  },
};
