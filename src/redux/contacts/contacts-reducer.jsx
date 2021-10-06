import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { addContact, removeContact } from "./contacts-actions";
import {
  axiosContactsRequest,
  axiosContactsSuccess,
  axiosContactsError,
} from "./contacts-actions";

// export const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     let duplicate = state.find((contact) => contact.name === payload.name);
//     if (duplicate) {
//       alert("Такой контакт уже существует!");
//       return state;
//     } else {
//       return [...state, payload];
//     }
//   },
//   [removeContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

const entities = createReducer([], {
  [axiosContactsSuccess]: (state, action) => action.payload,
});

const isLoading = createReducer(false, {
  [axiosContactsRequest]: () => true,
  [axiosContactsSuccess]: () => false,
  [axiosContactsError]: () => false,
});

const error = createReducer(null, {
  [axiosContactsError]: (state, action) => action.payload,
  [axiosContactsRequest]: () => null,
});

export default combineReducers({
  entities,
  error,
  isLoading,
});
