import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { Currency } from "../currency/Currency";

export const Header = () => {
  const day = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={css.header}>
      <div className={css.header_container}>
        <h1 className={css.header_title}>My organizer</h1>
        <span className={css.header_date}>{day}</span>
        <nav className={css.header_nav}>
          <ul>
            <Link to={"/"} className={css.link}>
              Home
            </Link>
            <Link to={"/news"} className={css.link}>
              News
            </Link>
            <Link to={"/weather"} className={css.link}>
              Weather
            </Link>
            <Link to={"/contact"} className={css.link}>
              Contact
            </Link>
          </ul>
        </nav>
        <button className={css.logout_button}>Exit</button>
        <Currency/>
      </div>
    </header>
  );
};
