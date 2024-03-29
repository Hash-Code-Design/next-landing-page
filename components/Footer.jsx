import React from "react";
import style from "../styles/Footer.module.css";
import Image from "next/image";
import FooterImg2 from "../public/images/footer1.png";
import FooterImg1 from "../public/images/footer2.png";
import logo from '../public/images/Asset 3.png'
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footerImg}>
        <Image src={FooterImg1} class alt="" />
      </div>
      <div className={style.footerImg2}>
        <Image src={FooterImg2} alt="" />
      </div>
      <div className={style.containerItems}>
        <div className={style.footerLeft}>
          <Image src={logo} alt='logo' width='70%' height='70%' />
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
