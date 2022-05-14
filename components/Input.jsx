import React from "react";
import style from "../styles/Input.module.css";
const Input = () => {
  return (
    <div className={style.container}>
      <input type="text" placeholder="Enter your email" />
    </div>
  );
};

export default Input;
