import React from "react";

import "./Header.css";

import Logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className="header-component flex-space-between-center">
      <div className="flex-flex-start-center">
        <img className="mr-8px" src={Logo} alt="logo" />
        <p className="logo-text">TIME TRACKER</p>
      </div>

      <p>
        Total Time Spend <span className="total-time ml-8px">1hr</span>{" "}
      </p>
    </div>
  );
}
