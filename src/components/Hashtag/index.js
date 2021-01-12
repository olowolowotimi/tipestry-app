import React from 'react';
import tagStyle from './style/Hashtag.module.css';


const Hashtag = () => {
    return (
        <div>
        <p>Top Hashtags</p>
        <div className={`card ${tagStyle.sideCard}`}>
          <div className={tagStyle.tags}>
            <a>#gifs</a>
            <a>#pics</a>
            <a>#discussion</a>
            <a>#news</a>
            <a>#bitcoin</a>
            <a>#btc</a>
            <a>#earn</a>
            <a>#free</a>
            <a>#ua</a>
            <a>#poetry</a>
          </div>
          </div>
          </div>
    )
}
export default Hashtag