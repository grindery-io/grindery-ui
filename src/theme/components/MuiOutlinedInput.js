const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      marginTop: "4px",
      border: "1px solid #DCDCDC",
      borderRadius: 5,
      background: "#F4F5F7",
      padding: "0px 10px 0px 10px!important",
      "& > img": {
        border: "1px solid #DCDCDC",
        padding: "4px",
        borderRadius: "5px",
        background: "#FFFFFF",
      },
      "& .icon_second": {
        marginLeft: "-5px",
      },
      "& .icon_first": {
        zIndex: "1",
      },
    },
    notchedOutline: {
      border: 0,
    },
    input: {
      padding: "10px 70px 10px 15px",
    },
  },
};

export default MuiOutlinedInput;
