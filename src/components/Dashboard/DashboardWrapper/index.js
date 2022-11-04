import React from "react";

function DashboardWrapper({ data }) {
  return (
    <div>
      {data.map((item, i) => (
        <p key={i}>{item.id}</p>
      ))}
    </div>
  );
}

export default DashboardWrapper;
