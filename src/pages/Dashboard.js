import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import DashboardWrapper from "../components/Dashboard/DashboardWrapper";
import Header from "../components/Header";
import Loader from "../components/LoaderComponent";
import Search from "../components/Dashboard/Search";
function Dashboard() {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const filteredCoins = data?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      if (response.data) {
        setData(response.data);
        setLoading(false);
      } else {
        console.log("error");
      }
    });
  }, []);
  return (
    <>
      {loading && !filteredCoins ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Search handleChange={handleChange} />
          <DashboardWrapper data={filteredCoins} />
        </>
      )}
    </>
  );
}

export default Dashboard;
