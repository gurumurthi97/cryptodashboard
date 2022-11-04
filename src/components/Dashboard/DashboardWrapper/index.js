import * as React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Grid from "../Grid";
// import List from "../List";
import "./style.css";
function DashboardWrapper({ data }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "white",
    fontWeight: 600,
    fontFamily: "inter",
    textTransform: "capitalize",
  };
  return (
    <div>
      <TabContext value={value}>
        <TabList value={value} variant="fullWidth" onChange={handleChange}>
          <Tab label="Grid" sx={style} />
          <Tab label="List" sx={style} />
        </TabList>
        <TabPanel value={0}>
          <div className="grid-flex">
            {data.map((coin, i) => (
              <Grid coin={coin} key={i} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={1}>List</TabPanel>
      </TabContext>
    </div>
  );
}

export default DashboardWrapper;