import React from "react";
import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

/**
 * @example ./Example.md
 */
function Button({
  variant,
  value,
  size,
  color,
  icon,
  disabled,
  type,
  loading,
  onClick,
}) {
  return (
    <>
      {icon ? (
        <MuiButton
          variant={variant}
          size={size}
          color={color}
          type={type}
          disabled={disabled}
          onClick={onClick}
          startIcon={
            loading ? (
              <CircularProgress sx={{ color: "#FFF" }} size={14} />
            ) : (
              <img src={icon} height={16} width={16} alt={value} />
            )
          }
        >
          {value}
        </MuiButton>
      ) : (
        <MuiButton
          variant={variant}
          size={size}
          color={color}
          type={type}
          disabled={disabled}
          onClick={onClick}
          startIcon={
            loading ? (
              <CircularProgress sx={{ color: "#FFF" }} size={14} />
            ) : undefined
          }
        >
          {value}
        </MuiButton>
      )}
    </>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: "contained",
  value: "Continue",
  size: "large",
  color: "secondary",
  icon: "",
  disabled: false,
  onClick: undefined,
  type: "button",
};

export default Button;
