import React from 'react';
import copyStyle from './style/Copyright.module.css';
import { CgCopyright } from "react-icons/cg";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";


const Copyright = () => {
    return(
        <div className={`card ${copyStyle.secondCard}`}>
        <div className={copyStyle.summary}>
          <a className={copyStyle.bold}>
            <CgCopyright />
            2020 Tipestry
          </a>
          <a>Faq</a>
          <a>Contact</a>
          <a>About</a>
          <a>Contests</a>
          <a>Privacy Policy</a>
          <a>Tipestry Go</a>
          <a>White Paper</a>
          <a>Tipestry for Chrome</a>
          <a>Terms and Condition</a>
        </div>
        <h4 className={copyStyle.bold}>Follow Us on social Media</h4>
        <div className={copyStyle.social}>
          <span>
            <FaFacebook />
          </span>
          <span>
            <AiFillTwitterCircle />
          </span>
          <span>
            <TiSocialYoutubeCircular />
          </span>
          <span>
            <FaTelegram />
          </span>
        </div>
      </div>
    )
}
export default Copyright;