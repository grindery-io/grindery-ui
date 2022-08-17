const MuiAlert = {
  styleOverrides: {
    message: ({ theme }) => ({
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      textAlign: "left",
      color: theme.palette.secondary.main,
    }),
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
};

export default MuiAlert;
