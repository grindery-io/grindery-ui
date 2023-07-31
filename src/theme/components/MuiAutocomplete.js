const MuiAutocomplete = {
  styleOverrides: {
    root: ({ theme }) => ({
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
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
        border: `1px solid ${theme.palette.primary.main}`,
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
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
        },
      },
      notchedOutline: {
        border: 0,
      },
      input: {
        padding: "15px 70px 15px 15px",
      },
    }),
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
      padding: "10px 70px 10px 5px!important",
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
};

export default MuiAutocomplete;
