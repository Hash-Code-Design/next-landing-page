import style from "../styles/Navbar.module.css";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <span>&lt;</span>
        <h2>hashcode</h2>
        <span>&gt;</span>
      </div>
      <ul className={style.list}>
        <li>home</li>
        <li>about</li>
        <li>solution</li>
      </ul>
      <button className={style.button} type="button">
        Sign me up
      </button>

      <div className={style.toggle}>
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
