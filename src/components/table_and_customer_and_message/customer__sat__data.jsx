import React, { useState } from "react";
import CustomizedRatings from "./rating";

export default function CustomerStat() {
  const [percentage, setpercentage] = useState({
    percentageRecord: [
      { id: 1, per: 60 },
      { id: 2, per: 30 },
      { id: 3, per: 20 },
    ],
  });

  return (
    <div>
      <div className="sat__header">
        Customer Satisfation<br></br>
        <span className="sub__sat">Across help desk this month</span>
      </div>
      <div className="count">
        Response received<br></br>
        <span className="sub__count">390</span>
      </div>
      <div>
        {percentage.percentageRecord.map((data) => (
          <span className="rating__span">
            <span>
              <CustomizedRatings data={{ ...data }} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
