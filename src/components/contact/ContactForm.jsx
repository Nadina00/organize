import { useState } from "react";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import contactsOperations from "../../redux/contact/contact-operations";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState(null);
  const [email, setEmail] = useState("");
  const [commit, setCommit] = useState("");
const dispatch = useDispatch()
  

  const onClick = (e) => {
    e.preventDefault();
    const { value, name } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setTel(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "comment":
        setCommit(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(contactsOperations.contactsAdd({name, tel, email, commit}))
    reset()
  }

  const reset = () => {
    setName("");
    setTel("");
    setEmail("");
    setCommit("");
    
  };

  return (
    <div>
      <form className={css.form} onSubmit={onSubmit}>
        <label>
          {" "}
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={onClick}
            value={name}
          />
        </label>
        <br />
        <label>
          {" "}
          Telephone
          <input
            type="tel"
            name="phone"
            placeholder="+380XXXXXXXXX"
            onChange={onClick}
            value={tel}
          />
        </label>
        <br />
        <label>
          {" "}
          Email
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            onChange={onClick}
            value={email}
          />
        </label>
        <br />
        <label>
          {" "}
          Comment
          <textarea
            name="comment"
            placeholder="Enter your comment"
            rows="4"
            onChange={onClick}
            value={commit}
          ></textarea>
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
