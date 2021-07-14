import React from "react";
import { FaShare } from "react-icons/fa";
import { FiBookmark, FiHeart, FiMessageCircle } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import feeds from "../../../assets/data/FeedData";
import { Header } from "../Header/Header";
import "./Feed.scss";

export const Feed = () => {
  return (
    <div className="feeds__content">
      <Header title="Feeds" />
      <div className="main__content">
        {feeds.map((feed, index) => {
          return (
            <div className={index + " feed-box"}>
              <div className="feed-box__header">
                <div className="main-info">
                  <div className="profile__img-box">
                    <img src={feed.profileImage} alt={feed.profileImageAlt} />
                  </div>
                  <div className="info">
                    <h2>{feed.name}</h2>
                    <p>{feed.area}</p>
                  </div>
                </div>
                <div className="more">
                  <NavLink to="/">
                    <HiDotsHorizontal />
                  </NavLink>
                </div>
              </div>
              <div className="feed-box__image">
                <img src={feed.feedImage} alt={feed.feedImageAlt} />
              </div>
              <div className="feed-box__icons">
                <div className="icon-left">
                  <NavLink to="/">
                    <FiHeart />
                  </NavLink>
                  <NavLink to="/">
                    <FiMessageCircle />
                  </NavLink>
                  <NavLink to="/">
                    <FaShare />
                  </NavLink>
                </div>
                <div className="icon-right">
                  <NavLink to="/">
                    <FiBookmark />
                  </NavLink>
                </div>
              </div>
              <div className="feed-box__likes">
                <p>
                  Liked by <span>{feed.likedName}</span> and
                  <span> {feed.likedNumber} others</span>
                </p>
              </div>
              <div className="feed-box__description">
                <p>{feed.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
