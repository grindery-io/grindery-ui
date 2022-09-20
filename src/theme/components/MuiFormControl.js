const MuiFormControl = {
  styleOverrides: {
    root: {
      "&.custom-text-input": {
        marginTop: "4px",
        padding: "0px",
        width: "100%",
        "& input": {
          padding: "10px 5px 10px 5px !important",
        },
        "& textarea": {
          padding: "10px 5px 10px 5px",
        },
        "& fieldset": {
          border: "none",
        },
        "& .MuiOutlinedInput-root": {
          marginTop: 0,
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
