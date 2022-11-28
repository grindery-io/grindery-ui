import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Foco from "react-foco";

/**
 *
 * Applications Menu component
 *
 * @example ./Example.md
 */
function AppsMenu(props) {
  const { apps, dark } = props;
  const [opened, setOpened] = useState(false);

  const handleToggleClick = () => {
    setOpened(!opened);
  };

  const onClickOutside = () => {
    setOpened(false);
  };

  return (
    <AppsMenuWrapper
      className={`${dark ? "dark" : "light"} ${opened ? "opened" : ""}`}
    >
      <Foco onClickOutside={onClickOutside}>
        <button className="apps-menu__toggle" onClick={handleToggleClick}>
          <GridIcon />
        </button>
        <div className="apps-menu__dropdown">
          <ul>
            {apps.map((app) => (
              <li>
                <a
                  href={app.url}
                  target={app.target || "_self"}
                  className="apps-menu__dropdown-item"
                  onClick={onClickOutside}
                >
                  {app.icon && <img src={app.icon} alt={`${app.name} icon`} />}
                  <div>
                    <strong>{app.name}</strong>
                    {app.description && <span>{app.description}</span>}
                  </div>
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Foco>
    </AppsMenuWrapper>
  );
}

const AppsMenuWrapper = styled("div")({
  position: "relative",
  display: "inline-block",
  fontFamily: "Roboto",
  "& .apps-menu__toggle": {
    background: "none",
    boxShadow: "none",
    width: "40px",
    height: "40px",
    padding: "9px",
    boxSizing: "border-box",
    borderRadius: "50%",
    border: "1px solid transparent",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #0B0D17",
      "& svg path": {
        fill: "#0B0D17",
      },
    },
  },
  "& .apps-menu__dropdown": {
    display: "block",
    zIndex: 9999,
    top: "calc(100% + 4px)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
    transform: "translateY(-10px)",
    right: 0,
    position: "absolute",
    "& ul": {
      margin: 0,
      background: "#FFFFFF",
      border: "1px solid #DCDCDC",
      boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.04)",
      borderRadius: "10px",
      minWidth: "279px",
      boxSizing: "border-box",
      padding: "16px",
      "& li": {
        listStyleType: "none",
        padding: 0,
        margin: 0,
        "& a": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          gap: "8px",
          textDecoration: "none",
          overflow: "hidden",
          padding: "4px 8px",
          borderRadius: "8px",

          "& img": {
            width: "16px",
            minWidth: "16px",
            height: "16px",
            display: "block",
          },
          "& svg": {
            marginLeft: "auto",
          },
          "& div": {
            overflow: "hidden",
            "& strong": {
              display: "block",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "150%",
              color: "#0B0D17",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            "& span": {
              display: "block",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "160%",
              color: "#898989",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
          "&:hover": {
            background: "#F4F5F7",
            "& div": {
              "& span": {
                color: "#0B0D17",
              },
            },
            "& svg path": {
              fill: "#0B0D17",
            },
          },
        },
      },
    },
  },
  "&.opened": {
    "& .apps-menu__toggle": {
      border: "1px solid #0B0D17",
      "& svg path": {
        fill: "#0B0D17",
      },
    },
    "& .apps-menu__dropdown": {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0px)",
    },
  },
  "&.light": {},
  "&.dark": {
    "& .apps-menu__toggle": {
      "& svg path": {
        fill: "#DCDCDC",
      },
      "&:hover": {
        border: "1px solid #ffffff",
        "& svg path": {
          fill: "#ffffff",
        },
      },
    },
    "&.opened": {
      "& .apps-menu__toggle": {
        border: "1px solid #ffffff",
        "& svg path": {
          fill: "#ffffff",
        },
      },
    },
  },
});

const GridIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#clip0_3542_2882)`}>
        <path
          d="M1.66668 14.5833H3.75C4.67047 14.5833 5.41668 15.3295 5.41668 16.25V18.3333C5.41668 19.2538 4.67047 20 3.75 20H1.66668C0.746211 20 0 19.2538 0 18.3333V16.25C0 15.3295 0.746211 14.5833 1.66668 14.5833Z"
          fill="#979797"
        />
        <path
          d="M16.2501 14.5833H18.3334C19.2539 14.5833 20.0001 15.3295 20.0001 16.25V18.3333C20.0001 19.2538 19.2539 20 18.3334 20H16.2501C15.3296 20 14.5834 19.2538 14.5834 18.3333V16.25C14.5834 15.3295 15.3296 14.5833 16.2501 14.5833Z"
          fill="#979797"
        />
        <path
          d="M1.66668 7.29169H3.75C4.67047 7.29169 5.41668 8.0379 5.41668 8.95837V11.0417C5.41668 11.9622 4.67047 12.7084 3.75 12.7084H1.66668C0.746211 12.7083 0 11.9622 0 11.0417V8.95837C0 8.03786 0.746211 7.29169 1.66668 7.29169Z"
          fill="#979797"
        />
        <path
          d="M16.2501 7.29169H18.3334C19.2538 7.29169 20.0001 8.0379 20.0001 8.95837V11.0417C20.0001 11.9622 19.2539 12.7084 18.3334 12.7084H16.2501C15.3296 12.7084 14.5834 11.9622 14.5834 11.0417V8.95837C14.5834 8.03786 15.3296 7.29169 16.2501 7.29169Z"
          fill="#979797"
        />
        <path
          d="M1.66668 0H3.75C4.67047 0 5.41668 0.746211 5.41668 1.66668V3.75C5.41668 4.67047 4.67047 5.41668 3.75 5.41668H1.66668C0.746211 5.41668 0 4.67047 0 3.75V1.66668C0 0.746211 0.746211 0 1.66668 0Z"
          fill="#979797"
        />
        <path
          d="M8.95831 14.5833H11.0416C11.9621 14.5833 12.7083 15.3295 12.7083 16.25V18.3333C12.7083 19.2538 11.9621 20 11.0416 20H8.95831C8.03784 20 7.29163 19.2538 7.29163 18.3333V16.25C7.29167 15.3295 8.03784 14.5833 8.95831 14.5833Z"
          fill="#979797"
        />
        <path
          d="M8.95831 7.29169H11.0416C11.9621 7.29169 12.7083 8.0379 12.7083 8.95837V11.0417C12.7083 11.9622 11.9621 12.7084 11.0416 12.7084H8.95831C8.03784 12.7084 7.29163 11.9622 7.29163 11.0417V8.95837C7.29167 8.03786 8.03784 7.29169 8.95831 7.29169Z"
          fill="#979797"
        />
        <path
          d="M8.95831 0H11.0416C11.9621 0 12.7083 0.746211 12.7083 1.66668V3.75C12.7083 4.67047 11.9621 5.41668 11.0416 5.41668H8.95831C8.03784 5.41668 7.29163 4.67047 7.29163 3.75V1.66668C7.29167 0.746211 8.03784 0 8.95831 0Z"
          fill="#979797"
        />
        <path
          d="M16.2501 0H18.3334C19.2539 0 20.0001 0.746211 20.0001 1.66668V3.75C20.0001 4.67047 19.2539 5.41668 18.3334 5.41668H16.2501C15.3296 5.41668 14.5834 4.67047 14.5834 3.75V1.66668C14.5834 0.746211 15.3296 0 16.2501 0Z"
          fill="#979797"
        />
      </g>
      <defs>
        <clipPath id="clip0_3542_2882">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3542_2760)">
        <path
          d="M12.748 12.7626L15.3607 10.15C15.7849 9.70539 16.0216 9.11448 16.0216 8.49997C16.0216 7.88545 15.7849 7.29454 15.3607 6.84997L12.748 4.2373C12.5605 4.0497 12.3062 3.94428 12.0409 3.94421C11.7757 3.94415 11.5213 4.04946 11.3337 4.23697C11.1461 4.42447 11.0407 4.67882 11.0406 4.94406C11.0405 5.2093 11.1458 5.4637 11.3334 5.6513L13.1867 7.5053L1.02002 7.52063C0.754803 7.52063 0.500449 7.62599 0.312913 7.81353C0.125376 8.00106 0.0200195 8.25542 0.0200195 8.52063C0.0200195 8.78585 0.125376 9.0402 0.312913 9.22774C0.500449 9.41528 0.754803 9.52063 1.02002 9.52063L13.174 9.5053L11.3334 11.3486C11.1512 11.5372 11.0504 11.7898 11.0527 12.052C11.055 12.3142 11.1601 12.565 11.3455 12.7505C11.5309 12.9359 11.7818 13.041 12.044 13.0433C12.3061 13.0456 12.5588 12.9448 12.7474 12.7626H12.748Z"
          fill="#DCDCDC"
        />
      </g>
      <defs>
        <clipPath id="clip0_3542_2760">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

AppsMenu.propTypes = {
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.string,
      target: PropTypes.string,
    })
  ).isRequired,
  dark: PropTypes.bool,
};

export default AppsMenu;
