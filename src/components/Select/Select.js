import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  Select as MuiSelect,
  MenuItem,
  Typography,
  TextField,
  InputAdornment,
  InputLabel,
  Tooltip,
  Icon,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const styleDescription = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "10px!important",
  lineHeight: "150%!important",
  color: "#898989!important",
  margin: "0px",
};

const SelectWrapper = styled("div")({
  "& .MuiInputLabel-root": {
    top: "-1px",
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
    borderRadius: 5,
    background: "#F4F5F7",
    padding: "0px!important",
    "& #search-select": {
      boxShadow: "inset 0px 0px 0px 1px #8C30F5",
      border: "1px solid #8C30F5",
    },
    "& #search-select-empty": {
      boxShadow: "none",
      border: "1px solid #DCDCDC",
    },
    "&.Mui-focused": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 15px 10px 15px",
    display: "flex",
  },
  "& .MuiFormControl-root": {
    marginTop: "0px",
    "& .Mui-focused": {
      "& #search-select": {
        boxShadow: "inset 0px 0px 0px 1px #8C30F5",
        border: "1px solid #8C30F5",
        padding: "10px 15px 10px 15px!important",
      },
      "& #search-select-empty": {
        boxShadow: "inset 0px 0px 0px 1px #8C30F5",
        border: "1px solid #8C30F5",
      },
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: "rgba(0, 0, 0, 0.6)",
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      boxShadow: "inset 0px 0px 0px 1px #FF5858 !important",
      border: "1px solid #FF5858 !important",
      "& #search-select": {
        boxShadow: "none",
        border: "none",
      },
      "& #search-select-empty": {
        boxShadow: "none",
        border: "none",
      },
    },
    "& #search-select": {
      padding: "10px 15px 10px 15px!important",
    },
    "& .texthelper ": {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#898989",
    },
    "& .boxItems": {
      display: "flex",
      flexWrap: "wrap",
      rowGap: "5px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "normal",
    },
    "& #search-input": {
      padding: "10px 5px 10px 10px",
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
      marginRight: "10px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },

    "& .full_img_box img": {
      border: 0,
      marginRight: -5,
    },

    "& .img_box_icon": {
      display: "flex",
      alignItems: "center",
      marginRight: "5px",
      padding: "0 5px",
      "& .icon_second": {
        marginLeft: "-12px",
      },
    },
    "& .img_box_icon > img": {
      background: "#fff",
    },
    "& .img_box_icon > span": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "260px",
    },
    "& .img_box > img": {
      border: 0,
      padding: 0,
      borderRadius: 0,
      marginRight: 0,
    },
    "& .MuiSelect-select": {
      paddingLeft: "45px",
    },
  },
  "& .MuiSelect-select": {
    "& .box-seleted-icon": {
      position: "absolute",
      left: "15px",
      top: "10px",
      display: "flex",
      alignItems: "center",
      border: "1px solid #DCDCDC",
      padding: "5px",
      gap: "5px",
      borderRadius: "5px",
      background: "#FFFFFF",
    },
  },
  "& .MuiInputAdornment-root": {
    marginLeft: "15px",
    marginRight: "0px",
    width: "24px",
    height: "24px",
    "& > img": {
      border: "1px solid #DCDCDC",
      padding: "3px",
      borderRadius: "5px",
      marginLeft: "-5px",
      background: "#FFFFFF",
    },
  },

  "& .MuiIcon-root": {
    fontSize: "14px",
    marginTop: "3px",
    marginLeft: "6px",
  },
});

/**
 * Select input component
 *
 * @example ./Example.md
 */
