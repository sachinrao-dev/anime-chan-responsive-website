import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useStyle from "../Style/DashboardStyle";

function BasicPagination() {
  const classes = useStyle();
  return (
    <Stack spacing={2} className={classes.pagination}>
      <Pagination count={10} />
    </Stack>
  );
}

export default BasicPagination;
