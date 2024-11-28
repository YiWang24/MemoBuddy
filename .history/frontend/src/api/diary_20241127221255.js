import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";
import { get } from "http";

export const diaryApi = {
    
  getDiaries: async () => {
    return await request.get(API_ROUTES.DIARY.LIST);
  },
  getDiaryById: async (id) => {
    return await request.get(`${API_ROUTES.DIARY.LIST}/${id}`);
  },
};