function Select({
  options,
  type,
  label,
  placeholder,
  variant,
  texthelper,
  value,
  multiple,
  required,
  tooltip,
  onChange,
  error,
}) {
  const [searchText, setSearchText] = useState("");

  const displayedOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const currentValue = multiple
    ? options.filter((opt) => value.includes(opt.value))
    : options.find((opt) => opt.value === value) || "";

  const handleChange = (event) => {
    onChange(
      multiple
        ? event.target.value.map((v) => v.value)
        : event.target.value.value
    );
  };

  return (
    <SelectWrapper>
      {type === "default" ? (
        <Box
          component={"div"}
          sx={{ marginBottom: "20px" }}
          className="test-class"
        >
          <Box
            component={"div"}
            sx={{
              display: "flex",
              "& > .required ": {
                marginLeft: "auto",
                fontSize: "14px",
                color: "#898989",
              },
            }}
          >
            <Typography variant="body2">{label}</Typography>
            {tooltip ? (
              <Tooltip title={tooltip} placement="top" arrow>
                <Icon
                  sx={{
                    color: "#898989",
                    fontSize: "14px",
                    marginTop: "3px",
                    marginLeft: "6px",
                    ".": { backgroundColor: "#000" },
                  }}
                >
                  error
                </Icon>
              </Tooltip>
            ) : (
              ""
            )}
            {required ? (
              <Typography variant="p" className="required">
                {"(required)"}
              </Typography>
            ) : (
              ""
            )}
          </Box>
          <FormControl fullWidth error={Boolean(error)}>
            {currentValue.length === 0 ? (
              <InputLabel disableAnimation shrink={false} focused={false}>
                {placeholder}
              </InputLabel>
            ) : (
              ""
            )}
            <MuiSelect
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 450,
                  },
                },
              }}
              labelId="search-select-label"
              id={
                currentValue.length !== 0
                  ? "search-select"
                  : "search-select-empty"
              }
              sx={currentValue.length !== 0 ? { border: "0px" } : {}}
              value={currentValue}
              multiple={multiple}
              onChange={handleChange}
              onClose={() => setSearchText("")}
              renderValue={() => (
                <Box component={"div"} className="boxItems">
                  {(multiple ? currentValue : [currentValue]).map(
                    (option, i) => (
                      <Box
                        key={option.value}
                        component="div"
                        className="img_box_icon"
                        sx={{
                          "& > img": {
                            mr: 1,
                            flexShrink: 0,
                            border: "1px solid #DCDCDC",
                            p: "4px",
                            borderRadius: "5px",
                          },
                        }}
                      >
                        {option.icon ? (
                          typeof option.icon === "string" ? (
                            <img
                              loading="lazy"
                              width="16"
                              height="16"
                              src={option.icon}
                              alt={option.label}
                            />
                          ) : (
                            option.icon.map((icon, i) => (
                              <img
                                key={i}
                                loading="lazy"
                                width="16"
                                height="16"
                                src={icon}
                                alt={option.label}
                                className={i > 0 ? "icon_second" : "icon_first"}
                              />
                            ))
                          )
                        ) : (
                          ""
                        )}
                        <Typography
                          sx={{ margin: 0, color: "#0B0D17!important" }}
                          variant="p"
                          title={option.label}
                        >
                          {option.label}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              )}
            >
              {displayedOptions.map((option, i) => (
                <MenuItem
                  key={option.value}
                  value={option}
                  className="select-item"
                >
                  <Box
                    component="div"
                    sx={{
                      "& > img": {
                        mr: 1,
                        flexShrink: 0,
                        border: "1px solid #DCDCDC",
                        p: "4px",
                        borderRadius: "5px",
                      },
                    }}
                  >
                    {option.icon ? (
                      typeof option.icon === "string" ? (
                        <img
                          loading="lazy"
                          width="16"
                          height="16"
                          src={option.icon}
                          alt={option.label}
                        />
                      ) : (
                        option.icon.map((icon, i) => (
                          <img
                            key={i}
                            loading="lazy"
                            width="16"
                            height="16"
                            src={icon}
                            alt={option.label}
                            className={i > 0 ? "icon_second" : "icon_first"}
                          />
                        ))
                      )
                    ) : (
                      ""
                    )}
                    {option.description ? (
                      <Box
                        component={"div"}
                        sx={{
                          display: "flex",
                          position: "relative",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ margin: 0, color: "#0B0D17!important" }}
                          variant="p"
                          title={option.label}
                        >
                          {option.label}
                        </Typography>
                        <Typography
                          sx={styleDescription}
                          variant="p"
                          title={option.description}
                        >
                          {option.description}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography
                        sx={{ margin: 0, color: "#0B0D17!important" }}
                        variant="p"
                        title={option.label}
                      >
                        {option.label}
                      </Typography>
                    )}
                  </Box>
                </MenuItem>
              ))}
            </MuiSelect>
            {Boolean(error) ? (
              <Typography
                variant="p"
                className="texthelper"
                style={{ margin: "4px 0 0", color: "#FF5858" }}
              >
                {error}
              </Typography>
            ) : (
              <>
                {texthelper && (
                  <Typography
                    variant="p"
                    className="texthelper"
                    style={{ margin: "4px 0 0 " }}
                  >
                    {texthelper}
                  </Typography>
                )}
              </>
            )}
          </FormControl>
        </Box>
      ) : type === "searchLabel" ? (
        <Box component={"div"} sx={{ marginBottom: "20px" }}>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              "& > .required ": {
                marginLeft: "auto",
                fontSize: "14px",
                color: "#898989",
              },
            }}
          >
            <Typography variant="body2">{label}</Typography>
            {tooltip ? (
              <Tooltip title={tooltip} placement="top" arrow>
                <Icon
                  sx={{
                    color: "#898989",
                    fontSize: "14px",
                    marginTop: "3px",
                    marginLeft: "6px",
                    ".": { backgroundColor: "#000" },
                  }}
                >
                  error
                </Icon>
              </Tooltip>
            ) : (
              ""
            )}
            {required ? (
              <Typography variant="p" className="required">
                {"(required)"}
              </Typography>
            ) : (
              ""
            )}
          </Box>
          <FormControl fullWidth error={Boolean(error)}>
            {currentValue.length === 0 ? (
              <InputLabel disableAnimation shrink={false} focused={false}>
                {placeholder}
              </InputLabel>
            ) : (
              ""
            )}
            <MuiSelect
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 450,
                  },
                },
              }}
              labelId="search-select-label"
              id={
                currentValue.length !== 0
                  ? "search-select"
                  : "search-select-empty"
              }
              value={currentValue}
              sx={currentValue.length > 0 ? { border: "0" } : {}}
              multiple={multiple}
              onChange={handleChange}
              onClose={() => setSearchText("")}
              renderValue={() => (
                <Box component={"div"} className="boxItems">
                  {(multiple ? currentValue : [currentValue]).map(
                    (option, i) => (
                      <Box
                        key={option.value}
                        component="div"
                        className={
                          variant === "default"
                            ? "img_box_icon"
                            : "full_img_box"
                        }
                        sx={{
                          "& > img": {
                            mr: 1,
                            flexShrink: 0,
                            border: "1px solid #DCDCDC",
                            p: "4px",
                            borderRadius: "5px",
                          },
                        }}
                      >
                        {option.icon ? (
                          typeof option.icon === "string" ? (
                            <img
                              loading="lazy"
                              width="16"
                              height="16"
                              src={option.icon}
                              alt={option.label}
                            />
                          ) : (
                            option.icon.map((icon, i) => (
                              <img
                                key={i}
                                loading="lazy"
                                width="16"
                                height="16"
                                src={icon}
                                alt={option.label}
                                className={i > 0 ? "icon_second" : "icon_first"}
                              />
                            ))
                          )
                        ) : (
                          ""
                        )}
                        <Typography
                          sx={{ margin: 0, color: "#0B0D17!important" }}
                          variant="p"
                          title={option.label}
                        >
                          {option.label}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              )}
            >
              {
                <MenuItem
                  dense
                  style={{
                    top: "10px",
                    paddingTop: "10px",
                    transform: "translateY(-12px)",
                    position: "sticky",
                    background: "#fff",
                    zIndex: 1,
                    marginTop: 0,
                    cursor: "default",
                  }}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  onClickCapture={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className="select-item"
                >
                  <TextField
                    size="small"
                    autoFocus
                    placeholder="Search..."
                    fullWidth
                    id="search-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </MenuItem>
              }
              {displayedOptions.map((option, i) => (
                <MenuItem
                  key={option.value}
                  value={option}
                  className="select-item"
                >
                  <Box
                    component="div"
                    className={
                      variant === "full" ? "full_img_box" : "img_box_icon"
                    }
                  >
                    {option.icon ? (
                      typeof option.icon === "string" ? (
                        <img
                          loading="lazy"
                          width="16"
                          height="16"
                          src={option.icon}
                          alt={option.label}
                        />
                      ) : (
                        option.icon.map((icon, i) => (
                          <img
                            key={i}
                            loading="lazy"
                            width="16"
                            height="16"
                            src={icon}
                            alt={option.label}
                            className={i > 0 ? "icon_second" : "icon_first"}
                          />
                        ))
                      )
                    ) : (
                      ""
                    )}
                    {variant === "full" ? (
                      <h5>{option.label}</h5>
                    ) : (
                      <Typography
                        sx={{ margin: 0, color: "#0B0D17!important" }}
                        variant="p"
                        title={option.label}
                      >
                        {option.label}
                      </Typography>
                    )}
                    {variant === "full" ? <span>{option.reference}</span> : ""}
                  </Box>
                </MenuItem>
              ))}
            </MuiSelect>
            {Boolean(error) ? (
              <Typography
                variant="p"
                className="texthelper"
                style={{ margin: "4px 0 0", color: "#FF5858" }}
              >
                {error}
              </Typography>
            ) : (
              <>
                {texthelper && (
                  <Typography
                    variant="p"
                    className="texthelper"
                    style={{ margin: "4px 0 0 " }}
                  >
                    {texthelper}
                  </Typography>
                )}
              </>
            )}
          </FormControl>
        </Box>
      ) : (
        ""
      )}
    </SelectWrapper>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  multiple: PropTypes.bool,
  tooltip: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  placeholder: "0x",
  type: "default",
  variant: "default",
  multiple: false,
  onChange: () => undefined,
};

export default Select;
