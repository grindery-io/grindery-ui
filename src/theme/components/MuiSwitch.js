const MuiSwitch = {
  styleOverrides: {
    root: {
      width: "45px",
      height: "auto",
      padding: "0px",
      "& .Mui-checked+.MuiSwitch-track": {
        backgroundColor: "#fff!important",
        opacity: 1,
      },
      "& .Mui-checked > .MuiSwitch-thumb": {},
    },
    track: {
      height: "24px",
      borderRadius: "16px",
      border: "1px solid #758796",
      backgroundColor: "#fff!important",
    },
    thumb: {
      width: "18px",
      height: "18px",
      background: "#758796",
      boxShadow: "none",
      marginTop: "1px",
    },
    switchBase: {
      padding: "3px",
      "&:hover": {
        background: "none",
      },
    },
  },
};

export default MuiSwitch;
