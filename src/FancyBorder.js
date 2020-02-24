import React from "react";
import "./FancyBorder.css";

function FancyBorder(props) {
  return (
    <div className="fancy">
      <h3> {props.title} </h3>
      {props.children}
      {props.bottom}
    </div>
  );
}

export default FancyBorder;

// rfce + Tab
