import React from "react";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar__section">
      <div className="navbar">
        <div className="nav-logo">
          <h2>Instagram</h2>
        </div>
        <div className="search">
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
        <div className="nav-links">
          <ul className="nav-link">
            <li>Home</li>
            <li>Feeds</li>
            <li>Messages</li>
            <li>Notification</li>
            <li>Reels</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
