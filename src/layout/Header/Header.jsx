import style from "./Header.module.css";
const Header = () => {
  return (
    <nav>
      <div className={style}>jahir</div>
      <ul className={style.flex}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Favorite</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">SingUp</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
