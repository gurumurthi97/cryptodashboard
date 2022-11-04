import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import DashboardWrapper from "../components/Dashboard/DashboardWrapper";
import Headers from "../components/Header";
function Dashboard() {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      if (response) {
        setData(response.data);
      } else {
        console.log("error");
      }
    });
  }, []);
  return (
    <div>
      <Headers />
      <DashboardWrapper data={data} />
    </div>
  );
}

export default Dashboard;
