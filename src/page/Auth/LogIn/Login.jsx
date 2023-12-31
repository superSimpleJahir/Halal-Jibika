/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import style from "../../../style/Login.module.css";
import { useState } from "react";
const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handelChang = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };
  const handelSubmit =(event)=>{
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <div className={`${style.innerLogin} container`}>
      <form onSubmit={handelSubmit}>
        <h1>Log in</h1>
        <p>
          Don't have an account?<NavLink to="/singup"> Create a free account</NavLink>{" "}
        </p>
        <div className={`${style.name}`}>
          <input
            value={email}
            onChange={handelChang}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your enail"
          />
        </div>
        <div className={`${style.password}`}>
          <input
            onChange={handelChang}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={`${style.btn}`}>
          <input type="submit" value="Log In" required />
        </div>
      </form>
    </div>
  );
};

export default Login;
