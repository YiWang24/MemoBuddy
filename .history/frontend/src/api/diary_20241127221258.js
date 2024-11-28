import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";
import { get } from "http";

export const diaryApi = {
  createDiary: async (data) => {
    return await request.post(API_ROUTES.DIARY.LIST, data);
  },
  getDiaries: async () => {
    return await request.get(API_ROUTES.DIARY.LIST);
  },
  getDiaryById: async (id) => {
    return await request.get(`${API_ROUTES.DIARY.LIST}/${id}`);
  },
};
