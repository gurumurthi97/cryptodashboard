import React from "react";
import "./style.css";

import CircularProgress from "@mui/material/CircularProgress";
function Loader() {
  return (
    <div className="loader-wrapper">
      <CircularProgress />
    </div>
  );
}

export default Loader;
