import React from 'react';
import secondStyle from './style/secondCard.module.css';
import { HiThumbDown } from 'react-icons/hi';
import { HiThumbUp } from 'react-icons/hi';
import { MdMessage, MdShare } from 'react-icons/md';
import PropTypes from 'prop-types';

const SecondCard = ({
    title,
    username,
    tags = [],
    websiteUrl,
    upVotes,
    commentsCount,
    imageUrl,
    dateCreated,
  }) => {

    return(
        <div className={`card ${secondStyle.card} `}>
            <a className={secondStyle.link}>@{username}</a> <br/>
            {dateCreated}{' '}
        <h4 className={secondStyle.title}>{title}</h4>
        {tags.map((tag) => (
              <a className={secondStyle.link}>#{tag} </a>
            ))}
             <div className={secondStyle.image}>
          <img src={imageUrl} alt="image" />
        </div>
        <div className={secondStyle.downicons}>
        <div className={secondStyle.iconWrapper}>
        <HiThumbUp size={20} color="#757575" />
        <p className={secondStyle.iconCount}>{upVotes}</p>
        <HiThumbDown size={20} color="#757575" />
      </div>
        <div className={secondStyle.actions}>
            <div
              className={`${secondStyle.actionsItem} ${secondStyle.messageAction}`}
            >
              <MdMessage size={22} color="#757575" />
              <span className={secondStyle.messageActionCount}>
                {commentsCount}
              </span>
            </div>
            <div className={secondStyle.actionsItem}>
              <MdShare size={22} color="#757575" />
            </div>
            </div>
        </div>
        </div>
    )
}
 

    

export default SecondCard;