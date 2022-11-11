import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels() {
  const [track, setTrack] = React.useState("");

  const handleChange = (event) => {
    setTrack(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, color: "blue" }}>
        <InputLabel id="demo-simple-select-helper-label">Track</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={track}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>24 Hours</MenuItem>
          <MenuItem value={20}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
