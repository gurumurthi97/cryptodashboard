import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
function Linechart({ chartData, options }) {
  return (
    <div>
      <Line data={chartData} options={options}></Line>
    </div>
  );
}

export default Linechart;