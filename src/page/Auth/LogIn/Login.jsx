/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import style from "../../../style/Login.module.css";
import { app } from "../../../firebase/firebase.config";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const emailPassword = getAuth(app);
  const history = useNavigate();

  const handelChang = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();

    // email and password auth
    createUserWithEmailAndPassword(emailPassword, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        history("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className={`${style.innerLogin} container`}>
      <div className={style.innerform}>
        <form onSubmit={handelSubmit}>
          <h1>Log in</h1>
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
        <p>
          Don't have an account?<NavLink to="/singup"> Create a free account</NavLink>{" "}
        </p>
        <hr />
        <div className={`${style.btn}`}>
          <button>
            <FaGoogle /> Sign up with google
          </button>
        </div>
        <div className={`${style.btn}`}>
          <button>
            <FaGithub /> Sign up with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
