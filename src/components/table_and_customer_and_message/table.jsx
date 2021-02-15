import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeader from "./table_header";
import image1 from "../../images/Cregital.png";
import image2 from "../../images/compLogo2.png";
import image3 from "../../images/compLogo3.png";
import image4 from "../../images/compLogo4.png";
import image5 from "../../images/compLogo5.png";
import image6 from "../../images/compLogo6.png";
import image7 from "../../images/compLogo7.png";
import image8 from "../../images/compLogo8.png";
import image9 from "../../images/compLogo9.png";
import image10 from "../../images/compLogo10.png";
import circle1 from "../../images/circle1.png";
import circle2 from "../../images/circle2.png";
import circle3 from "../../images/circle3.png";

import Checkbox from "@material-ui/core/Checkbox";
import PaginationRounded from "./table_pagination";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [id, setid] = React.useState({
    id: "",
    check: false,
  });
  const handleChange = (event, id) => {
    setid({ id: id, check: event.target.checked });
  };
  const handleChangeAll = (value) => {
    setChecked(value);
  };
  console.log(id);
  const [tableContent, settableContent] = useState({
    records: [
      {
        id: 2,
        image: image1,
        name: "Cregital",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Approved",
        status_icon: circle1,
      },
      {
        id: 3,
        image: image2,
        name: "Intelia",
        size: "102",
        year: 3,
        rev: "NGN 1,000,000",
        status: "Approved",
        status_icon: circle1,
      },
      {
        id: 4,
        image: image3,
        name: "Optisoft",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Approved",
        status_icon: circle1,
      },
      {
        id: 5,
        image: image4,
        name: "Imperialsoft",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Declined",
        status_icon: circle3,
      },
      {
        id: 6,
        image: image5,
        name: "AItechma",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Pending",
        status_icon: circle2,
      },
      {
        id: 7,
        image: image6,
        name: "Talosmart",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Declined",
        status_icon: circle3,
      },
      {
        id: 8,
        image: image7,
        name: "Atlassian",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Declined",
        status_icon: circle3,
      },
      {
        id: 9,
        image: image8,
        name: "Weevil Company",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Approved",
        status_icon: circle1,
      },
      {
        id: 10,
        image: image9,
        name: "CloudNetIQ Labs",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Approved",
        status_icon: circle1,
      },
      {
        id: 11,
        image: image10,
        name: "Enyata",
        size: 102,
        year: 3,
        rev: "NGN 1,000,000",
        status: "Approved",
        status_icon: circle1,
      },
    ],
  });
  const [getNewFilterState, setgetNewFilterState] = useState({
    records: tableContent.records,
  });
  const getStatus = (status) => {
    console.log(status);
    const getStatusFilter = tableContent.records.filter(
      (state) => state.status === status
    );
    if (status === "All") {
      setgetNewFilterState({
        records: tableContent.records,
      });
    } else {
      setgetNewFilterState({
        records: getStatusFilter,
      });
    }
  };
  return (
    <TableContainer component={Paper}>
      <TableHeader getStatus={getStatus} />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
                onChange={(evt) => handleChangeAll(evt.target.checked)}
                className="checkbox__icon"
              />
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Company name</TableCell>
            <TableCell align="left">Company size</TableCell>
            <TableCell align="left">Yrs of inc.</TableCell>
            <TableCell align="left">Revenue</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getNewFilterState.records.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {id.id === row.id ? (
                  <Checkbox
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                    onChange={(evt) => handleChange(evt, row.id)}
                    className="checkbox__icon"
                    checked={checked ? checked : id.check}
                  />
                ) : (
                  <Checkbox
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                    onChange={(evt) => handleChange(evt, row.id)}
                    className="checkbox__icon"
                    checked={checked}
                  />
                )}
              </TableCell>
              <TableCell align="left">
                {" "}
                <img src={row.image} alt=""></img>
              </TableCell>
              <TableCell align="left"> {row.name}</TableCell>
              <TableCell align="left">{row.size}</TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.rev}</TableCell>
              <TableCell align="left">
                {row.status === "Approved" ? (
                  <div className="approved">
                    <span className="status__icon">
                      <img src={row.status_icon} alt="icon" />
                    </span>
                    {row.status}
                  </div>
                ) : row.status === "Pending" ? (
                  <div className="pending">
                    <span className="status__icon">
                      <img src={row.status_icon} alt="icon" />
                    </span>
                    {row.status}
                  </div>
                ) : (
                  <div className="declined">
                    <span className="status__icon">
                      <img src={row.status_icon} alt="icon" />
                    </span>
                    {row.status}
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pagination__div">
        <PaginationRounded />
      </div>
    </TableContainer>
  );
}
