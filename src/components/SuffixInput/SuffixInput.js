import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/system";

const SuffixInputWrapper = styled("div")({
  "& .MuiTextField-root": {
    background: "#F4F5F7",
    borderRadius: "5px",
    border: "1px solid #DCDCDC",
    "& fieldset": {
      border: "0px",
    },
    height: "34px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    alignItems: "center",
    color: "#0B0D17",
  },

  "& .MuiInputAdornment-root": {
    "& .MuiTypography-root": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "150%",
      alignItems: "center",
      color: "#898989",
    },
  },
  "& .MuiOutlinedInput-root": {
    border: "0px",
    padding: "5px 10px",
    marginTop: "6px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "0px",
    },
    "& input": {
      padding: "0px",
    },
  },
});

/**
 * @example ./Example.md
 */
function SuffixInput({ value, placeholder, suffix, onChange }) {
  return (
    <SuffixInputWrapper>
      <TextField
        id="input-with-suffix"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{suffix}</InputAdornment>
          ),
        }}
      />
    </SuffixInputWrapper>
  );
}

SuffixInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SuffixInput;
