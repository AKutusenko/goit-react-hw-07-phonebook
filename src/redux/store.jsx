import { configureStore } from "@reduxjs/toolkit";

// import { contactsReducer } from "./contacts/contacts-reducer";
import { filterReducer } from "./filter/filter-reducer";
import contactsReducer from "./contacts/contacts-reducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
