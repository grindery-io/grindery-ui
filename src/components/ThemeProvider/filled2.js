const t = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        marginTop: "4px",
        padding: "0px",
        "& input": {
          padding: "15px 5px 15px 15px",
          border: "1px solid #DCDCDC",
          background: "#F4F5F7",
          borderRadius: "5px",
        },
        "& textarea": {
          padding: "15px 5px 15px 15px",
          border: "1px solid #DCDCDC",
          background: "#F4F5F7",
          borderRadius: "5px",
          width: "100%",
          "&:focus": {
            boxShadow: "inset 0px 0px 0px 1px #8C30F5",
            border: "1px solid #8C30F5",
          },
        },
        "& fieldset": {
          border: "none",
        },

        ".input-filled": {
          border: "1px solid #8C30F5",
        },
      },
    },
  },
};
