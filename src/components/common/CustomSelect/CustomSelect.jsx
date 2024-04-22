/* eslint-disable react/prop-types */
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const CustomSelect = ({ menuItems, initialValue }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          className="text-grey"
          color="error"
        >
          {initialValue}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label="Age"
          color="error"
          className="text-grey"
          inputProps={{
            name: "age",
            id: "demo-simple-select-standard-label",
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
