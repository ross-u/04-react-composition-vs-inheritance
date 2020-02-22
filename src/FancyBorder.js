import React from "react";
import "./FancyBorder.css";

const name = "Uros";
const age = 30;

function FancyBorder(props) {
  return (
    <div className="fancy">
      <h3>{props.title}</h3>
      {props.children}
      {/* Components placed inside the component tag are available via the `props.children` */}
    </div>
  );
}

export default FancyBorder;
