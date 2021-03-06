import React from "react";
import style from "../styles/AboutList.module.css";
const AboutList = ({ text, heading, icon, color }) => {
  return (
    <div className={style.container}>
      <div className={style.aboutList}>
        <div style={{ color: color }} className={style.iconDiv}>
          {icon}
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutList;
