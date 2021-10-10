import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import s from "./ContactList.module.css";
import { removeContact } from "../../redux/contacts/contacts-actions";
import { getContacts } from "../../redux/contacts/contacts-operations";
import { getContactsFromState } from "../../redux/contacts/contacts-selectors";

export default function ContactList() {
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={s.list}>
      {visibleContacts &&
        visibleContacts.map(({ name, number, id }) => (
          <li className={s.listItem} key={id}>
            {`${name}: ${number}`}
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Remove
            </button>
          </li>
        ))}
    </ul>
  );
}
