import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/LoaderComponent";
import axios from "axios";
import Linechart from "../components/Dashboard/Linechart";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
function CoinPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const [days, setDays] = useState();
  const [prices, setPrice] = useState();
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const [type, setType] = useState("prices");
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
  const [chartData, setChartdata] = useState({
    labels: [],
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
  });
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
      const API_URL = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
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

  const handleChange = async (event) => {
    setDays(event.target.value);
    const API_URL2 = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=${event.target.value}&interval=daily`;
    const price_data = await axios.get(API_URL2, {
      crossDomain: true,
    });
    if (!price_data) {
      console.log("No data ");
      return;
    }
    setPrice(price_data.data.prices);
    const priorDate_2 = new Date(
      new Date().setDate(today.getDate() - event.target.value)
    );
    var dates_2 = getDateArray(priorDate_2, today);
    setChartdata({
      labels: dates_2,
      datasets: [
        {
          data: price_data?.data?.prices?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "white",
          borderColor: " #3180e9",
          pointRadius: 0,
        },
      ],
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <span style={{ margin: 0 }}>
            Price Change in the last
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={days}
              label="Days"
              onChange={handleChange}
              sx={{
                height: "2.5rem",
                marginLeft: "0.5rem",
                color: "var(--white)",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--white)",
                },
                "& .MuiSvgIcon-root": {
                  color: "var(--white)",
                },
                "&:hover": {
                  "&& fieldset": {
                    borderColor: "#3a80e9",
                  },
                },
              }}
            >
              <MenuItem value={7}>7 Days</MenuItem>
              <MenuItem value={30}>30 Days</MenuItem>
              <MenuItem value={60}>60 Days</MenuItem>
              <MenuItem value={90}>90 Days</MenuItem>
            </Select>
          </span>
          <Linechart chartData={chartData} options={options} />
        </>
      )}
    </>
  );
}

export default CoinPage;
