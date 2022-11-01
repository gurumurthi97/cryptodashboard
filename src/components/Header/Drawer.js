import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Button from "../Button";
import "./style.css";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  // const toggleDrawer = (open) => (event) => {
  //   setOpen(open);
  // };

  return (
    <div>
      <div className="menu-button">
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon style={{ color: "var(--white)" }} />
        </IconButton>
      </div>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-div">
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
            <p>Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
