const MuiList = {
  styleOverrides: {
    root: {
      "& .MuiMenuItem-root.select-item": {
        margin: "4px 0px",
        padding: "0px 5px 0px 5px",
        "&:hover": {
          backgroundColor: "#FDFBFF",
        },
        "&.Mui-selected": {
          backgroundColor: "#FDFBFF",
        },
        "& #search-input": {
          padding: "10px 70px 10px 15px",
        },
        "& .MuiOutlinedInput-root": {
          justifyContent: "flex-start",
          "& .MuiInputAdornment-root": {
            maxWidth: "16px",
          },
        },
        "& .icon_second": {
          marginLeft: "-17px",
          background: "#FFFFFF",
        },
        "& .icon_first": {
          zIndex: "1",
          background: "#FFFFFF",
        },
        "& .full_img_box": {
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          border: "1px solid #DCDCDC",
          padding: "4px",
          borderRadius: "5px",
          background: "#fff",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        },
        "& .img_box_icon img": {
          border: "1px solid #DCDCDC",
          padding: "5px",
          gap: "5px",
          borderRadius: "5px",
          background: "#FFFFFF",
        },
        "& .full_img_box .icon_second": {
          marginLeft: "0px",
        },
        "& .img_box_icon .icon_second": {
          marginLeft: "-10px",
        },
        "& .onlyImg": {
          border: 0,
          background: "initial",
        },
        "& .onlyImg img": {
          display: "flex",
          alignItems: "center",
          border: "1px solid #DCDCDC",
          padding: "5px",
          gap: "5px",
          borderRadius: "5px",
          background: "#FFFFFF",
        },
        "& > div": {
          display: "flex",
          alignItems: "center",
          padding: "5px",
          gap: "5px",
        },
        "& h5": {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "150%",
          color: "#141416",
          margin: "0px",
        },
        "& span": {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          color: "#898989",
          margin: "0px",
          width: "280px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      "& .MuiMenuItem-root.simple-select-item": {
        "&:hover": {
          backgroundColor: "#FDFBFF",
        },
        "&.Mui-selected": {
          backgroundColor: "#FDFBFF",
        },
      },
    },
  },
};

export default MuiList;
