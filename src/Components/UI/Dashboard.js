import React, { useEffect, useState } from "react";
import axios from "axios";
import useStyle from "../Style/DashboardStyle";
import MasonryComponent from "./MasonryComponent";
import CircularIndeterminate from "./CircularIndeterminate";
import apiUrls from "../ApiUrls";

function Dashboard() {
  const classes = useStyle();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(apiUrls.tenQuOtes).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={classes.container}>
      {/* <MasonryComponent data={data} /> */}
      {/* <MasonryComponent data={data} /> */}
      {!data ? <CircularIndeterminate /> : <MasonryComponent data={data} />}
      {/* <MasonryComponent data={data} /> */}
    </div>
  );
}

export default Dashboard;
