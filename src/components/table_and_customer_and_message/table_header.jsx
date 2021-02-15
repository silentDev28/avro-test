import React, { useState } from "react";
import circle1 from "../../images/circle1.png";
import circle2 from "../../images/circle2.png";
import circle3 from "../../images/circle3.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export default function TableHeader({ getStatus }) {
  const [tableNav, settableNav] = useState({
    navContent: [
      {
        id: 1,
        name: "All",
        borderTopLeftRadius: "2px",
        borderBottomLeftRadius: "2px",
        borderTop: "1px solid #E3EDED",
        borderBottom: "1px solid #2979F2",
        borderLeft: "1px solid #E3EDED",
        borderRight: "1px solid #E3EDED",
        background: "#EAEFFD",
      },
      {
        id: 2,
        name: "Approved",
        icon: circle1,
        borderTop: "1px solid #E3EDED",
        borderBottom: "1px solid #E3EDED",
        borderRight: "1px solid #E3EDED",
      },
      {
        id: 3,
        name: "Pending",
        icon: circle2,
        borderTop: "1px solid #E3EDED",
        borderBottom: "1px solid #E3EDED",
        borderRight: "1px solid #E3EDED",
      },
      {
        id: 4,
        name: "Declined",
        icon: circle3,
        borderTopRightRadius: "2px",
        borderBottomRightRadius: "2px",
        borderTop: "1px solid #E3EDED",
        borderBottom: "1px solid #E3EDED",
        borderRight: "1px solid #E3EDED",
      },
    ],
  });

  const handleFilter = (status) => {
    getStatus(status);
    const getActiveRoute = tableNav.navContent.find(
      (statusName) => statusName.name === status
    );
    console.log(getActiveRoute);
    if (getActiveRoute) {
      const getStyle = tableNav.navContent.map((checkStatus) =>
        checkStatus.name === status
          ? {
              ...checkStatus,
              borderBottom: "1px solid #2979F2",
              background: "#EAEFFD",
              borderTop: "1px solid #E3EDED",

              borderRight: "1px solid #E3EDED",
            }
          : {
              ...checkStatus,
              borderBottom: "1px solid #E3EDED",
              background: "",
              borderTop: "1px solid #E3EDED",

              borderRight: "1px solid #E3EDED",
            }
      );
      settableNav({
        navContent: getStyle,
      });
    }
  };
  const gettableNav = tableNav.navContent.map((list) => (
    <li
      key={list.id}
      className="table__list"
      style={{
        borderTopLeftRadius: list.borderTopLeftRadius,
        borderBottomLeftRadius: list.borderBottomLeftRadius,
        borderTopRightRadius: list.borderTopRightRadius,
        borderBottomRightRadius: list.borderBottomRightRadius,
        borderTop: list.borderTop,
        borderBottom: list.borderBottom,
        borderLeft: list.borderLeft,
        borderRight: list.borderRight,
        background: list.background,
      }}
      onClick={() => handleFilter(list.name)}
    >
      <a>
        {list.icon ? (
          <span className="span__header__circle">
            <img src={list.icon} alt="logo" />
          </span>
        ) : (
          ""
        )}
        {list.name}
      </a>
    </li>
  ));
  return (
    <div className="table__header">
      {" "}
      <ul className="table__ul">{gettableNav} </ul>
      <span className="table__sort">
        Sort{" "}
        <span className="sort__dropdown">
          <KeyboardArrowDownIcon className="icon__sort__dropdown" />
        </span>
      </span>
    </div>
  );
}
