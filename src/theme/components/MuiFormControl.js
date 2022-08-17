const MuiFormControl = {
  styleOverrides: {
    root: {
      "&.custom-text-input": {
        marginTop: "4px",
        padding: "0px",
        width: "100%",
        "& input": {
          padding: "15px 5px 15px 15px !important",
        },
        "& textarea": {
          padding: "15px 5px 15px 15px",
        },
        "& fieldset": {
          border: "none",
        },
        "&.input-filled .MuiOutlinedInput-root": {
          boxShadow: "inset 0px 0px 0px 1px #8C30F5",
          border: "1px solid #8C30F5",
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          boxShadow: "inset 0px 0px 0px 1px #8C30F5",
          border: "1px solid #8C30F5",
        },
      },
    },
  },
};

export default MuiFormControl;
