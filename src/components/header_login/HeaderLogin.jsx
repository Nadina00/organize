import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { Currency } from "../currency/Currency";

export const HeaderLogin = () => {
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
            <Link to={"/news"} className={css.link}>
              News
            </Link>
            <Link to={"/weather"} className={css.link}>
              Weather
            </Link>
          </ul>
        </nav>
        
        <Currency />
      </div>
    </header>
  );
};
