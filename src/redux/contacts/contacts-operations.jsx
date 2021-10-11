import * as jsonServerApi from "./contacts-api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import shortid from "shortid";

// export const getContacts = () => async (dispatch) => {
//   dispatch(axiosContactsRequest());
//   try {
//     const contacts = await fetchContacts();
//     dispatch(axiosContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(axiosContactsError(error));
//   }
// };

export const addContact = createAsyncThunk(
  "contacts/addContact",
  (name, number) => ({
    name,
    number,
  }),
  async () => {
    const contacts = await jsonServerApi.addContact();
    return contacts;
  }
);

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await jsonServerApi.fetchContacts();
    return contacts;
  }
);
