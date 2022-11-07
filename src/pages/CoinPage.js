import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
function CoinPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  useEffect(() => {
    if (searchParams) {
      const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`;
      axios.get(API_URL.slice(0, -1)).then((response) => {
        if (response.data) {
          setData(response.data);
        } else {
          alert("Hai");
        }
      });
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default CoinPage;
