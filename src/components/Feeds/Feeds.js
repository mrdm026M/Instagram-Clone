import React from "react";
import feeds from "../../assets/data/FeedData";
import { Header } from "../StyledComponents/Header/Header";
import { Story } from "../StyledComponents/Story/Story";
import "./Feeds.scss";

export const Feeds = () => {
  return (
    <div className="feeds__section">
      <Story />
      <div className="feeds__content">
        <Header title="Feeds" />
        <div className="main__content">
          {feeds.map((feed, index) => {
            return (
              <div className={index + " feed-box"}>
                <div className="feed-box__header">
                  <div className="profile__img-box">
                    <img src={feed.profileImage} alt={feed.profileImageAlt} />
                  </div>
                  <div className="info">
                    <h2>{feed.name}</h2>
                    <p>{feed.area}</p>
                  </div>
                  <h2>Icon</h2>
                </div>
                <div className="feed-box__image">
                  <img src={feed.feedImage} alt={feed.feedImageAlt} />
                </div>
                <div className="feed-box__icons">
                  <h2>Heart</h2>
                  <h2>Comment</h2>
                  <h2>Share</h2>
                  <h2>Saved</h2>
                </div>
                <div className="feed-box__likes">
                  <p>
                    Liked by <span>{feed.likedName}</span> and{" "}
                    <span>{feed.likedNumber} others</span>
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
    </div>
  );
};
