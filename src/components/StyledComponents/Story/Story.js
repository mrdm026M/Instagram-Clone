import React from "react";
import Stories from "../../../assets/data/StoryData";
import { Header } from "../Header/Header";
import "./Story.scss";

export const Story = () => {
  return (
    <div className="story__content">
      <Header title="Stories" />
      <div className="content">
        {Stories.map((story, index) => {
          return (
            <div className={index + " story"}>
              <div className="profile__img-box">
                <img src={story.image} alt="story" />
              </div>
              <h2>{story.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
