import style from "../styles/Navbar.module.css";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });



  const showSidebar = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div
      className={style.container}
      style={{
        boxShadow: bg ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "",
        position: "fixed",
        width: "100%",
        transition: "all",
        transitionDuration: '1s',
      }}
    >
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

      <div
        className={style.toggle}
        onClick={showSidebar}
        style={{ position: "relative" }}
      >
        <FaBars style={{ position: "relative" }} />
      </div>

      {toggle && (
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "60px",
            maxWidth: "140px",
            transition: "ease-in-out",
            padding: "24px",
            margin: "20px 20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
          }}
        >
          <ul
            className=""
            style={{
              color: "#655f5f",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              padding: "0",
              gap: 6,
              flex: 1,
              justifyContent: "",
              alignItems: "flex-start",
              background: "#fff",
            }}
          >
            <li style={{ marginBottom: "7px", textTransform: "uppercase" }}>
              home
            </li>
            <li style={{ marginBottom: "7px", textTransform: "uppercase" }}>
              about
            </li>
            <li style={{ textTransform: "uppercase" }}>solution</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
