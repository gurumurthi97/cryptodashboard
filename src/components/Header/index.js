import React from "react";
import Button from "../Button";
import Drawer from "./Drawer";
import "./style.css";
function index() {
  return (
    <div className="navbar">
      <h1 className="heading">
        <a href="/" style={{ textDecoration: "none", color: "var(--white)" }}>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </a>
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
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
  );
}

export default index;
