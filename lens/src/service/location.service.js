import api from "../api/axiosInstance";
import { API_URLS } from "../api/apiUrls";

export const authService = {
  getLocation(userId) {
    return api.get(API_URLS.LOCATION.USER`${userId}`);
  },
};
export const updateUserLocation = (userId,payload) => {return api.post(API_URLS.LOCATION.UPDATE, payload,{params:{userId:userId},});};

export const getNearbyUsers = (userId) => {return api.get(API_URLS.LOCATION.NEARBY, {params:{userId},});};
