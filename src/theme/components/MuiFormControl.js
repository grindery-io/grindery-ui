const MuiFormControl = {
  styleOverrides: {
    root: ({ theme }) => ({
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
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
          border: `1px solid ${theme.palette.primary.main}`,
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
          border: `1px solid ${theme.palette.primary.main}`,
        },
      },
    }),
  },
};

export default MuiFormControl;
