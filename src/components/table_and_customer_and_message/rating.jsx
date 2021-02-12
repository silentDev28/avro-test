import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import { withStyles } from "@material-ui/core/styles";

export default function SimpleRating({ data }) {
  const [value, setValue] = React.useState(2);
  const StyledRating = withStyles({
    iconFilled: {
      color: data.per >= 50 ? "#3B99FC" : data.per >= 30 ? "#8630D" : "#Fa5f1c",
    },
  })(Rating);
  const getPercentageAvg = (data.per / 100) * 10;

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <span className="span__start___status">
          {data.per >= 50
            ? "Positive"
            : data.per >= 30
            ? "Neutral"
            : "Negative"}
        </span>
        <span>
          <StyledRating
            name="read-only"
            defaultValue={getPercentageAvg}
            readOnly
            icon={<PersonIcon className="person__icon" />}
            max={10}
          />
        </span>
      </Box>
    </div>
  );
}
