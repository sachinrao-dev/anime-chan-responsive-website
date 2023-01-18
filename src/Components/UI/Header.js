import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "../Style/DashboardStyle";

function Header() {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <NavLink>AnimeChan</NavLink>
    </div>
  );
}

export default Header;
