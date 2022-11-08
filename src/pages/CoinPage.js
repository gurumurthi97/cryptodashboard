import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/LoaderComponent";
import axios from "axios";
function CoinPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const [prices, setPrice] = useState();
  const [loading, setLoading] = useState(true);

  const [loadingChat, setLoadingChat] = useState(true);
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
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <p>git </p>
          {prices?.map((item, i) => (
           <>
           <p>i</p>
            <p>{item[1]}</p>
</>
          ))}
        </>
      )}
    </div>
  );
}

export default CoinPage;
