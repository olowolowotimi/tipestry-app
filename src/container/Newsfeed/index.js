import React from "react";
import NewsStyle from "./style/Newsfeed.module.css";
import { BiSearch } from "react-icons/bi";
import View from "../../components/View";
import Hashtag from "../../components/Hashtag";
import Banner from "../../components/Banner";
import Copyright from "../../components/Copyright";
import Display from "../../components/Display";

const Newsfeed = () => {
 

  return (
    <div className={NewsStyle.container}>
      <div className={NewsStyle.main}>
        <div className={`card ${NewsStyle.searchBar}`}>
          <BiSearch className={NewsStyle.searchIcon} size={25} />
          <input
            className={NewsStyle.searchInput}
            type="text"
            placeholder="Enter a URL"
          />
          <button className={NewsStyle.searchButton}>LOAD</button>
        </div>
        <View />
        <Display/>

       
      </div>
      <div className={NewsStyle.side}>
        <Hashtag />
        <Banner />
        <Copyright />
       
      </div>
    </div>
  );
};

export default Newsfeed;
