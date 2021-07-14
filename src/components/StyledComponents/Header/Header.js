import React from "react";
import "./Header.scss";

export const Header = ({ title = "header" }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
    </div>
  );
};
