import React, { useState } from "react";
import bugStyle from "./style/Hamburger.module.css";
import { IoMdMenu } from "react-icons/io";
import { CgCopyright } from "react-icons/cg";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import Hashtag from '../Hashtag';
import Banner from '../Banner';
import Copyright from '../Copyright';

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const toggleMobileMenu = () => {
    setActive(!active);
    console.log(active);
  };

  const mobileMenu = (
    <div className={`${active ? bugStyle.mobileMenu : bugStyle.inactiveMenu}`}>
      <div className={bugStyle.side}>
       <Hashtag />
       <Banner />
       <Copyright />
        </div>
      </div>
   
  );
  return (
    <div
      className={bugStyle.icon}
      onClick={() => {
        toggleMobileMenu();
      }}
    >
      <IoMdMenu className={bugStyle.option} />
      {mobileMenu}
    </div>
  );
};

export default Hamburger;
