import React from "react";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";
import { useState, useEffect } from "react";
function List({ coin }) {
  const [volume, setVolume] = useState(coin.total_volume.toString());
  useEffect(() => {
    if (volume) {
      console.log("volume>>>", volume);
      if (volume >= 1000 && volume < 1000000) {
        setVolume(
          volume.toString().slice(0, -3) +
            "." +
            volume.toString().slice(-3, -1) +
            "K"
        );
      } else if (volume >= 1000000 && volume < 1000000000) {
        setVolume(
          volume.toString().slice(0, -6) +
            "." +
            volume.toString().slice(-6, -4) +
            "M"
        );
      } else if (volume >= 1000000000) {
        setVolume(
          volume.toString().slice(0, -9) +
            "." +
            volume.toString().slice(-9, -7) +
            "B"
        );
      }
    }
  }, [volume]);
  return (
    <a href={`/coin?${coin.id}`}>
      <tr className="list-wrapper">
        <td className="image-td ">
          <img
            src={coin.image}
            className="list-logo"
            alt="logo of crypto coin"
          />
        </td>
        <td className="coin-info ">
          <p className="symbol td-text">{coin.symbol}-USD</p>
          <p className="name td-text">{coin.name}</p>
        </td>
        <td className="data-div td-chip-flex ">
          <div
            className="chip td-text "
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
            <p className="td-text ">
              {coin.price_change_percentage_24h > 0 ? (
                <span>
                  {"+" + coin.price_change_percentage_24h.toFixed(2) + "%"}
                </span>
              ) : (
                coin.price_change_percentage_24h.toFixed(2) + "%"
              )}
            </p>
          </div>
          <td className="td-chip-flex td-icon">
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon className="trending-icon" fontSize="2.5rem" />
            ) : (
              <TrendingDownIcon
                className="trending-icon re"
                fontSize="2.5rem"
              />
            )}
          </td>
        </td>

        <td>
          {coin.price_change_percentage_24h > 0 ? (
            <p className="price td-text">
              ${coin.current_price.toLocaleString()}
            </p>
          ) : (
            <p className="price  price-red td-text">
              ${coin.current_price.toLocaleString()}
            </p>
          )}
        </td>
        <td>
          <td className="name2 td-text td-volume">
            $ {coin.total_volume.toLocaleString()}
          </td>
          <td className="name2 td-text td-volume-mobile">
            $ {volume.toLocaleString()}
          </td>
        </td>
        <td>
          <td className="name2 td-text td-icon">
            $ {coin.market_cap.toLocaleString()}
          </td>
        </td>
      </tr>
    </a>
  );
}

export default List;
