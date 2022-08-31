import { BiCodeAlt, BiMessageRoundedDetail } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import style from "../styles/Intro.module.css";
import Button from "./Button";
import CommunityUpdate from "./CommunityUpdate";
import Image from "next/image";
import Person1 from "../public/images/person1.png";
import Person2 from "../public/images/person2.png";
import Person3 from "../public/images/person3.png";
import Person4 from "../public/images/person4.png";
import Person5 from "../public/images/person5.png";
import Line1 from "../public/images/line1.png";
import Line2 from "../public/images/line2.png";
import Line3 from "../public/images/line3.png";
import Line4 from "../public/images/line4.png";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.landingDivGradient}></div>
      <div className={style.introLeft}>
        <div className={style.blur} style={{ zIndex: 1 }}></div>
        <h1>
          Join our <br />
          <span className={style.spanHead}>community</span> today
        </h1>
        <h4>
          Meet and interact with other programmers all <br />
          over the world.
        </h4>

        <Button text="Join the community" />

        <CommunityUpdate />

        <div className={style.leftInDev}></div>
      </div>
      <div className={style.introRight}>
        <div className={style.introRightInner}>
          <div className={style.imgDiv}>
            <Image src={Person4} alt="" />
            <div className={style.imgIcon1}>
              <BiCodeAlt />
            </div>
          </div>
          <div className={style.imgDiv}>
            <Image src={Person3} alt="" />
          </div>
          <div className={style.imgDiv}>
            <Image src={Person2} alt="" />
          </div>
          <div className={style.imgDiv}>
            <Image src={Person5} alt="" />
            <div className={style.imgIcon2}>
              <BiMessageRoundedDetail />
            </div>
          </div>
          <div className={style.imgDiv}>
            <Image src={Person1} alt="" />
            <div className={style.imgIcon3}>
              <SiMinutemailer />
            </div>
          </div>
          <Image src={Line1} alt="" />
          <Image src={Line2} alt="" />
          <Image src={Line4} alt="" />
          <Image src={Line3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
