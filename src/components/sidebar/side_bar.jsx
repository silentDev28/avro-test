import React, { useState } from "react";
import "./side_bar.css";
import Home from "../../images/home.png";
import Group from "../../images/group-of-people.png";
import Project from "../../images/tag.png";
import Messages from "../../images/chat.png";
import Settings from "../../images/settings.png";
export default function SideBar() {
  const [routes, setroutes] = useState({
    appRoute: [
      {
        id: 1,
        name: "Dashboard",
        icon: Home,
        color: "#2979F2",
        background: "#EAEFFD",
        borderRight: "1px solid #2979F2",
        marginBottom: "12px",
      },
      { id: 2, name: "Companies", icon: Group, marginBottom: "12px" },
      { id: 3, name: "Projects", icon: Project, marginBottom: "12px" },
      { id: 4, name: "Messages", icon: Messages, marginBottom: "662px" },
      { id: 5, name: "Settings", icon: Settings },
    ],
  });
  const routerLists = routes.appRoute.map((list) => (
    <li
      className="route__lists"
      key={list.id}
      style={{
        background: list.background ? list.background : "",
        borderRight: list.borderRight ? list.borderRight : "",
        marginBottom: list.marginBottom ? list.marginBottom : "",
      }}
    >
      <a
        className="route__a__tag"
        style={{ color: list.color ? list.color : "" }}
      >
        <span className="icon__span">
          <img src={list.icon} alt="icon" className="icon__image"></img>
        </span>{" "}
        {list.name}
      </a>
    </li>
  ));
  return (
    <div className="col-md-2 col-12 side__bar__cover">
      <ul className="route__ul">{routerLists}</ul>
    </div>
  );
}
