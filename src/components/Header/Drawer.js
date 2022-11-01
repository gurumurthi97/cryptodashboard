import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
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
        <h1>Hello</h1>
      </Drawer>
    </div>
  );
}
