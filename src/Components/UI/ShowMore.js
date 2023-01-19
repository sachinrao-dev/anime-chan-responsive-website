import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicPagination from "./BasicPagination";
import apiUrls from "../ApiUrls";

function ShowMore() {
  const [paginationData, setPaginationData] = useState();
  useEffect(() => {
    axios.get(apiUrls.paginationUrl).then((res) => {
      setPaginationData(res.data);
    });
  }, []);
  console.log(paginationData);
  return (
    <div>
      <h1>Hello guys</h1>
      <BasicPagination />
    </div>
  );
}

export default ShowMore;
