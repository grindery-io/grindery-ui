import React from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/system";

const SimpleSelectWrapper = styled("div")({
  "& .MuiOutlinedInput-root": {
    background: "none",
    border: "0px",
    padding: "0 !important",
    "&:hover": {
      background: "#F4F5F7",
    },
    "& fieldset": {
      border: "0px",
    },
    "& > div": {
      paddingTop: "10px",
      paddingBottom: "9px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "150%",
      color: "#0B0D17",
    },
    "& > .MuiSvgIcon-root": {
      fill: "#898989",
    },
  },

  "& .MuiFormControl-root": {
    width: "auto",
    "& > label": {
      color: "#898989!important",
      left: "-5px",
      top: "-10px",
    },
  },
  "& .MuiList-root": {
    "& > li": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "150%",
      color: "#141416",
    },
    "& > li:hover": {
      background: "#FDFBFF",
    },
    "& > .Mui-selected": {
      background: "#FDFBFF",
    },
    "& > .Mui-selected:hover": {
      background: "#FDFBFF",
    },
  },
});

/**
 *
 * @example ./Example.md
 */
function SelectSimple({ value, options, placeholder, onChange }) {
  return (
    <SimpleSelectWrapper>
      <FormControl fullWidth>
        {value === "" ? (
          <InputLabel id="simple-select-label" shrink={false}>
            {placeholder}
          </InputLabel>
        ) : (
          ""
        )}
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          className={value === "" ? "" : "select-simple-value"}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option.value}
              value={option.value}
              className="simple-select-item"
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SimpleSelectWrapper>
  );
}

SelectSimple.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectSimple;
