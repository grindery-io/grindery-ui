import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
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
