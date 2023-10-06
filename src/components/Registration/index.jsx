import React, { useState } from "react";
import "./style.css";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const fillName = (e) => {
    setUser({
      ...user,
      username:
        user.username === "" && e.target.value.includes("@")
          ? e.target.value.split("@")[0]
          : "",
      email: e.target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSumbit}>
      <input
        className="form__input"
        placeholder="Email Addres"
        type="email"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
          fillName(e);
        }}
      ></input>
      <input
        className="form__input"
        placeholder="User Name"
        type="text"
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      ></input>
      <input
        className="form__input"
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      ></input>
      <input
        className="form__input"
        placeholder="Confirm Password"
        type="password"
        onChange={(e) => {
          setUser({ ...user, passwordConfirm: e.target.value });
        }}
      ></input>
      <button className="register" type="submit">
        Register
      </button>
    </form>
  );
};

export default Registration;
