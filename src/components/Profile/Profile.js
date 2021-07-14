import React from "react";
import { FiPlus } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import ProfileData from "../../assets/data/ProfileData.js";
import Stories from "../../assets/data/StoryData";
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
              <hr />
              <div className="user-followers box">
                <h2>{data.followers.number}</h2>
                <p>{data.followers.text}</p>
              </div>
              <hr />
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
              <div className="content">
                {Stories.map((story, index) => {
                  if (index >= 5) {
                    return null;
                  } else {
                    return (
                      <div className={index + " story"}>
                        <div className="profile__img-box">
                          <img src={story.image} alt="story" />
                        </div>
                        <h2>{story.name}</h2>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="user-btn">
              <NavLink to="/">
                <button>
                  Create Post <FiPlus />
                </button>
              </NavLink>
              <NavLink to="/">
                <button>
                  Update Profile <GrUpdate />
                </button>
              </NavLink>
              <NavLink to="/">
                <button>
                  Logout <HiOutlineLogout />
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
};
