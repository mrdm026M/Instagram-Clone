import React from "react";
import { Feed } from "../StyledComponents/Feed/Feed";
import { Story } from "../StyledComponents/Story/Story";
import "./Feeds.scss";

export const Feeds = () => {
  return (
    <div className="feeds__section">
      <Story />
      <Feed />
    </div>
  );
};
