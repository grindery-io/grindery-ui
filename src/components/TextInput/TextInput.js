import React, { useCallback, useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Icon,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
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
    <ThemeProvider theme={theme}>
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
          {label ? <Typography variant="p">{label}</Typography> : ""}
          {tooltip ? (
            <Tooltip title={tooltip} placement="top" arrow>
              <Icon
                sx={{
                  color: "#898989",
                  fontSize: "18px",
                  ".": { backgroundColor: "#000" },
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
            className={currentValue !== "" ? "input-filled" : ""}
            size={size}
            onChange={handleChange}
            value={currentValue}
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
          />
        ) : (
          <TextField
            placeholder={placeholder}
            classes={{ root: currentValue !== "" ? "input-filled" : "" }}
            sx={{
              background: "#F4F5F7",
              borderRadius: "5px",
              ".Mui-focused": {
                boxShadow: "0px 0px 0px 2px #8C30F5!important",
              },
              ".MuiOutlinedInput-root": {
                height: "auto",
                marginTop: "0px",
                padding: "0px 15px",
                border: "1px solid #DCDCDC",
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
    </ThemeProvider>
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
