import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Navbar.scss";
import { UrlNames } from "../../constants/urlNames";

export const Navbar = () => {
  const activeClassControl = (urlName) => {
    console.log("path name => ", window.location.pathname);
    if (urlName === window.location.pathname) {
      return "active";
    }
  };
  return (
    <ul className='navbar-ul'>
      <li className='navbar-li'>
        <a href="/" className={activeClassControl(UrlNames.home)}>
          Ana Sayfa
        </a>
      </li>

      <li className='navbar-li'>
        <a href="/about" className={activeClassControl(UrlNames.about)}>
          Hakkımızda
        </a>
      </li>
    </ul>
  );
};
