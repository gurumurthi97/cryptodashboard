import Switch from "./Switch";
import Button from "../Button";
import React from "react";
import Drawer from "./Drawer";
import "./style.css";
import { useState, useEffect } from "react";

function Index() {
  // const [theme, settheme] = useState(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const changetheme = () => {
    if (theme === "light-theme") {
      localStorage.setItem("theme", "dark-theme");
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", "light-theme");
      setTheme(localStorage.getItem("theme"));
    }
  };

  useEffect(() => {
    document.body.className = theme;
    console.log(theme);
  }, [theme]);

  return (
    <div className="navbar">
      <h1 className="heading">
        <a href="/" style={{ textDecoration: "none", color: "var(--white)" }}>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </a>
      </h1>
      <div onClick={changetheme} className="toggle">
        <Switch onClick={changetheme} />
      </div>
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

export default Index;
