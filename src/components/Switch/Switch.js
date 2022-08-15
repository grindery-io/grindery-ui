import React from "react";
import PropTypes from "prop-types";
import { Switch as MuiSwitch } from "@mui/material";

/**
 * @example ./Example.md
 */
function Switch({ value, color, on, off, onChange }) {
  return (
    <>
      {on ? (
        <MuiSwitch
          checked={value}
          onChange={onChange}
          sx={{
            ".MuiSwitch-thumb": { background: color },
            ".MuiSwitch-track": { borderColor: color },
            ".MuiSwitch-track:after": {
              content: '"On"',
              left: "6px",
              position: "absolute",
              fontFamily: '"Roboto"',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              top: "4px",
              lineHeight: "150%",
              textAlign: "right",
              color: "#0B0D17",
            },
            ".MuiSwitch-track:before": {
              content: '"Off"',
              right: "6px",
              top: "4px",
              position: "absolute",
              fontFamily: '"Roboto"',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "150%",
              textAlign: "right",
              color: "#0B0D17",
            },
          }}
          name="check"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      ) : (
        <MuiSwitch
          checked={value}
          onChange={onChange}
          sx={{
            ".MuiSwitch-thumb": { background: color },
            ".MuiSwitch-track": { borderColor: color },
          }}
          name="check"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      )}
    </>
  );
}

Switch.propTypes = {
  value: PropTypes.bool,
  color: PropTypes.string,
  on: PropTypes.string,
  off: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  value: false,
  color: "primary",
  onChange: undefined,
};

export default Switch;
