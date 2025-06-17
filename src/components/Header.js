import React from "react";
import "./App.css";
import { SIGGY_LOGO_URL } from "../constants";

function Header() {
  return (
    <div>
      <img src={SIGGY_LOGO_URL} alt="Swiggy Logo" className="swiggy-logo" />
      <button className="login-btn">Sign in</button>
      <a
        className="corporate-url"
        href="https://www.swiggy.com/corporate/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Swiggy Corporate
      </a>
      <a
        className="partnerwith-url"
        href="https://partner.swiggy.com/login#/swiggy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Partner with us
      </a>

      <button className="app-btn">Get the App</button>
    </div>
  );
}

export default Header;
