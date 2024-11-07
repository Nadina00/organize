import { useDispatch, useSelector } from "react-redux";
import {
  selectContact,
  selectisLoaderContacts,
} from "../../redux/contact/contact-select";
import css from "./Contact.module.css";
import contactsOperations from "../../redux/contact/contact-operations";
import { useEffect, useState } from "react";

export const ContactList = () => {
  const isLoader = useSelector(selectisLoaderContacts);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(contactsOperations.contactsList());
  }, [dispatch]);

  const onClickDel = (id) => {
    dispatch(contactsOperations.contactsDel(id));
    dispatch(contactsOperations.contactsList());
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const contacts = useSelector(selectContact);
  console.log(contacts);

  if (!contacts && !isLoader) {
    return <p>Контактов нет</p>;
  }
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase()) ||
      contact.tel.toString().includes(value) ||
      contact.email.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={css.news_container}>
      <input
        type="text"
        placeholder="Search by name, phone or email"
        value={value}
        onChange={onChange}
        className={css.search_input}
      />
      <h2>Contact details:</h2>
      <ul className={css.news_list}>
        {!filteredContacts.length ? (
          <p>No contacts to display.</p>
        ) : (
          filteredContacts.map((item) => (
            <li key={item._id} className={css.news_item}>
              <h3>{item.name}</h3>
              <p>
                <strong> Telephone:</strong> {item.tel}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Comment:</strong> {item.commit}
              </p>
              <button
                className={css.delete_button}
                onClick={() => onClickDel(item._id)}
                aria-label="Удалить"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
