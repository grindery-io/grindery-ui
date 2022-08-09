import React from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function Tabs({
  value,
  type,
  options,
  variant,
  orientation,
  activeIndicatorColor,
  tabColor,
  activeColor,
  onChange,
}) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      {type === "text" ? (
        <MuiTabs
          TabIndicatorProps={{ style: { background: activeIndicatorColor } }}
          orientation={orientation}
          value={value}
          onChange={handleChange}
          variant={variant}
          aria-label="scrollable force tabs example"
          sx={{
            ".Mui-selected": { color: activeColor + "!important" },
            ".MuiTab-root": { color: tabColor },
          }}
        >
          {options.map((option, index) => (
            <Tab key={index} label={option} />
          ))}
        </MuiTabs>
      ) : (
        <MuiTabs
          TabIndicatorProps={{ style: { background: activeIndicatorColor } }}
          value={value}
          orientation={orientation}
          onChange={handleChange}
          variant="scrollable"
          aria-label="scrollable"
          sx={{
            ".Mui-selected": { color: activeColor + "!important" },
            ".MuiTab-root": { color: tabColor },
          }}
        >
          {options.map((option, index) => (
            <Tab key={index} icon={option} />
          ))}
        </MuiTabs>
      )}
    </ThemeProvider>
  );
}

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  orientation: PropTypes.string,
  activeIndicatorColor: PropTypes.string.isRequired,
  tabColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;
