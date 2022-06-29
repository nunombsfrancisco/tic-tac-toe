import React from "react";

import cross from "../../assets/icons/cross.png";
import circle from "../../assets/icons/circle.png";

import classes from "./Icon.module.css";

const Icon = props => {
  return (
    <img
      className={classes.icon}
      src={props.src === "cross" ? cross : circle}
      alt={props.alt}
    />
  );
};

export default Icon;
