import React from "react";

function NavBar() {
  return (
    <div className="nav-bar-top">
      <div className="nav-bar-top__left">
        <img
          src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"
          alt=""
          className="nav-bar-top__left--logo"
        />
        <h2>Adobe</h2>
      </div>
      <div className="nav-bar-top__center">
        <ul className="nav-bar-top__center--list">
          <li className="nav-bar-top__center--list-item">
            Creativity & design
          </li>
          <li className="nav-bar-top__center--list-item">
            Marketing and commerce
          </li>
          <li className="nav-bar-top__center--list-item">PDF & E signatures</li>
          <li className="nav-bar-top__center--list-item">Business solutions</li>
          <li className="nav-bar-top__center--list-item">Support</li>
        </ul>
      </div>
      <div className="nav-bar-top__right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path>
        </svg>
        <a href="#" className="nav-bar-top__right--signin">
          Sign in
        </a>
      </div>
    </div>
  );
}

export default NavBar;
