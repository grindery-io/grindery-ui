const MuiFilledInput = {
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
};
export default MuiFilledInput;
