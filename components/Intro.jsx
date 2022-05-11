import style from "../styles/Intro.module.css";
import Button from "./Button";
import CommunityUpdate from "./communityUpdate";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.introLeft}>
        <h1>
          Join our <br />
          <span className={style.spanHead}>community</span> today
        </h1>
        <p>
          Meet and interact with other programmers all <br />
          over the world.
        </p>
        <Button text="Join the community" />

        <CommunityUpdate />

        <div className={style.leftInDev}></div>
      </div>
      <div className={style.introRight}>
        <h1>img</h1>
      </div>
    </div>
  );
};

export default Intro;
