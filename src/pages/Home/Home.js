import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Profile } from "../../components/Profile/Profile";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-feed">
        <Navbar />
      </div>
      <div className="home-profile">
        <Profile />
      </div>
    </div>
  );
};
