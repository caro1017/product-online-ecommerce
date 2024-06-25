/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import "react-international-phone";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

export const CountryPhoneInput = ({
  onChange,
  required,
  name,
  type,
  error,
  helperText,
  icon,
  label,
  validationRules,
  ...restProps
}) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "co",
      countries: defaultCountries,
      onChange: (data) => {
        onChange({
          phone: data.phone,
          country: data.country,
          dialCode: data.dialCode,
        });
      },
    });

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    inputRef.current.focus();
  };

  return (
    <TextField
      variant="standard"
      label={label}
      value={inputValue}
      color="error"
      className="mb-4"
      name={name}
      required={required}
      type={type}
      error={error}
      helperText={helperText}
      fullWidth
      inputProps={{
        style: {
          color: "#D0665B",
          fontWeight: 300,
        },
      }}
      InputLabelProps={{
        style: {
          color: "#D0665B",
          fontSize: "14px",
          fontWeight: 400,
          opacity: 0.5,
        },
      }}
      onChange={handlePhoneValueChange}
      inputRef={inputRef}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ marginRight: "2px", marginLeft: "-8px" }}
          >
            <Select
              MenuProps={{
                style: {
                  height: "300px",
                  width: "360px",
                  top: "10px",
                  left: "-34px",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
              sx={{
                width: "max-content",
                fieldset: {
                  display: "none",
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: "block",
                  },
                },
                ".MuiSelect-select": {
                  padding: "8px",
                  paddingRight: "24px !important",
                },
                svg: {
                  right: 0,
                },
              }}
              value={country.iso2}
              onChange={handleCountryChange}
              renderValue={(value) => (
                <FlagImage iso2={value} className="flex w-5" />
              )}
            >
              {defaultCountries.map((c) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagImage iso2={country.iso2} className="w-5" />
                    <Typography className="mx-3 text-sm">
                      {country.name}
                    </Typography>
                    <Typography className="text-grey text-sm">
                      +{country.dialCode}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton size="small">
              <div className="text-salmon">{icon}</div>
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...validationRules}
      {...restProps}
    />
  );
};
