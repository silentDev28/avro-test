import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
export default function Navbar() {
  return (
    <div className="nav__header">
      <span className="search__icon__span">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="col-md-4 col-7 input__field"
        placeholder="search"
      />
      <span className="notification__badge">
        <span className="notification__icon">
          <div className="dot__red"></div>
          <NotificationsIcon className="not__icon" />
        </span>
      </span>
      <span className="avarter__span">
        <div className="avarter__image__cover"></div>
      </span>
    </div>
  );
}
