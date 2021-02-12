import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avater from "../../images/avater_image.png";
export default function Navbar() {
  return (
    <div className="nav__header">
      {/* <span className="search__icon__span">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="col-md-4 col-7 input__field"
        placeholder="search"
      /> */}
      <div class="input-group mb-3 col-md-6 col-6 input__cover__new">
        <div class="input-group-prepend">
          <span class="input-group-text search__icon" id="basic-addon1">
            <SearchIcon className="icon__search__image" />
          </span>
        </div>
        <input
          type="text"
          class="form-control input__field"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <span className="notification__badge">
        <span className="notification__icon">
          <div className="dot__red"></div>
          <NotificationsIcon className="not__icon" />
        </span>
      </span>
      <span className="avarter__span">
        <div className="avarter__image__cover">
          <img src={Avater} alt="image_logo" className="avater__image" />
        </div>
      </span>
    </div>
  );
}
