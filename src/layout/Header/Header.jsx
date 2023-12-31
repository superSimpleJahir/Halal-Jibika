import { NavLink } from "react-router-dom";
import style from "../../style/Header.module.css";
const Header = () => {
  return (
    <nav className={`flex`}>
      <div className={style.logo}>
        <NavLink to='/'>HaLal~JiBiKa</NavLink>
      </div>
      <ul className={`${style.flex} flex`}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/jobs'>Jobs</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/favorite'>Favorite</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/singup'>SingUp</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
