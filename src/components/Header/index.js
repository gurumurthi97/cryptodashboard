import React from "react";
import Button from "../Button";
import "./style.css";
function index() {
  return (
    <div className="navbar">
      <h1>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links-flex">
        <a href="/" className="links">
          <p>Home</p>
        </a>
        <a href="/search" className="links">
          <p>Search</p>
        </a>
        <a href="/about" className="links">
          <p>About us</p>
        </a>
        <a href="/dashboard" className="links">
          <p>
            <Button text="Dashboard" />
          </p>
        </a>
      </div>
    </div>
  );
}

export default index;
