import React from "react";
import SectionHead from "./SectionHead";
import style from "../styles/NewsLetter.module.css";
import Button from "./Button";
import Input from "./Input";
const NewsLetter = () => {
  return (
    <div className={style.container}>
      <SectionHead
        head="Sign up for our newsletter"
        word="nuggets"
        text1="Subscribe for helpful  "
        color="#73d88e"
      />
      <Input />
      <Button text="Sign me up" />
    </div>
  );
};

export default NewsLetter;
