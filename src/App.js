import {
  SIGGY_LOGO_URL,
  SWIGGY_FRUIT_URL,
  SWIGGY_SUCHI_URL,
  FOOD_DELIVERY_FORM_URL,
  INSTA_MART_FORM_URL,
  DINE_OUT_FORM_URL,
} from "./constants";
import "./App.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function App() {
  return (
    <div className="container">
      <div>
        <img
          src={SWIGGY_FRUIT_URL}
          alt="Swiggy Logo"
          className="swiggy-logo-fruit"
        />
        <img
          src={SWIGGY_SUCHI_URL}
          alt="Swiggy Logo"
          className="swiggy-logo-suchi"
        />
        <div className="centered-text">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        <div>
          <input
            className="delivery-location"
            type="text"
            placeholder="Enter Your Delivery Location"
          ></input>

          <input
            className="search-restaurant"
            type="text"
            placeholder="Search for restaurant, item or more"
          ></input>

          <FaMapMarkerAlt className="location-icon" />
        </div>
      </div>
      <div>
        <img
          src={FOOD_DELIVERY_FORM_URL}
          alt="1"
          className="food-delivery-form"
        />
        <img src={INSTA_MART_FORM_URL} alt="1" className="insta-mart-form" />
        <img src={DINE_OUT_FORM_URL} alt="1" className="dine-out-form" />
      </div>
    </div>
  );
}

export default App;
