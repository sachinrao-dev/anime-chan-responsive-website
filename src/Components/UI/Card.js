/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function CardComponent({ data }) {
  const [isShowMore, setIsShowMore] = useState(-1);
  return (
    <>
      {data?.map((item, index) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.anime}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.character}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {isShowMore === index ? item.quote : item.quote.substring(0, 50)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                if (isShowMore === index) {
                  return setIsShowMore(-1);
                }
                return setIsShowMore(index);
              }}
            >
              Show More
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

CardComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CardComponent;
