import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
function Linechart({ chartData, options }) {
  return (
    <div>
      <Line data={chartData} options={options}></Line>
    </div>
  );
}

export default Linechart;
