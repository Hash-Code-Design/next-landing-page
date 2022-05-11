import style from "../styles/Navbar.module.css";
import Link from "next/link";
import Button from "./Button";

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
      <Button text="Sign me up" />
    </div>
  );
};

export default Navbar;
