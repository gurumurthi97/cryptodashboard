import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function search({ handleChange }) {
  return (
    <div className="search">
      <div className="search-input">
        <SearchRoundedIcon style={{ color: "var(--white)" }} />
        <input
          type="text"
          placeholder="search"
          onChange={handleChange}
          className="input"
        />
      </div>
    </div>
  );
}

export default search;
