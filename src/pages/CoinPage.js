import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header/Index";
import Loader from "../components/LoaderComponent";
import axios from "axios";
import Linechart from "../components/Dashboard/Linechart";
import Button from "../components/Button";
import SelectLabels from "../components/Dashboard/SelectLables/Index";

function CoinPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const [prices, setPrice] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingChat, setLoadingChat] = useState(true);
  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - 30));
  const getDateArray = (start, end) => {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
      // arr.push(new Date(dt).getDay() + "/" + (new Date(dt).getMonth() + 1));
      arr.push(new Date(dt).getDate() + "/" + (new Date(dt).getMonth() + 1));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  useEffect(() => {
    if (searchParams) {
      const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`;
      axios.get(API_URL.slice(0, -1)).then((response) => {
        if (response.data) {
          setData(response.data);
          setLoading(false);
        } else {
          alert("Hai");
        }
      });
    }
  }, [searchParams]);
  //https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily
  useEffect(() => {
    if (data) {
      const API_URL = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=30&interval=daily`;
      axios.get(API_URL).then((response) => {
        if (response.data) {
          setPrice(response.data.prices);
          setLoadingChat(false);
        } else {
          alert("chart data not found");
        }
      });
    }
  }, [data]);
  const chartData = {
    // labels: prices?.map((data) => data[0]),
    labels: getDateArray(priorDate, today),
    datasets: [
      {
        data: prices?.map((data) => data[1]),
        borderWidth: 2,
        fill: false,
        tension: 0.25,
        backgroundColor: "white",
        borderColor: " #3180e9",
        pointRadius: 0,
      },
    ],
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <SelectLabels />
          <Linechart chartData={chartData} options={options} />
        </>
      )}
    </>
  );
}

export default CoinPage;
