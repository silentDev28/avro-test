import React from "react";
import SideDiv from "./side_div";
import TableDiv from "./table_div";
import "./table.css";
export default function TableAndSideCover() {
  return (
    <div className="row m-0">
      <TableDiv />
      <SideDiv />
    </div>
  );
}
