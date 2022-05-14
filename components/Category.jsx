import React from "react";
import Image from "next/image";
import style from "../styles/Category.module.css";
const Category = ({
  name,
  desc,
  colour,
  image,
  scale,
  pColor,
  headColor,
  right,
  bottom,
  top,
}) => {
  return (
    <div className={style.category} style={{ backgroundColor: colour }}>
      <div className={style.catLeft}>
        <div className={style.catLeftDiv}></div>
        <h2 style={{ color: headColor }}>{name}</h2>
        <p style={{ color: pColor }}>{desc}</p>
      </div>
      <div
        className={style.catRight}
        style={{ transform: scale, right, bottom, top }}
      >
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default Category;
