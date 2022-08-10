import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
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
  },
});
