import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";
function Grid({ coin }) {
  return (
    <a href={`/coin?${coin.id}`}>
      <div className="coin-box">
        <div className="logo-div">
          <img src={coin.image} className="logo" alt="logo of crypto coin" />
          <div className="coin-info">
            <p className="symbol">{coin.symbol}-USD</p>

            <p className="name">{coin.name}</p>
          </div>
        </div>
        <div className="data-div">
          <div
            className="chip"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
              borderColor:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            <p className="">
              {coin.price_change_percentage_24h > 0 ? (
                <span>
                  {"+" + coin.price_change_percentage_24h.toFixed(2) + "%"}
                </span>
              ) : (
                coin.price_change_percentage_24h.toFixed(2) + "%"
              )}
            </p>
          </div>
          {coin.price_change_percentage_24h > 0 ? (
            <TrendingUpIcon className="trending-icon" fontSize="2.5rem" />
          ) : (
            <TrendingDownIcon className="trending-icon re" fontSize="2.5rem" />
          )}
        </div>

        <div>
          {coin.price_change_percentage_24h > 0 ? (
            <p className="price">${coin.current_price.toLocaleString()}</p>
          ) : (
            <p className="price  price-red">
              ${coin.current_price.toLocaleString()}
            </p>
          )}
        </div>
        <p className="name">
          <span className="sub-heading">Total Volume:</span>$
          {coin.total_volume.toLocaleString()}
        </p>
        <p className="name">
          <span className="sub-heading">Market Cap:</span>$
          {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </a>
  );
}

export default Grid;
