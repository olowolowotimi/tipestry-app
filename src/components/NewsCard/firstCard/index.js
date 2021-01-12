import React from 'react';
import CardStyle from './style/Card.module.css';
import { HiThumbDown } from 'react-icons/hi';
import { HiThumbUp } from 'react-icons/hi';
import { MdMessage, MdShare } from 'react-icons/md';
import PropTypes from 'prop-types';


const NewsCard = ({
  title,
  username,
  tags = [],
  websiteUrl,
  upVotes,
  commentsCount,
  imageUrl,
  dateCreated,
}) => {
  return (
    <div className={`card ${CardStyle.card}`}>
      <div className={CardStyle.iconWrapper}>
        <HiThumbUp size={20} color="#757575" />
        <p className={CardStyle.iconCount}>{upVotes}</p>
        <HiThumbDown size={20} color="#757575" />
      </div>
      <div className={CardStyle.content}>
        <div className={CardStyle.image}>
          <img src={imageUrl} alt="image" />
        </div>
        <div>
          <h4 className={CardStyle.title}>{title}</h4>
          <p className={CardStyle.text}>
            <a className={CardStyle.link}>@{username}</a> {dateCreated}{' '}
            {tags.map((tag) => (
              <a className={CardStyle.link}>#{tag} </a>
            ))}
            <a className={CardStyle.link} href={websiteUrl}>
              {' '}
              ({websiteUrl})
            </a>
          </p>
          <div className={CardStyle.actions}>
            <div
              className={`${CardStyle.actionsItem} ${CardStyle.messageAction}`}
            >
              <MdMessage size={22} color="#757575" />
              <span className={CardStyle.messageActionCount}>
                {commentsCount}
              </span>
            </div>
            <div className={CardStyle.actionsItem}>
              <MdShare size={22} color="#757575" />
            </div>
            <div className={CardStyle.actionsItem}>
              <img
                className={CardStyle.moneyBagImg}
                src="/static/img/moneybag.svg"
                alt="moneybag"
              />
            </div>
            <div className={CardStyle.actionsItem}>
              <img
                className={CardStyle.dogeImg}
                src="/static/img/doge.svg"
                alt="doge"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsCard;