import logo from "./logo.svg";
import { Link, Route } from "react-router-dom";
import { SIGGY_LOGO_URL, SWIGGY_FRUIT_URL } from "./constants";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <img src={SIGGY_LOGO_URL} alt="Swiggy Logo" className="swiggy-logo" />
        <button className="login-btn">Sign in </button>
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
      <div>
        <img
          src={SWIGGY_FRUIT_URL}
          alt="Swiggy Logo"
          className="swiggy-logo-fruit"
        />
        <div className="centered-text">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
      </div>
    </div>
  );
}

export default App;
