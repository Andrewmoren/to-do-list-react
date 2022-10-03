import React from "react";
import classNames from "classnames";

import "./badge.scss";

const Bagge = ({ color, onClick, className }) => {
  return (
    <i
      onClick={onClick}
      className={classNames("badge", { [`badge--${color}`]: color }, className)}
    ></i>
  );
};

export default Bagge;
