import React from "react";
import { AiOutlineComment, AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";
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
            <li>
              <AiOutlineHome />
            </li>
            <li>
              <AiOutlineComment />
            </li>
            <li>
              <IoMdNotificationsOutline />
            </li>
            <li>
              <RiMovie2Line />
            </li>
            <li>
              <IoSettingsOutline />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
