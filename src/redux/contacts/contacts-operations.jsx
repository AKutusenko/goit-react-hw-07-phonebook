import {
  axiosContactsRequest,
  axiosContactsSuccess,
  axiosContactsError,
} from "./contacts-actions";
import { getContactsFromDb } from "./contacts-api";

export const getContacts = () => async (dispatch) => {
  dispatch(axiosContactsRequest());
  try {
    const contacts = await getContactsFromDb();
    dispatch(axiosContactsSuccess(contacts));
  } catch (error) {
    dispatch(axiosContactsError(error));
  }
};
