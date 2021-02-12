import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export default function ChatHeader() {
  return (
    <div className="row">
      <div className="col-md-6 col-12">
        <div className="chart__dropdown">
          Monthly
          <span className="key__down__icon">
            <KeyboardArrowDownIcon className="arrow__icon" />
          </span>
        </div>
      </div>
      <div className="col-md-6 col-12 chart__side__header">
        <span className="chart__header___content">
          <div className="new__app__dot2"></div>
          Projects done
        </span>

        <span className="chart__header___content2">
          <div className="new__app__dot"></div>
          New applications
        </span>
      </div>
    </div>
  );
}
