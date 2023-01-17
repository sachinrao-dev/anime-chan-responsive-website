/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import useStyle from "../Style/DashboardStyle";
import MasonryComponent from "./MasonryComponent";
import apiUrls from "../ApiUrls";

function Dashboard() {
  const classes = useStyle();
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(apiUrls.tenQuOtes).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={classes.container}>
      <MasonryComponent data={data} />
    </div>
  );
}

export default Dashboard;
