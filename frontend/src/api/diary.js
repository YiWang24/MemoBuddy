import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

/**
 * api calls for create, edit, delete and save data
 */
export const diaryApi = {
  //creating new diary
  createDiary: async (data) => {
    return await request.post(API_ROUTES.DIARY.CREATE, data);
  },

  //getting all the diaries for particular user
  getDiaries: async () => {
    return await request.get(API_ROUTES.DIARY.LIST);
  },

  //getting a particular diary for particular user
  getDiaryById: async (id) => {
    return await request.get(API_ROUTES.DIARY.GET(id));
  },

  //using particular diary with unique id, to edit
  editDiary: async (id, data) => {
    return await request.put(API_ROUTES.DIARY.UPDATE(id), data);
  },

  //deleting a particular diary using unique id for particular user diary
  deleteDiary: async (id) => {
    return await request.delete(API_ROUTES.DIARY.DELETE(id));
  },

  //locking the diary with a password
  lockDiary: async (id, password) => {
    return await request.put(API_ROUTES.DIARY.ACTIONS.LOCK(id), { password });
  },

  //unlock the diary using password
  unlockDiary: async (id, password) => {
    return await request.put(API_ROUTES.DIARY.ACTIONS.UNLOCK(id), { password });
  },
};
