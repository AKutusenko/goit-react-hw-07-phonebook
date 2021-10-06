import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const addContact = createAction(
  "contacts/addContact",
  (name, number) => ({
    payload: { name, number, id: shortid.generate() },
  })
);

export const removeContact = createAction("contacts/removeContact");

export const axiosContactsRequest = createAction(
  "contacts/axiosContactsRequest"
);

export const axiosContactsSuccess = createAction(
  "contacts/axiosContactsSuccess"
);

export const axiosContactsError = createAction("contacts/axiosContactsError");
