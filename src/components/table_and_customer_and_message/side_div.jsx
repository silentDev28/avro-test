import React from "react";
import CustomerStat from "./customer__sat__data";
import MessageComp from "./message_comp";

export default function SideDiv() {
  return (
    <div className="col-lg col-12 side__div">
      <div className="customer__sat">
        <CustomerStat />
      </div>
      <div className="messages">
        <MessageComp />
      </div>
    </div>
  );
}
