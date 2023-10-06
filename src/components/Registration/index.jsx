import React, { useState } from "react";
import "./style.css";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <form className="form">
      <input
        className="form__input"
        placeholder="Email Addres"
        type="email"
      ></input>
      <input
        className="form__input"
        placeholder="User Name"
        type="text"
      ></input>
      <input
        className="form__input"
        placeholder="Password"
        type="password"
      ></input>
      <input
        className="form__input"
        placeholder="Confirm Password"
        type="password"
      ></input>
      <button className="register" type="submit">
        Register
      </button>
    </form>
  );
};

export default Registration;
