/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const CustomSelect = ({ menuItems, initialValue, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        className="lg:min-w-48 min-w-40"
        sx={{ m: 1 }}
      >
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
            <MenuItem
              key={item.value}
              value={item.value}
              className="capitalize"
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
