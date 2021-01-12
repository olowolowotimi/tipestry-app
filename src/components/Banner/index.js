import React from 'react';
import banStyle from './style/Banner.module.css';


const Banner = () => {
    return(
        <div className={`card ${banStyle.sideCard}`}>
            <img src="static/img/potw-banner.png" alt="biggerbanner" />
        </div>
    )
}
export default Banner;