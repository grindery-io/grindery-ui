import React, { useCallback, useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Icon,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function TextInput({
  placeholder,
  size,
  onChange,
  value,
  label,
  required,
  texthelper,
  type,
  icon,
  tooltip,
  readonly,
}) {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const changeValue = useCallback(
    (val) => {
      onChange(val);
    },
    [onChange]
  );

  useEffect(() => {
    changeValue(currentValue);
  }, [currentValue, changeValue]);

  return (
    <Box component={"div"} sx={{ marginBottom: "20px" }}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          "& > .required ": {
            marginLeft: "auto",
            fontSize: "14px",
            color: "#898989",
          },
        }}
      >
        {label ? <Typography variant="body2">{label}</Typography> : ""}
        {tooltip ? (
          <Tooltip title={tooltip} placement="top" arrow>
            <Icon
              sx={{
                color: "#898989",
                fontSize: "14px",
                ".": { backgroundColor: "#000" },
                marginTop: "3px",
                marginLeft: "6px",
              }}
            >
              error
            </Icon>
          </Tooltip>
        ) : (
          ""
        )}
        {required ? (
          <Typography variant="p" className="required">
            {"(required)"}
          </Typography>
        ) : (
          ""
        )}
      </Box>
      {type === "text" ? (
        <TextField
          fullWidth
          placeholder={placeholder}
          className={
            currentValue !== "" && !readonly
              ? "custom-text-input input-filled"
              : "custom-text-input"
          }
          size={size}
          onChange={handleChange}
          value={currentValue}
          disabled={readonly}
        />
      ) : type === "textarea" ? (
        <TextField
          placeholder={placeholder}
          size={size}
          onChange={handleChange}
          value={currentValue}
          multiline
          rows={3}
          maxRows={4}
          className="custom-text-input"
          disabled={readonly}
        />
      ) : (
        <TextField
          placeholder={placeholder}
          className={
            currentValue !== "" && !readonly
              ? "custom-text-input input-filled"
              : "custom-text-input"
          }
          sx={{
            background: "#F4F5F7",
            borderRadius: "5px",
            ".MuiOutlinedInput-root": {
              height: "auto",
              marginTop: "0px",
              padding: "0px 15px",
            },
            input: {
              padding: "10px 15px 10px 15px!important",
              background: "none!important",
              border: "none!important",
            },
          }}
          size={size}
          onChange={handleChange}
          value={currentValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>{icon}</Icon>
              </InputAdornment>
            ),
          }}
          disabled={readonly}
        />
      )}
      {texthelper ? (
        <Typography variant="span" className="texthelper">
          {texthelper}
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  readonly: PropTypes.bool,
};

TextInput.defaultProps = {
  placeholder: "0x...",
  size: "large",
  onChange: undefined,
  value: "",
  type: "text",
  label: "",
};

export default TextInput;
