import React from "react";
import "./card_component.css";
export default function CardComponent({ cardProps }) {
  return (
    <div
      className="col-lg col-md-6 col-12 card__cover"
      key={cardProps.id}
      style={{
        background: cardProps.background,
        marginLeft: cardProps.marginLeft,
        marginRight: cardProps.marginRight,
      }}
    >
      <div className="card__name">{cardProps.name}</div>
      <div className="card__number">{cardProps.number}</div>
      <div
        className="card__percentage"
        style={{ color: cardProps.percentColor }}
      >
        <span className="icon__span">{cardProps.icon}</span>
        {cardProps.percentage}
      </div>
      <div className="card__time">{cardProps.time}</div>
    </div>
  );
}
