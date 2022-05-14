import React from "react";
import SectionHead from "./SectionHead";
import { IoLogoPython } from "react-icons";
import cat1 from "../public/images/cat1.png";
import cat2 from "../public/images/cat2.png";
import cat3 from "../public/images/cat3.png";
import cat4 from "../public/images/cat4.png";
import style from "../styles/Categories.module.css";
import Category from "./Category";
const Categories = () => {
  return (
    <div>
      <SectionHead
        text1="Get help in the following "
        head="Choose your category"
        color="#73d88e"
        word="areas"
      />

      <div className={style.categories}>
        <Category
          name="PHP"
          desc="lorem ipsum is a dummy text for empty text slots"
          image={cat1}
          scale="scale(0.55)"
          colour="#718DBD"
          pColor="white"
          headColor="white"
          bottom="0px"
          right="-75px"
          top="-20px"
        />
        <Category
          name="PHP"
          desc="lorem ipsum is a dummy text for empty text slots"
          image={cat2}
          scale="scale(0.5)"
          colour="#E0FAF9"
        />
      </div>
      <div className={style.categories2}>
        <Category
          name="PHP"
          desc="lorem ipsum is a dummy text for empty text slots"
          image={cat3}
          scale="scale(0.5)"
          colour="#FFFFCA"
          right="-40px"
          bottom="-123px"
        />
        <Category
          name="PHP"
          desc="lorem ipsum is a dummy text for empty text slots"
          image={cat4}
          scale="scale(0.5)"
          colour="#D3FCCE"
          bottom="-17px"
          right="-25px"
        />
      </div>
    </div>
  );
};

export default Categories;
