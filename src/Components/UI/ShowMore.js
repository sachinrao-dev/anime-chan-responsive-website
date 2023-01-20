/* eslint-disable react/no-unstable-nested-components */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import CircularIndeterminate from "./CircularIndeterminate";
import useStyle from "../Style/DashboardStyle";

function ShowMore() {
  const [paginationData, setPaginationData] = useState(null);
  const [params] = useSearchParams();
  const page = params?.get("page");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const [paginationPage, setPaginationPage] = useState(page);
  const title = urlParams.get("title");
  const navigate = useNavigate();
  useEffect(() => {
    setPaginationPage(page);
    axios
      .get(
        `https://animechan.vercel.app/api/quotes/anime?title=${title}&page=${
          page || "1"
        }`,
      )
      .then((res) => {
        setPaginationData(res.data);
      });
  }, [page, title]);
  const handleClick = (event, value) => {
    navigate(`/showMore?title=${title}&page=${value}`);
    // setPaginationPage(value);
  };
  console.log(paginationPage, "page number");
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {!paginationData ? (
        <CircularIndeterminate />
      ) : (
        <Box className={classes.boxModal}>
          <Masonry className={classes.masonryModal}>
            {paginationData.map((item) => (
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item?.character}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {item.quote.substring(0, 50)}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Masonry>
        </Box>
      )}
      <div className={classes.paginationContainer}>
        <Pagination
          count={10}
          onChange={handleClick}
          paginationPage={paginationPage}
          page={parseInt(paginationPage, 10)}
          renderItem={(item) => (
            <PaginationItem
              components={{
                next: () => (
                  <button
                    type="button"
                  >
                    Next
                  </button>
                ),
                previous: () => (
                  <button
                    type="button"
                  >
                    Previous
                  </button>
                ),
              }}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
}

export default ShowMore;
