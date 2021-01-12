import React from 'react';
import HeadStyle from './style/Header.module.css';
import { RiPencilFill } from 'react-icons/ri';
import Hamburger from "../../components/Hamburger"

const Header = () => {
  return (
    <header id={HeadStyle.body}>
      <Hamburger />
      <img
        src="/static/img/tipcoin.png"
        alt="tipcoin"
        className={HeadStyle.logo}
      />
      <div className={HeadStyle.nav}>
        <div className={HeadStyle.navItem}>
          <RiPencilFill size={25} color="white" />
        </div>
        <div className={HeadStyle.navItem}>
          <h4 className={HeadStyle.login}>LOGIN</h4>
        </div>
        <div className={HeadStyle.navItem}>
          <button className={HeadStyle.btn}>JOIN US</button>
        </div>
      </div>
    </header>
  );
};

export default Header;