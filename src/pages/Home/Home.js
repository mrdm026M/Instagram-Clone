import React from "react";
import { Feeds } from "../../components/Feeds/Feeds";
import { Navbar } from "../../components/Navbar/Navbar";
import { Profile } from "../../components/Profile/Profile";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-feed">
        <Navbar />
        <Feeds />
      </div>
      <div className="home-profile">
        <Profile />
      </div>
    </div>
  );
};
