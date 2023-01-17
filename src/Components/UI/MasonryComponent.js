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
      <Masonry className={classes.masonryModal}>
        <Card data={data} />
        {/* {data?.map((item) => (
          <div className={classes.item}>
            <div className={classes.description}>
              <p className={classes.heading}>Anime: </p>
              <p className={classes.headingDescription}>{item.anime}</p>
            </div>
            <div className={classes.description}>
              <p className={classes.heading}>Character: </p>
              <p className={classes.headingDescription}>{item.character}</p>
            </div>
            <div className={classes.description}>
              <p className={classes.heading}>Quote: </p>
              <p className={classes.headingDescription}>{item.quote}</p>
            </div>
          </div>
        ))} */}
      </Masonry>
    </Box>
  );
}

MasonryComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default MasonryComponent;
