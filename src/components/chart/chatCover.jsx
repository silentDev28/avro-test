import React from "react";
import ChatHeader from "./chart_header";
import "./chart.css";
import LineChat from "./line_chat";
export default function ChatCover() {
  return (
    <div className="chat__cover">
      <ChatHeader />
      <LineChat />
    </div>
  );
}
