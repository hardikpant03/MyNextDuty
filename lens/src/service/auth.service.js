import api from "../api/axiosInstance";
import { API_URLS } from "../api/apiUrls";
import passwordEncoder from "../util/encoder";

export const authService = {
  async login(payload) {
    try {
      // Encrypt password before sending
      const encryptedPayload = {
        ...payload,
        password: await passwordEncoder.encryptPassword(payload.password)
      };
      
      return api.post(API_URLS.AUTH.LOGIN, encryptedPayload);
    } catch (error) {
      return api.post(API_URLS.AUTH.LOGIN, payload);
    }
  },

  async signup(payload) {
    try {
      // Encrypt password before sending
      const encryptedPayload = {
        ...payload,
        password: await passwordEncoder.encryptPassword(payload.password)
      };
      
      return api.post(API_URLS.AUTH.SIGNUP, encryptedPayload);
    } catch (error) {
    }
  },

  logout() {
    return api.post(API_URLS.AUTH.LOGOUT);
  },

  refreshToken() {
    return api.post(API_URLS.AUTH.REFRESH);
  },
};
