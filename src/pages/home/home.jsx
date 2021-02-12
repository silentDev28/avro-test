import React, { useState } from "react";
import "./home.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CardComponent from "../../components/cardFolder/card_component";
import ChatCover from "../../components/chart/chatCover";
import TableAndSideCover from "../../components/table_and_customer_and_message/table_and_side_cover";
export default function Home() {
  const [cardContents, setcardContents] = useState({
    contents: [
      {
        id: 1,
        name: "Registered companies",
        number: 849,
        percentage: "5.25%",
        time: "Since last week",
        icon: <ArrowUpwardIcon className="high__icon" />,
        marginLeft: "0px",
        marginRight: "15px",
        background: "#FDECE2",
        percentColor: "#50b83c",
      },
      {
        id: 2,
        name: "New application",
        number: 508,
        percentage: "1.23%",
        time: "Since last week",
        icon: <ArrowDownwardIcon className="low__icon" />,
        marginLeft: "15px",
        marginRight: "15px",
        background: "#EAEFFD",
        percentColor: "#F52D56",
      },
      {
        id: 3,
        name: "Total project done",
        number: 849,
        percentage: "1.22%",
        time: "Since last week",
        icon: <ArrowDownwardIcon className="low__icon" />,
        background: "#FFF3C5",
        marginLeft: "15px",
        marginRight: "15px",
        percentColor: "#F52D56",
      },
      {
        id: 4,
        name: "New projects",
        number: 38,
        percentage: "5.25%",
        time: "Since last week",
        icon: <ArrowUpwardIcon className="high__icon" />,
        background: "#E7F5FE",
        marginLeft: "15px",
        marginRight: "0px",
        percentColor: "#50b83c",
      },
    ],
  });
  const renderCardContents = cardContents.contents.map((list) => (
    <CardComponent cardProps={{ ...list }} key={list.id} />
  ));
  return (
    <div className="home__page">
      <h4 className="header__overview">Overview</h4>
      <div className="home__card__cover row m-0">{renderCardContents}</div>
      <ChatCover />
      <TableAndSideCover />
    </div>
  );
}
