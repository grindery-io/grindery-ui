import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#8C30F5",
  },
  secondary: {
    main: "#0B0D17",
  },
};

const severity = {
  info: {
    main: "#F1E4FF",
  },
  error: {
    main: "#FFE7E7",
  },
  warning: {
    main: "#FFF1D7",
  },
};

export const theme = createTheme({
  palette: palette,
  severity: severity,
  typography: {
    h2: {
      fontSize: 20,
      color: "#0B0D17",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "110%",
    },
    h3: {
      fontSize: 30,
      color: "#0B0D17",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "120%",
    },
    p: {
      fontSize: 16,
      fontFamily: '"Roboto"',
      color: "#0B0D17",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "150%",
    },
    span: {
      fontFamily: '"Roboto"',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#898989",
    },
  },

  "& .header-labels": {
    display: "flex",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        message: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "150%",
          textAlign: "right",
          color: "#0B0D17",
        },
        icon: {
          marginRight: "10px",
          fontSize: "20px",
        },
        standardError: {
          backgroundColor: "#FFE7E7!important",

          "& .MuiAlert-icon": {
            color: "#FF5858!important",
          },
        },
        standardWarning: {
          backgroundColor: "#FFF1D7!important",

          "& .MuiAlert-icon": {
            color: "#FFB930!important",
          },
        },
        standardInfo: {
          backgroundColor: "#F1E4FF!important",

          "& .MuiAlert-icon": {
            color: "#8C30F5!important",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginTop: "4px",
          border: "1px solid #DCDCDC",
          borderRadius: 5,
          background: "#F4F5F7",
          padding: "0px 10px 0px 10px!important",
          "& > img": {
            border: "1px solid #DCDCDC",
            padding: "4px",
            borderRadius: "5px",
            background: "#FFFFFF",
          },
          "& .icon_second": {
            marginLeft: "-5px",
          },
          "& .icon_first": {
            zIndex: "1",
          },
        },
        notchedOutline: {
          border: 0,
        },
        input: {
          padding: "15px 70px 15px 15px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: "1px solid #DCDCDC",
          paddingTop: "0px!important",
          background: "#F4F5F7!important",
          "& img": {
            marginRight: "0px",
          },
          "& li": {
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: "4px",
            borderRadius: "4px",
            border: "1px solid #DCDCDC",
            marginRight: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            overflow: "hidden",
            whiteSpace: "normal",
            textOverflow: "ellipsis",
            "& > img": {
              border: 0,
            },
          },
          "& .icon_second": {
            marginLeft: "-4px",
            backgroundColor: "#FFFFFF",
          },
          "& .icon_first": {
            marginRight: "0px",
            backgroundColor: "#FFFFFF",
          },
          "&:hover:not(.Mui-disabled):before": {
            border: 0,
          },
          "&:hover": {
            background: "#F4F5F7!important",
          },
          "&:after": {
            border: 0,
          },

          "&:before": {
            border: 0,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiInputAdornment-root": {
            marginLeft: "0px",
            marginRight: "0px",
            width: "24px",
            height: "24px",
            "& > img": {
              border: "1px solid #DCDCDC",
              padding: "4px",
              borderRadius: "5px",
              marginLeft: "-5px",
              background: "#FFFFFF",
            },
          },
          "& .MuiOutlinedInput-root": {
            marginTop: "4px",
            border: "1px solid #DCDCDC",
            borderRadius: "5px",
            background: "#F4F5F7",
            padding: "0px 10px 0px 10px!important",
            "& > img": {
              border: "1px solid #DCDCDC",
              padding: "4px",
              borderRadius: "5px",
              background: "#FFFFFF",
            },
            "& .icon_second": {
              marginLeft: "-5px",
            },
            "& .icon_first": {
              zIndex: "1",
            },
          },
          "& .MuiFilledInput-root": {
            borderRadius: 4,
            border: "1px solid #DCDCDC",
            paddingTop: "0px!important",
            background: "#F4F5F7!important",
            "& img": {
              marginRight: "0px",
            },
            "& li": {
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              padding: "4px",
              borderRadius: "4px",
              border: "1px solid #DCDCDC",
              marginRight: "5px",
              marginTop: "10px",
              marginBottom: "10px",
              overflow: "hidden",
              whiteSpace: "normal",
              textOverflow: "ellipsis",
              "& > img": {
                border: 0,
              },
            },
            "& .icon_second": {
              marginLeft: "-4px",
              backgroundColor: "#FFFFFF",
            },
            "& .icon_first": {
              marginRight: "0px",
              backgroundColor: "#FFFFFF",
            },
            "&:hover:not(.Mui-disabled):before": {
              border: "0 !important",
            },
            "&:hover": {
              background: "#F4F5F7!important",
            },
            "&:after": {
              border: "0 !important",
            },

            "&:before": {
              border: "0 !important",
            },
          },
          "& .MuiInputBase-sizeSmall": {
            width: "240px",
          },
          "& > div > .Mui-focused": {
            boxShadow: "inset 0px 0px 0px 1px #8C30F5",
            border: "1px solid #8C30F5",
          },
          position: "relative",
          "& .paid-label": {
            position: "absolute",
            top: "25px",
            right: "50px",
            backgroundColor: "#FF5858",
            borderRadius: "2px",
          },
          "& .paid-label span": {
            padding: "2px 6px",
            textTransform: "uppercase",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "8px",
            margin: "0px",
            display: "flex",
          },

          "& .MuiIcon-root": {
            fontSize: "24px",
          },
          "&.Mui-focused": {
            "& .MuiFilledInput-root": {
              boxShadow: "inset 0px 0px 0px 1px #8C30F5",
            },
          },
          notchedOutline: {
            border: 0,
          },
          input: {
            padding: "15px 70px 15px 15px",
          },
        },
        listbox: {
          "& > li:first-of-type > .MuiListSubheader-root": {
            border: "0px",
            padding: "0px",
          },
          '& .MuiAutocomplete-option[aria-disabled="true"]': {
            opacity: 1,
          },
        },
        option: {
          fontSize: "16px",
          color: "#0B0D17",
          textOverflow: "ellipsis",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "#FDFBFF",
          },
          "& .icon_second": {
            marginLeft: "-5px",
            backgroundColor: "#FFFFFF",
          },
          "& .icon_first": {
            zIndex: "1",
            backgroundColor: "#FFFFFF",
          },
          "& img": {
            backgroundColor: "#FFFFFF",
          },
          "& h5": {
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#141416",
            margin: "0px",
          },
          "& span": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#898989",
            margin: "0px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "260px",
          },
          "& .full_img_box": {
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            border: "1px solid #DCDCDC",
            padding: "4px",
            borderRadius: "5px",
            background: "#fff",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          },
          "& .paid-label": {
            backgroundColor: "#FF5858",
            borderRadius: "2px",
            right: "15px",
            margin: "0px",
            display: "flex",
            marginLeft: "auto",
          },
          "& .paid-label span": {
            padding: "2px 6px",
            textTransform: "uppercase",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "8px",
            margin: "0px",
            overflow: "inherit",
            whiteSpace: "inherit",
            width: "inherit",
          },
        },
        groupLabel: {
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
          padding: "8px 0px",
          borderTop: "1px solid #DCDCDC",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "150%",
          color: "#898989",
        },
        groupUl: {
          padding: "0px",
          "& > .MuiAutocomplete-option": {
            paddingLeft: "15px",
          },
        },
        input: {
          padding: "15px 70px 15px 5px!important",
        },
        endAdornment: {
          "& > button": {
            visibility: "visible",
            background: "#898989",
            padding: "2px",
            marginRight: "10px",
            "& > svg": {
              fill: "#fff",
              fontSize: "16px",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          padding: "10px 20px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 16,
          lineHeight: "150%",
          textAlign: "center",
          textTransform: "none",
          color: "#FFFFFF",
          boxShadow: "initial",
          margin: "10px 0px",
          "& span": {
            marginRight: "10px",
            "& img": {
              padding: "4px",
              backgroundColor: "#FFFFFF",
              borderRadius: 5,
              border: "1px solid #DCDCDC",
            },
          },
          "&:hover": {
            opacity: 0.7,
          },
        },
        containedPrimary: {
          "&:disabled": {
            opacity: 0.4,
            backgroundColor: palette.primary.main,
            color: "#FFFFFF",
          },
        },
        containedSecondary: {
          "&:disabled": {
            opacity: 0.4,
            backgroundColor: palette.secondary.main,
            color: "#FFFFFF",
          },
        },
        sizeSmall: {
          width: 167,
        },
        sizeLarge: {
          width: "100%",
        },
        outlinedPrimary: {
          color: "#8C30F5",
          border: "1px solid #8C30F5",
        },
        outlinedSecondary: {
          color: "#0B0D17",
          border: "1px solid #0B0D17",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          margin: "0 auto",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: "rgba(11, 13, 23, 0.5)",
          backdropFilter: "blur(20px)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          "& > div": {
            width: "100%",
            margin: "30px",
            padding: "20px",
            borderRadius: 10,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiBackdrop-root": {
            opacity: "0 !important",
          },
        },
        paper: {
          background: "#FFFFFF !important",
          border: "1px solid #DCDCDC !important",
          boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.15) !important",
          borderRadius: "5px !important",
          color: "#0B0D17",
          padding: "0 10px !important",
        },
        list: {
          "& li:hover": {
            background: "#FDFBFF !important",
            borderRadius: "5px !important",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "45px",
          height: "auto",
          padding: "0px",
          " & .Mui-checked+.MuiSwitch-track": {
            backgroundColor: "#fff!important",
            border: "1px solid #00B674",
            opacity: 1,
          },
          " & .Mui-checked > .MuiSwitch-thumb": {
            backgroundColor: "#00B674",
          },
        },
        track: {
          height: "24px",
          borderRadius: "16px",
          border: "1px solid #758796",
          backgroundColor: "#fff!important",
        },
        thumb: {
          width: "18px",
          height: "18px",
          background: "#758796",
          boxShadow: "none",
        },
        switchBase: {
          padding: "3px",
          "&:hover": {
            background: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          background: "#FDFBFF",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "150%",
          textAlign: "right",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#000",
          width: "160px",
          padding: "10px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "150%",
        },
        arrow: {
          color: "#000",
        },
      },
    },
  },
});
