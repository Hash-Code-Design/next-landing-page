import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import style from "../styles/ButtonGroup.module.css";
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className={style.container}>
      <button onClick={previous} aria-label="Previous">
        <IoIosArrowRoundBack />
      </button>
      <button onClick={next} aria-label="Next">
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};
export default ButtonGroup;
