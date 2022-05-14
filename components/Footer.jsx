import React from "react";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.containerItems}>
        <div className={style.footerLeft}>
          <h2>Logo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            metus vel diam commodo consequat. Nulla eleifend sem quam
          </p>
        </div>
        <div className={style.footerRight}>
          <div className={style.footerMenus}>
            <ul className={style.menu}>
              <h2>Home</h2>
              <li>servicies</li>
              <li>pricing</li>
              <li>patners</li>
            </ul>
          </div>
          <div className={style.footerMenus}>
            <ul>
              <h2>Home</h2>
              <li>servicies</li>
              <li>pricing</li>
              <li>patners</li>
            </ul>
          </div>
          <div className={style.footerMenus}>
            <ul>
              <h2>Pricing</h2>
              <li>Branches</li>
              <li>location</li>
              <li>get a job</li>
            </ul>
          </div>
          <div className={style.footerMenus}>
            <ul>
              <h2>About</h2>
              <li>Monthly</li>
              <li>New</li>
              <li>Weekly</li>
            </ul>
          </div>
        </div>
      </div>
      <p className={style.LastP}>Copyright 2022 all legal rights reserved</p>
    </div>
  );
};

export default Footer;
