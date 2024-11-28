import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const diaryApi = {
  createDiary: async (data) => {
    return await request.post(API_ROUTES.DIARY.LIST, data);
  },
  getDiaries: async () => {
    return await request.get(API_ROUTES.DIARY.LIST);
  },
  getDiaryById: async (id) => {
    return await request.get(API_ROUTES.DIARY.GET(id));
  },
  editDiary: async (id, data) => {
    return await request.put(API_ROUTES.DIARY.UPDATE(id), data);
  },
  deleteDiary: async (id) => {
    return await request.delete(API_ROUTES.DIARY.DELETE(id));
  },
  lockDiary: async (id) => {
    return await request.put(API_ROUTES.DIARY.ACTIONS.LOCK(id));
  },
  unlockDiary: async (id) => {
    return await request.put(API_ROUTES.DIARY.ACTIONS.UNLOCK(id));
  },

  
