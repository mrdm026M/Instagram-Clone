import React from "react";
import { NavLink } from "react-router-dom";
import ProfileData from "../../assets/data/ProfileData.js";
import "./Profile.scss";

export const Profile = () => {
  return (
    <>
      {ProfileData.map((data, index) => {
        return (
          <div className="profile__section" key={index}>
            <div className="user-info">
              <img src={data.image} alt={data.imageAlt} />
              <h2>{data.name}</h2>
              <p>@{data.username}</p>
            </div>
            <div className="user-follow-info">
              <div className="user-posts box">
                <h2>{data.posts.number}</h2>
                <p>{data.posts.text}</p>
              </div>
              <div className="user-followers box">
                <h2>{data.followers.number}</h2>
                <p>{data.followers.text}</p>
              </div>
              <div className="user-following box">
                <h2>{data.following.number}</h2>
                <p>{data.following.text}</p>
              </div>
            </div>
            <div className="user-description">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
            <div className="user-story-highlights">
              <h2>Story Highlights</h2>
              <div className="highlights">
                <h2>Highlights</h2>
              </div>
            </div>
            <div className="user-btn">
              <button>
                <NavLink to="/">Create Post</NavLink>
              </button>
              <button>
                <NavLink to="/">Update Profile</NavLink>
              </button>
              <button>
                <NavLink to="/">Logout</NavLink>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
