import React from "react";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import useStyle from "../Style/DashboardStyle";
import Card from "./Card";

function MasonryComponent({ data }) {
  const classes = useStyle();
  return (
    <Box className={classes.boxModal}>
      <Masonry columns={4} spacing={2}>
        <Card data={data} />
      </Masonry>
    </Box>
  );
}

MasonryComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default MasonryComponent;
