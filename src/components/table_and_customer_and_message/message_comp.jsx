import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Menu from "../../images/menu.png";
import image1 from "../../images/Cregital.png";
import image2 from "../../images/compLogo2.png";
import image3 from "../../images/compLogo6.png";
import image4 from "../../images/compLogo4.png";
import image5 from "../../images/compLogo7.png";
export default function MessageComp() {
  const [listMessage, setlistMessage] = useState({
    messages: [
      {
        id: 1,
        name: "Cregital",
        submessage: "Hey, don’t forget to clear server cache!25mins ago",
        image: image1,
      },
      {
        id: 2,
        name: "Intelia",
        submessage: "Hey, don’t forget to clear server cache!25mins ago",
        image: image2,
      },
      {
        id: 3,
        name: "Talosmart",
        submessage: "Hey, don’t forget to clear server cache!25mins ago",
        image: image3,
      },
      {
        id: 4,
        name: "Imperialsoft",
        submessage: "Hey, don’t forget to clear server cache!25mins ago",
        image: image4,
      },
      {
        id: 5,
        name: "Cregital",
        submessage: "Hey, don’t forget to clear server cache!25mins ago",
        image: image5,
      },
    ],
  });
  const getListMessage = listMessage.messages.map((list) => (
    <div className="row message__list__cover">
      <div className="col-1">
        <img src={list.image} alt="logo" />
      </div>
      <div className="col-10 message__content__name">
        {list.name}
        <br></br>
        <span className="sub__message">{list.submessage}</span>
      </div>
      <div
        className="col-1"
        style={{
          position: "absolute",
          left: "86.5%",
          textAlign: "end",
        }}
      >
        <img src={Menu} alt="logo" />
      </div>
    </div>
  ));
  return (
    <div>
      <div className="message__header">
        <span className="message__header__span"> Messages</span>
        <span className="message__button">
          {" "}
          <button className="new__message__button">
            <AddIcon className="add__icon" />
            New message
          </button>
        </span>
      </div>
      <div>{getListMessage}</div>
    </div>
  );
}
