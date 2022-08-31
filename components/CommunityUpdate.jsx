import style from "../styles/Intro.module.css";
import React from "react";
const data = [
  {
    number: "5k+",
    text: "members",
  },
  {
    number: 30,
    text: "project",
  },
  {
    number: 112,
    text: "mentors",
  },
];
const CommunityUpdate = () => {
  return (
    <div className={style.update}>
      {data.map((item, i) => {
        return (
          <div key={i} className={style.updateItems}>
            <h1>{item.number}</h1>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityUpdate;
