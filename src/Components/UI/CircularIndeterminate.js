import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useStyle from "../Style/DashboardStyle";

function CircularIndeterminate() {
  const classes = useStyle();
  return (
    <div className={classes.buffer}>
      <CircularProgress />
    </div>
  );
}

export default CircularIndeterminate;
