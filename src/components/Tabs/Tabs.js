import React from "react";
import { Tabs as MuiTabs, Tab, useTheme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <>
      {type === "text" ? (
        <MuiTabs
          TabIndicatorProps={{
            style: {
              background: activeIndicatorColor || theme.palette.primary.main,
            },
          }}
          orientation={orientation}
          value={value}
          onChange={handleChange}
          variant={variant}
          aria-label="scrollable force tabs example"
          sx={{
            ".Mui-selected": {
              color: activeColor || theme.palette.primary.main + "!important",
            },
            ".MuiTab-root": { color: tabColor },
          }}
        >
          {options.map((option, index) => (
            <Tab key={index} label={option} />
          ))}
        </MuiTabs>
      ) : (
        <MuiTabs
          TabIndicatorProps={{
            style: {
              background: activeIndicatorColor || theme.palette.primary.main,
            },
          }}
          value={value}
          orientation={orientation}
          onChange={handleChange}
          variant="scrollable"
          aria-label="scrollable"
          sx={{
            ".Mui-selected": {
              color: activeColor || theme.palette.primary.main + "!important",
            },
            ".MuiTab-root": { color: tabColor },
          }}
        >
          {options.map((option, index) => (
            <Tab key={index} icon={option} />
          ))}
        </MuiTabs>
      )}
    </>
  );
}

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  orientation: PropTypes.string,
  activeIndicatorColor: PropTypes.string,
  tabColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;
