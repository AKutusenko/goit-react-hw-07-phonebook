import {
  axiosContactsRequest,
  axiosContactsSuccess,
  axiosContactsError,
} from "./contacts-actions";
import { getContactsFromDb } from "./contacts-api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getContacts = () => async (dispatch) => {
  dispatch(axiosContactsRequest());
  try {
    const contacts = await getContactsFromDb();
    dispatch(axiosContactsSuccess(contacts));
  } catch (error) {
    dispatch(axiosContactsError(error));
  }
};

// const fetchUserById = createAsyncThunk(
//   "users/fetchByIdStatus",
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );
