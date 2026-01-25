import api from "../api/axiosInstance";
import { API_URLS } from "../api/apiUrls";

export const authService = {
  getLocation(userId) {
    return api.get(API_URLS.LOCATION.USER`${userId}`);
  },
};
