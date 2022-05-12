import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import style from "../styles/About.module.css";
import AboutList from "./AboutList";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutLeft}>
        <p>Benefits</p>
        <h2>What’s so great about Hashcode?</h2>
        <p>lorem ipsum is a dummy text for empty text slots</p>
      </div>
      <div className={style.aboutRight}>
        <div className={style.aboutLeftList}>
          <AboutList
            text="lorem ipsum is a dummy text for empty text slots"
            heading="Browse portfolios"
            icon={<MdDashboardCustomize />}
            color="#F5F404"
          />
          <AboutList
            text="lorem ipsum is a dummy text for empty text slots"
            heading="Book sessions"
            icon={<BsCalendarDate />}
            color="#39bbb8"
          />
        </div>
        <div className={style.aboutRightList}>
          <AboutList
            text="lorem ipsum is a dummy text for empty text slots"
            heading="Live chat"
            icon={<BiMessageRoundedDetail />}
            color="#68C610"
          />
          <AboutList
            text="lorem ipsum is a dummy text for empty text slots"
            heading="Competitions"
            icon={<GiTrophyCup />}
            color="#75648B"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
