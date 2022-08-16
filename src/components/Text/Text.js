import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

/**
 * @example ./Example.md
 */
function Text({ variant, value }) {
  return <Typography variant={variant}>{value}</Typography>;
}

Text.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string,
};

Text.defaultProps = {
  variant: "h3",
};

export default Text;
