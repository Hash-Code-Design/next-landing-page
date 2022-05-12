import React from "react";
import style from "../styles/SectionHead.module.css";

const SectionHead = ({ head, text1, text2, color }) => {
  return (
    <div className={style.container}>
      <h3>{head}</h3>
      <h2>
        {text1}
        <span style={{ color }}> word </span>
        {text2 ? text2 : null}
      </h2>
    </div>
  );
};

export default SectionHead;
