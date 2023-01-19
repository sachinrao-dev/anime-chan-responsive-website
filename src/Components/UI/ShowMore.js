/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import apiUrls from "../ApiUrls";

function ShowMore() {
  const [params] = useSearchParams();
  const page = params.get("page");
  console.log(page);

  const [paginationData, setPaginationData] = useState();
  useEffect(() => {
    axios.get(apiUrls.paginationUrl).then((res) => {
      setPaginationData(res.data);
    });
  }, []);
  console.log(paginationData);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default ShowMore;
