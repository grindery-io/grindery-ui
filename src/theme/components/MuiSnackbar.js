const MuiSnackbar = {
  styleOverrides: {
    anchorOriginTopRight: {
      top: "88px !important",
      "& .MuiPaper-root": {
        background: "#0B0D17 !important",
        boxShadow: "none !important",
        borderRadius: "5px !important",
        padding: "8px !important",
      },
      "& .MuiSnackbarContent-message": {
        color: "#ffffff !important",
        fontWeight: "400 !important",
        fontSize: "16px !important",
        lineHeight: "150% !important",
        padding: "0 !important",
      },
      "& .MuiAlert-root": {
        background: "#0B0D17 !important",
        borderRadius: "5px !important",
        padding: "8px !important",
      },
      "& .MuiAlert-message": {
        color: "#ffffff !important",
        fontWeight: "400 !important",
        fontSize: "16px !important",
        lineHeight: "150% !important",
        padding: "0 !important",
      },
      "& .MuiAlert-icon": {
        padding: "0 !important",
      },
      "& .MuiAlert-action": {
        padding: "0 0 0 10px !important",
      },
      "& .MuiAlert-action > .MuiButtonBase-root": {
        padding: "2px 5px !important",
      },
      "& .MuiAlert-icon svg": {
        width: "24px !important",
        height: "24px !important",
      },
      "& .MuiAlert-action svg path": {
        fill: "#ffffff",
      },
    },
  },
};

export default MuiSnackbar;
