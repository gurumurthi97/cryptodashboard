// import React from "react";
// import "./style.css";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// function Linechart({ chartData, options }) {
//   return (
//     <div>
//       <Line data={chartData} options={options}></Line>
//     </div>
//   );
// }

// export default Linechart;
import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js";

function LineChart({ chartData, options }) {
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
