import { NavLink } from "react-router-dom";
import style from "../../style/Header.module.css";
const Header = () => {
  return (
    <section className={`${style.innerNavSection}`}>
      <nav className={`flex  container ${style.nav}`}>
        <div className={style.logo}>
          <NavLink to="/">HaLal~JiBiKa</NavLink>
        </div>

        <ul className={`${style.flex} flex`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </ul>

        <ul className={`${style.flex} flex `}>
          <NavLink to="/login">
            <li className={`${style.login} ${style.btn}`}>Login</li>
          </NavLink>
          <NavLink to="/singup">
            <li className={`${style.singup} ${style.btn}`}>SingUp</li>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
