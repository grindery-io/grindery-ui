import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Button as Button$1, CircularProgress as CircularProgress$1, Box, Typography, Tooltip as Tooltip$1, Icon, Autocomplete as Autocomplete$1, TextField, InputAdornment, Paper, FormControl, InputLabel, Select as Select$1, MenuItem, Alert as Alert$1, Switch as Switch$1, Dialog as Dialog$1, Drawer as Drawer$1, IconButton as IconButton$1, Tabs as Tabs$1, Tab, Menu as Menu$1 } from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { createEditor, Transforms } from 'slate';
import { withReact, Slate, Editable, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';
import Foco from 'react-foco';
import _ from 'lodash';
import { styled as styled$1, createTheme, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';

/**
 * @example ./Example.md
 */

function Button(_ref) {
  var variant = _ref.variant,
      value = _ref.value,
      size = _ref.size,
      color = _ref.color,
      icon = _ref.icon,
      disabled = _ref.disabled,
      type = _ref.type,
      loading = _ref.loading,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(Button$1, {
    variant: variant,
    size: size,
    color: color,
    type: type,
    disabled: disabled,
    onClick: onClick,
    startIcon: loading ? /*#__PURE__*/React.createElement(CircularProgress$1, {
      sx: {
        color: "#FFF"
      },
      size: 14
    }) : /*#__PURE__*/React.createElement("img", {
      src: icon,
      height: 16,
      width: 16,
      alt: value
    })
  }, value) : /*#__PURE__*/React.createElement(Button$1, {
    variant: variant,
    size: size,
    color: color,
    type: type,
    disabled: disabled,
    onClick: onClick,
    startIcon: loading ? /*#__PURE__*/React.createElement(CircularProgress$1, {
      sx: {
        color: "#FFF"
      },
      size: 14
    }) : undefined
  }, value));
}

Button.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};
Button.defaultProps = {
  variant: "contained",
  value: "Continue",
  size: "large",
  color: "secondary",
  icon: "",
  disabled: false,
  onClick: undefined,
  type: "button"
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var styleDescription$1 = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "10px!important",
  lineHeight: "150%!important",
  color: "#898989!important",
  margin: "0px"
};
var styleButton = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "150%",
  textAlign: "center",
  color: "#0B0D17",
  border: "1px solid #898989",
  borderRadius: "5px",
  margin: "8px 10px",
  width: "calc( 100% - 20px)",
  padding: "10px 0px",
  textTransform: "none"
};
/**
 * Autocomplete input component
 *
 * @example ./Example.md
 */

function Autocomplete(_ref) {
  var options = _ref.options,
      label = _ref.label,
      placeholder = _ref.placeholder,
      size = _ref.size,
      required = _ref.required,
      texthelper = _ref.texthelper,
      value = _ref.value,
      tooltip = _ref.tooltip,
      buttonSuggestion = _ref.buttonSuggestion,
      onChange = _ref.onChange,
      error = _ref.error;
  var currentValue = options.find(function (opt) {
    return opt.value === value;
  }) || null;

  var PaperComponentCustom = function PaperComponentCustom(options) {
    return /*#__PURE__*/React.createElement(Paper, options.containerProps, options.children, buttonSuggestion && /*#__PURE__*/React.createElement(Button$1, {
      sx: styleButton
    }, "Suggest an App"));
  };

  var handleChange = function handleChange(event, obj) {
    onChange(obj && obj.value || "");
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      display: "flex",
      "& > .required ": {
        marginLeft: "auto",
        fontSize: "14px",
        color: "#898989"
      }
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "p"
  }, label), tooltip ? /*#__PURE__*/React.createElement(Tooltip$1, {
    title: tooltip,
    placement: "top",
    arrow: true
  }, /*#__PURE__*/React.createElement(Icon, {
    sx: {
      color: "#898989",
      fontSize: "18px",
      ".": {
        backgroundColor: "#000"
      }
    }
  }, "error")) : "", required ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "required"
  }, "(required)") : ""), /*#__PURE__*/React.createElement(Autocomplete$1, {
    size: size,
    id: "g-form-input",
    onChange: handleChange,
    value: currentValue,
    PaperComponent: PaperComponentCustom,
    sx: _objectSpread2(_objectSpread2({}, currentValue ? {
      ".MuiOutlinedInput-root": {
        boxShadow: error ? "inset 0px 0px 0px 1px #FF5858" : "inset 0px 0px 0px 1px #8C30F5",
        border: error ? "1px solid #FF5858" : "1px solid #8C30F5"
      }
    } : {
      ".MuiOutlinedInput-root": {
        boxShadow: error ? "inset 0px 0px 0px 1px #FF5858" : undefined,
        border: error ? "1px solid #FF5858" : undefined
      },
      ".MuiAutocomplete-clearIndicator": {
        display: "none"
      }
    }), {}, {
      ".MuiOutlinedInput-root.Mui-focused": {
        boxShadow: error ? "inset 0px 0px 0px 1px #FF5858" : "inset 0px 0px 0px 1px #8C30F5",
        border: error ? "1px solid #FF5858" : "1px solid #8C30F5"
      }
    }),
    options: options,
    groupBy: function groupBy(option) {
      return option.group;
    },
    getOptionDisabled: function getOptionDisabled(option) {
      return option.disabled;
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.length === 1 ? option[0].label : option.label;
    },
    loading: true,
    loadingText: "Nothing found",
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: option.value
      }, /*#__PURE__*/React.createElement(Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 1,
            flexShrink: 0,
            border: "1px solid #DCDCDC",
            p: "4px",
            borderRadius: "5px"
          }
        }
      }, props), option.icon ? typeof option.icon === "string" ? /*#__PURE__*/React.createElement("img", {
        loading: "lazy",
        width: "16",
        height: "16",
        src: option.icon,
        alt: option.label
      }) : option.icon.map(function (icon, i) {
        return /*#__PURE__*/React.createElement("img", {
          key: i,
          loading: "lazy",
          width: "16",
          height: "16",
          src: icon,
          alt: option.label,
          className: i > 0 ? "icon_second" : "icon_first"
        });
      }) : "", option.description ? /*#__PURE__*/React.createElement(Box, {
        component: "div",
        sx: {
          display: "flex",
          position: "relative",
          flexDirection: "column"
        }
      }, /*#__PURE__*/React.createElement(Typography, {
        sx: {
          margin: 0,
          color: "#0B0D17!important"
        },
        variant: "p",
        title: option.label
      }, option.label), /*#__PURE__*/React.createElement(Typography, {
        sx: styleDescription$1,
        variant: "p",
        title: option.description
      }, option.description)) : /*#__PURE__*/React.createElement(Typography, {
        sx: {
          margin: 0,
          color: "#0B0D17!important"
        },
        variant: "p",
        title: option.label
      }, option.label), option.paid ? /*#__PURE__*/React.createElement(Box, {
        component: "div",
        className: "paid-label"
      }, " ", /*#__PURE__*/React.createElement(Typography, {
        variant: "p"
      }, "Paid")) : ""));
    },
    forcePopupIcon: false,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(TextField, _extends({}, params, {
        label: "",
        placeholder: placeholder,
        InputProps: _objectSpread2(_objectSpread2({}, params.InputProps), {}, {
          startAdornment: !currentValue ? /*#__PURE__*/React.createElement(InputAdornment, {
            position: "start"
          }, " ", /*#__PURE__*/React.createElement(Icon, null, "search")) : currentValue.icon ? /*#__PURE__*/React.createElement("img", {
            loading: "lazy",
            width: "16",
            height: "16",
            src: currentValue.icon,
            alt: currentValue.label
          }) : null
        })
      })), currentValue ? currentValue.paid ? /*#__PURE__*/React.createElement(Box, {
        component: "div",
        className: "paid-label"
      }, " ", /*#__PURE__*/React.createElement(Typography, {
        variant: "p"
      }, "Paid")) : null : null);
    }
  }), Boolean(error) ? /*#__PURE__*/React.createElement(Typography, {
    variant: "span",
    className: "texthelper",
    style: {
      display: "block",
      margin: "4px 0 0",
      color: "#FF5858"
    }
  }, error) : /*#__PURE__*/React.createElement(React.Fragment, null, texthelper && /*#__PURE__*/React.createElement(Typography, {
    variant: "span",
    className: "texthelper",
    style: {
      display: "block",
      margin: "4px 0 0"
    }
  }, texthelper))));
}

Autocomplete.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  texthelper: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
  buttonSuggestion: PropTypes.bool,
  error: PropTypes.string
};

/**
 * @example ./Example.md
 */

function TextInput(_ref) {
  var placeholder = _ref.placeholder,
      size = _ref.size,
      onChange = _ref.onChange,
      value = _ref.value,
      label = _ref.label,
      required = _ref.required,
      texthelper = _ref.texthelper,
      type = _ref.type,
      icon = _ref.icon,
      tooltip = _ref.tooltip,
      readonly = _ref.readonly;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var handleChange = function handleChange(e) {
    setCurrentValue(e.target.value);
  };

  var changeValue = useCallback(function (val) {
    onChange(val);
  }, [onChange]);
  useEffect(function () {
    changeValue(currentValue);
  }, [currentValue, changeValue]);
  return /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      display: "flex",
      "& > .required ": {
        marginLeft: "auto",
        fontSize: "14px",
        color: "#898989"
      }
    }
  }, label ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p"
  }, label) : "", tooltip ? /*#__PURE__*/React.createElement(Tooltip$1, {
    title: tooltip,
    placement: "top",
    arrow: true
  }, /*#__PURE__*/React.createElement(Icon, {
    sx: {
      color: "#898989",
      fontSize: "18px",
      ".": {
        backgroundColor: "#000"
      },
      marginTop: "3px",
      marginLeft: "6px"
    }
  }, "error")) : "", required ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "required"
  }, "(required)") : ""), type === "text" ? /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    placeholder: placeholder,
    className: currentValue !== "" && !readonly ? "custom-text-input input-filled" : "custom-text-input",
    size: size,
    onChange: handleChange,
    value: currentValue,
    disabled: readonly
  }) : type === "textarea" ? /*#__PURE__*/React.createElement(TextField, {
    placeholder: placeholder,
    size: size,
    onChange: handleChange,
    value: currentValue,
    multiline: true,
    rows: 3,
    maxRows: 4,
    className: "custom-text-input",
    disabled: readonly
  }) : /*#__PURE__*/React.createElement(TextField, {
    placeholder: placeholder,
    className: currentValue !== "" && !readonly ? "custom-text-input input-filled" : "custom-text-input",
    sx: {
      background: "#F4F5F7",
      borderRadius: "5px",
      ".MuiOutlinedInput-root": {
        height: "auto",
        marginTop: "0px",
        padding: "0px 15px"
      },
      input: {
        padding: "10px 15px 10px 15px!important",
        background: "none!important",
        border: "none!important"
      }
    },
    size: size,
    onChange: handleChange,
    value: currentValue,
    InputProps: {
      startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React.createElement(Icon, null, icon))
    },
    disabled: readonly
  }), texthelper ? /*#__PURE__*/React.createElement(Typography, {
    variant: "span",
    className: "texthelper"
  }, texthelper) : "");
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  readonly: PropTypes.bool
};
TextInput.defaultProps = {
  placeholder: "0x...",
  size: "large",
  onChange: undefined,
  value: "",
  type: "text",
  label: ""
};

var styleDescription = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "10px!important",
  lineHeight: "150%!important",
  color: "#898989!important",
  margin: "0px"
};
var SelectWrapper = styled("div")({
  "& .MuiInputLabel-root": {
    top: "5px"
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
    borderRadius: 5,
    background: "#F4F5F7",
    padding: "0px!important",
    "& #search-select": {
      boxShadow: "inset 0px 0px 0px 1px #8C30F5",
      border: "1px solid #8C30F5"
    },
    "& #search-select-empty": {
      boxShadow: "none",
      border: "1px solid #DCDCDC"
    },
    "&.Mui-focused": {
      border: "none"
    }
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: 0
  },
  "& .MuiOutlinedInput-input": {
    padding: "15px 15px 15px 15px",
    display: "flex"
  },
  "& .MuiFormControl-root": {
    marginTop: "4px",
    "& .Mui-focused": {
      "& #search-select": {
        boxShadow: "inset 0px 0px 0px 1px #8C30F5",
        border: "1px solid #8C30F5",
        padding: "10px 15px 10px 15px!important"
      },
      "& #search-select-empty": {
        boxShadow: "inset 0px 0px 0px 1px #8C30F5",
        border: "1px solid #8C30F5"
      }
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: "rgba(0, 0, 0, 0.6)"
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      boxShadow: "inset 0px 0px 0px 1px #FF5858 !important",
      border: "1px solid #FF5858 !important",
      "& #search-select": {
        boxShadow: "none",
        border: "none"
      },
      "& #search-select-empty": {
        boxShadow: "none",
        border: "none"
      }
    },
    "& #search-select": {
      padding: "10px 15px 10px 15px!important"
    },
    "& .texthelper ": {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#898989"
    },
    "& .boxItems": {
      display: "flex",
      flexWrap: "wrap",
      rowGap: "5px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "normal"
    },
    "& #search-input": {
      padding: "10px 5px 10px 10px"
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
      whiteSpace: "nowrap"
    },
    "& .full_img_box img": {
      border: 0,
      marginRight: -5
    },
    "& .img_box_icon": {
      display: "flex",
      alignItems: "center",
      marginRight: "5px",
      padding: "5px",
      "& .icon_second": {
        marginLeft: "-12px"
      }
    },
    "& .img_box_icon > img": {
      background: "#fff"
    },
    "& .img_box_icon > span": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "260px"
    },
    "& .img_box > img": {
      border: 0,
      padding: 0,
      borderRadius: 0,
      marginRight: 0
    },
    "& .MuiSelect-select": {
      paddingLeft: "45px"
    }
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
      background: "#FFFFFF"
    }
  },
  "& .MuiInputAdornment-root": {
    marginLeft: "15px",
    marginRight: "0px",
    width: "24px",
    height: "24px",
    "& > img": {
      border: "1px solid #DCDCDC",
      padding: "4px",
      borderRadius: "5px",
      marginLeft: "-5px",
      background: "#FFFFFF"
    }
  },
  "& .MuiIcon-root": {
    fontSize: "18px",
    marginTop: "3px",
    marginLeft: "6px"
  }
});
/**
 * Select input component
 *
 * @example ./Example.md
 */

function Select(_ref) {
  var options = _ref.options,
      type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      variant = _ref.variant,
      texthelper = _ref.texthelper,
      value = _ref.value,
      multiple = _ref.multiple,
      required = _ref.required,
      tooltip = _ref.tooltip,
      onChange = _ref.onChange,
      error = _ref.error;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      searchText = _useState2[0],
      setSearchText = _useState2[1];

  var displayedOptions = options.filter(function (option) {
    return option.label.toLowerCase().includes(searchText.toLowerCase());
  });
  var currentValue = multiple ? options.filter(function (opt) {
    return value.includes(opt.value);
  }) : options.find(function (opt) {
    return opt.value === value;
  }) || "";

  var handleChange = function handleChange(event) {
    onChange(multiple ? event.target.value.map(function (v) {
      return v.value;
    }) : event.target.value.value);
  };

  return /*#__PURE__*/React.createElement(SelectWrapper, null, type === "default" ? /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      marginBottom: "20px"
    },
    className: "test-class"
  }, /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      display: "flex",
      "& > .required ": {
        marginLeft: "auto",
        fontSize: "14px",
        color: "#898989"
      }
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "p"
  }, label), tooltip ? /*#__PURE__*/React.createElement(Tooltip$1, {
    title: tooltip,
    placement: "top",
    arrow: true
  }, /*#__PURE__*/React.createElement(Icon, {
    sx: {
      color: "#898989",
      fontSize: "18px",
      ".": {
        backgroundColor: "#000"
      }
    }
  }, "error")) : "", required ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "required"
  }, "(required)") : ""), /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true,
    error: Boolean(error)
  }, currentValue.length === 0 ? /*#__PURE__*/React.createElement(InputLabel, {
    disableAnimation: true,
    shrink: false,
    focused: false
  }, placeholder) : "", /*#__PURE__*/React.createElement(Select$1, {
    MenuProps: {
      PaperProps: {
        sx: {
          maxHeight: 450
        }
      }
    },
    labelId: "search-select-label",
    id: currentValue.length !== 0 ? "search-select" : "search-select-empty",
    sx: currentValue.length !== 0 ? {
      border: "0px"
    } : {},
    value: currentValue,
    multiple: multiple,
    onChange: handleChange,
    onClose: function onClose() {
      return setSearchText("");
    },
    renderValue: function renderValue() {
      return /*#__PURE__*/React.createElement(Box, {
        component: "div",
        className: "boxItems"
      }, (multiple ? currentValue : [currentValue]).map(function (option, i) {
        return /*#__PURE__*/React.createElement(Box, {
          key: option.value,
          component: "div",
          className: "img_box_icon",
          sx: {
            "& > img": {
              mr: 1,
              flexShrink: 0,
              border: "1px solid #DCDCDC",
              p: "4px",
              borderRadius: "5px"
            }
          }
        }, option.icon ? typeof option.icon === "string" ? /*#__PURE__*/React.createElement("img", {
          loading: "lazy",
          width: "16",
          height: "16",
          src: option.icon,
          alt: option.label
        }) : option.icon.map(function (icon, i) {
          return /*#__PURE__*/React.createElement("img", {
            key: i,
            loading: "lazy",
            width: "16",
            height: "16",
            src: icon,
            alt: option.label,
            className: i > 0 ? "icon_second" : "icon_first"
          });
        }) : "", /*#__PURE__*/React.createElement(Typography, {
          sx: {
            margin: 0,
            color: "#0B0D17!important"
          },
          variant: "p",
          title: option.label
        }, option.label));
      }));
    }
  }, displayedOptions.map(function (option, i) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.value,
      value: option,
      className: "select-item"
    }, /*#__PURE__*/React.createElement(Box, {
      component: "div",
      sx: {
        "& > img": {
          mr: 1,
          flexShrink: 0,
          border: "1px solid #DCDCDC",
          p: "4px",
          borderRadius: "5px"
        }
      }
    }, option.icon ? typeof option.icon === "string" ? /*#__PURE__*/React.createElement("img", {
      loading: "lazy",
      width: "16",
      height: "16",
      src: option.icon,
      alt: option.label
    }) : option.icon.map(function (icon, i) {
      return /*#__PURE__*/React.createElement("img", {
        key: i,
        loading: "lazy",
        width: "16",
        height: "16",
        src: icon,
        alt: option.label,
        className: i > 0 ? "icon_second" : "icon_first"
      });
    }) : "", option.description ? /*#__PURE__*/React.createElement(Box, {
      component: "div",
      sx: {
        display: "flex",
        position: "relative",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement(Typography, {
      sx: {
        margin: 0,
        color: "#0B0D17!important"
      },
      variant: "p",
      title: option.label
    }, option.label), /*#__PURE__*/React.createElement(Typography, {
      sx: styleDescription,
      variant: "p",
      title: option.description
    }, option.description)) : /*#__PURE__*/React.createElement(Typography, {
      sx: {
        margin: 0,
        color: "#0B0D17!important"
      },
      variant: "p",
      title: option.label
    }, option.label)));
  })), Boolean(error) ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "texthelper",
    style: {
      margin: "4px 0 0",
      color: "#FF5858"
    }
  }, error) : /*#__PURE__*/React.createElement(React.Fragment, null, texthelper && /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "texthelper",
    style: {
      margin: "4px 0 0 "
    }
  }, texthelper)))) : type === "searchLabel" ? /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Box, {
    component: "div",
    sx: {
      display: "flex",
      "& > .required ": {
        marginLeft: "auto",
        fontSize: "14px",
        color: "#898989"
      }
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "p"
  }, label), tooltip ? /*#__PURE__*/React.createElement(Tooltip$1, {
    title: tooltip,
    placement: "top",
    arrow: true
  }, /*#__PURE__*/React.createElement(Icon, {
    sx: {
      color: "#898989",
      fontSize: "18px",
      ".": {
        backgroundColor: "#000"
      }
    }
  }, "error")) : "", required ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "required"
  }, "(required)") : ""), /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true,
    error: Boolean(error)
  }, currentValue.length === 0 ? /*#__PURE__*/React.createElement(InputLabel, {
    disableAnimation: true,
    shrink: false,
    focused: false
  }, placeholder) : "", /*#__PURE__*/React.createElement(Select$1, {
    MenuProps: {
      PaperProps: {
        sx: {
          maxHeight: 450
        }
      }
    },
    labelId: "search-select-label",
    id: currentValue.length !== 0 ? "search-select" : "search-select-empty",
    value: currentValue,
    sx: currentValue.length > 0 ? {
      border: "0"
    } : {},
    multiple: multiple,
    onChange: handleChange,
    onClose: function onClose() {
      return setSearchText("");
    },
    renderValue: function renderValue() {
      return /*#__PURE__*/React.createElement(Box, {
        component: "div",
        className: "boxItems"
      }, (multiple ? currentValue : [currentValue]).map(function (option, i) {
        return /*#__PURE__*/React.createElement(Box, {
          key: option.value,
          component: "div",
          className: variant === "default" ? "img_box_icon" : "full_img_box",
          sx: {
            "& > img": {
              mr: 1,
              flexShrink: 0,
              border: "1px solid #DCDCDC",
              p: "4px",
              borderRadius: "5px"
            }
          }
        }, option.icon ? typeof option.icon === "string" ? /*#__PURE__*/React.createElement("img", {
          loading: "lazy",
          width: "16",
          height: "16",
          src: option.icon,
          alt: option.label
        }) : option.icon.map(function (icon, i) {
          return /*#__PURE__*/React.createElement("img", {
            key: i,
            loading: "lazy",
            width: "16",
            height: "16",
            src: icon,
            alt: option.label,
            className: i > 0 ? "icon_second" : "icon_first"
          });
        }) : "", /*#__PURE__*/React.createElement(Typography, {
          sx: {
            margin: 0,
            color: "#0B0D17!important"
          },
          variant: "p",
          title: option.label
        }, option.label));
      }));
    }
  }, /*#__PURE__*/React.createElement(MenuItem, {
    dense: true,
    style: {
      top: "10px",
      paddingTop: "10px",
      transform: "translateY(-12px)",
      position: "sticky",
      background: "#fff",
      zIndex: 1,
      marginTop: 0,
      cursor: "default"
    },
    onKeyDown: function onKeyDown(e) {
      e.stopPropagation();
    },
    onClickCapture: function onClickCapture(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    className: "select-item"
  }, /*#__PURE__*/React.createElement(TextField, {
    size: "small",
    autoFocus: true,
    placeholder: "Search...",
    fullWidth: true,
    id: "search-input",
    InputProps: {
      startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React.createElement(SearchIcon, null))
    },
    onChange: function onChange(e) {
      return setSearchText(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key !== "Escape") {
        e.stopPropagation();
      }
    }
  })), displayedOptions.map(function (option, i) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.value,
      value: option,
      className: "select-item"
    }, /*#__PURE__*/React.createElement(Box, {
      component: "div",
      className: variant === "full" ? "full_img_box" : "img_box_icon"
    }, option.icon ? typeof option.icon === "string" ? /*#__PURE__*/React.createElement("img", {
      loading: "lazy",
      width: "16",
      height: "16",
      src: option.icon,
      alt: option.label
    }) : option.icon.map(function (icon, i) {
      return /*#__PURE__*/React.createElement("img", {
        key: i,
        loading: "lazy",
        width: "16",
        height: "16",
        src: icon,
        alt: option.label,
        className: i > 0 ? "icon_second" : "icon_first"
      });
    }) : "", variant === "full" ? /*#__PURE__*/React.createElement("h5", null, option.label) : /*#__PURE__*/React.createElement(Typography, {
      sx: {
        margin: 0,
        color: "#0B0D17!important"
      },
      variant: "p",
      title: option.label
    }, option.label), variant === "full" ? /*#__PURE__*/React.createElement("span", null, option.reference) : ""));
  })), Boolean(error) ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "texthelper",
    style: {
      margin: "4px 0 0",
      color: "#FF5858"
    }
  }, error) : /*#__PURE__*/React.createElement(React.Fragment, null, texthelper && /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    className: "texthelper",
    style: {
      margin: "4px 0 0 "
    }
  }, texthelper)))) : "");
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  multiple: PropTypes.bool,
  tooltip: PropTypes.string,
  error: PropTypes.string
};
Select.defaultProps = {
  options: [],
  placeholder: "0x",
  type: "default",
  variant: "default",
  multiple: false,
  onChange: function onChange() {
    return undefined;
  }
};

/**
 * @example ./Example.md
 */

function Text(_ref) {
  var variant = _ref.variant,
      value = _ref.value;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: variant
  }, value);
}

Text.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string
};
Text.defaultProps = {
  variant: "h3"
};

var SuffixInputWrapper = styled("div")({
  "& .MuiTextField-root": {
    background: "#F4F5F7",
    borderRadius: "5px",
    border: "1px solid #DCDCDC",
    "& fieldset": {
      border: "0px"
    },
    height: "34px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    alignItems: "center",
    color: "#0B0D17"
  },
  "& .MuiInputAdornment-root": {
    "& .MuiTypography-root": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "150%",
      alignItems: "center",
      color: "#898989"
    }
  },
  "& .MuiOutlinedInput-root": {
    border: "0px",
    padding: "5px 10px",
    marginTop: "6px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "0px"
    },
    "& input": {
      padding: "0px"
    }
  }
});
/**
 * @example ./Example.md
 */

function SuffixInput(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      suffix = _ref.suffix,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(SuffixInputWrapper, null, /*#__PURE__*/React.createElement(TextField, {
    id: "input-with-suffix",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, suffix)
    }
  }));
}

SuffixInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

var _excluded$2 = ["color", "icon"];
/**
 *
 * @example ./Example.md
 */

function Alert(_ref) {
  var color = _ref.color,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement(Alert$1, {
    icon: icon,
    severity: color
  }, props.children);
}

Alert.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element
};

/**
 * @example ./Example.md
 */

function Switch(_ref) {
  var value = _ref.value,
      color = _ref.color,
      on = _ref.on;
      _ref.off;
      var onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(React.Fragment, null, on ? /*#__PURE__*/React.createElement(Switch$1, {
    checked: value,
    onChange: onChange,
    sx: {
      ".MuiSwitch-thumb": {
        background: value ? color : "#758796"
      },
      ".MuiSwitch-track": {
        borderColor: value ? color : "#758796"
      },
      ".MuiSwitch-track:after": {
        content: '"On"',
        left: "6px",
        position: "absolute",
        fontFamily: '"Roboto"',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        top: "4px",
        lineHeight: "150%",
        textAlign: "right",
        color: "#0B0D17"
      },
      ".MuiSwitch-track:before": {
        content: '"Off"',
        right: "6px",
        top: "4px",
        position: "absolute",
        fontFamily: '"Roboto"',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "150%",
        textAlign: "right",
        color: "#0B0D17"
      }
    },
    name: "check",
    inputProps: {
      "aria-label": "secondary checkbox"
    }
  }) : /*#__PURE__*/React.createElement(Switch$1, {
    checked: value,
    onChange: onChange,
    sx: {
      ".MuiSwitch-thumb": {
        background: value ? color : "#758796"
      },
      ".MuiSwitch-track": {
        borderColor: value ? color : "#758796"
      }
    },
    name: "check",
    inputProps: {
      "aria-label": "secondary checkbox"
    }
  }));
}

Switch.propTypes = {
  value: PropTypes.bool,
  color: PropTypes.string,
  on: PropTypes.string,
  off: PropTypes.string,
  onChange: PropTypes.func
};
Switch.defaultProps = {
  value: false,
  color: "#00B674",
  onChange: undefined
};

var _excluded$1 = ["open", "onClose", "maxWidth"];
/**
 * @example ./Example.md
 */

function Dialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      maxWidth = _ref.maxWidth,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(Dialog$1, {
    sx: {
      maxWidth: maxWidth
    },
    onClose: onClose,
    open: open
  }, props.children);
}

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  maxWidth: PropTypes.string
};

var SimpleSelectWrapper = styled("div")({
  "& .MuiOutlinedInput-root": {
    background: "none",
    border: "0px",
    padding: "0 !important",
    "&:hover": {
      background: "#F4F5F7"
    },
    "& fieldset": {
      border: "0px"
    },
    "& > div": {
      paddingTop: "10px",
      paddingBottom: "9px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "150%",
      color: "#0B0D17"
    },
    "& > .MuiSvgIcon-root": {
      fill: "#898989"
    }
  },
  "& .MuiFormControl-root": {
    width: "auto",
    "& > label": {
      color: "#898989!important",
      left: "-5px",
      top: "-10px"
    }
  },
  "& .MuiList-root": {
    "& > li": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "150%",
      color: "#141416"
    },
    "& > li:hover": {
      background: "#FDFBFF"
    },
    "& > .Mui-selected": {
      background: "#FDFBFF"
    },
    "& > .Mui-selected:hover": {
      background: "#FDFBFF"
    }
  }
});
/**
 *
 * @example ./Example.md
 */

function SelectSimple(_ref) {
  var value = _ref.value,
      options = _ref.options,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(SimpleSelectWrapper, null, /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true
  }, value === "" ? /*#__PURE__*/React.createElement(InputLabel, {
    id: "simple-select-label",
    shrink: false
  }, placeholder) : "", /*#__PURE__*/React.createElement(Select$1, {
    labelId: "simple-select-label",
    id: "simple-select",
    value: value,
    className: value === "" ? "" : "select-simple-value",
    onChange: onChange
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.value,
      value: option.value,
      className: "simple-select-item"
    }, option.label);
  }))));
}

SelectSimple.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

var _excluded = ["variant", "open", "anchor", "sx", "hideBackdrop", "elevation", "PaperProps", "ModalProps", "container"];
/**
 * @example ./Example.md
 */

function Drawer(_ref) {
  var variant = _ref.variant,
      open = _ref.open,
      anchor = _ref.anchor,
      sx = _ref.sx;
      _ref.hideBackdrop;
      _ref.elevation;
      var PaperProps = _ref.PaperProps,
      ModalProps = _ref.ModalProps,
      container = _ref.container,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Drawer$1, {
    container: container,
    variant: variant,
    open: open,
    ModalProps: ModalProps,
    sx: sx,
    anchor: anchor,
    PaperProps: PaperProps
  }, props.children);
}

Drawer.propTypes = {
  variant: PropTypes.string,
  open: PropTypes.bool,
  anchor: PropTypes.string,
  sx: PropTypes.object,
  PaperProps: PropTypes.object,
  elevation: PropTypes.number,
  hideBackdrop: PropTypes.bool
};

/**
 * @example ./Example.md
 */

function IconButton(_ref) {
  var color = _ref.color,
      type = _ref.type,
      icon = _ref.icon,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(IconButton$1, {
    onClick: onClick,
    "aria-label": "delete"
  }, type === "text" ? /*#__PURE__*/React.createElement(Icon, {
    sx: {
      color: color
    }
  }, icon) : /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    width: "24",
    height: "24",
    src: icon,
    alt: icon
  }));
}

IconButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string
};

/**
 * @example ./Example.md
 */

function Tabs(_ref) {
  var value = _ref.value,
      type = _ref.type,
      options = _ref.options,
      variant = _ref.variant,
      orientation = _ref.orientation,
      activeIndicatorColor = _ref.activeIndicatorColor,
      tabColor = _ref.tabColor,
      activeColor = _ref.activeColor,
      onChange = _ref.onChange;

  var handleChange = function handleChange(event, newValue) {
    onChange(newValue);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, type === "text" ? /*#__PURE__*/React.createElement(Tabs$1, {
    TabIndicatorProps: {
      style: {
        background: activeIndicatorColor
      }
    },
    orientation: orientation,
    value: value,
    onChange: handleChange,
    variant: variant,
    "aria-label": "scrollable force tabs example",
    sx: {
      ".Mui-selected": {
        color: activeColor + "!important"
      },
      ".MuiTab-root": {
        color: tabColor
      }
    }
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Tab, {
      key: index,
      label: option
    });
  })) : /*#__PURE__*/React.createElement(Tabs$1, {
    TabIndicatorProps: {
      style: {
        background: activeIndicatorColor
      }
    },
    value: value,
    orientation: orientation,
    onChange: handleChange,
    variant: "scrollable",
    "aria-label": "scrollable",
    sx: {
      ".Mui-selected": {
        color: activeColor + "!important"
      },
      ".MuiTab-root": {
        color: tabColor
      }
    }
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Tab, {
      key: index,
      icon: option
    });
  })));
}

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  orientation: PropTypes.string,
  activeIndicatorColor: PropTypes.string.isRequired,
  tabColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * @example ./Example.md
 */

function CircularProgress(props) {
  return /*#__PURE__*/React.createElement(CircularProgress$1, props);
}

/**
 *
 * Richtext input component
 *
 * @example ./Example.md
 */

function RichInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      options = _ref.options,
      label = _ref.label,
      required = _ref.required,
      tooltip = _ref.tooltip,
      placeholder = _ref.placeholder,
      hasAddressBook = _ref.hasAddressBook,
      user = _ref.user,
      addressBook = _ref.addressBook,
      setAddressBook = _ref.setAddressBook,
      error = _ref.error;
  var editor = useMemo(function () {
    return withReferences(withReact(withHistory(createEditor())));
  }, []);
  var inputRef = useRef(null);

  var groupedOptions = _.groupBy(options, "group");

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      searchText = _useState4[0],
      setSearchText = _useState4[1];

  var _useState5 = useState("list"),
      _useState6 = _slicedToArray(_useState5, 2),
      addressBookView = _useState6[0],
      setAddressBookView = _useState6[1]; // add, edit


  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedAddress = _useState8[0],
      setSelectedAddress = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      focused = _useState10[0],
      setFocused = _useState10[1];

  var renderElement = useCallback(function (props) {
    return /*#__PURE__*/React.createElement(Element, props);
  }, []);
  var initialValue = useMemo(function () {
    var unserializeValue = function unserializeValue(val) {
      return val && val.split("\n").map(function (row) {
        return {
          type: "paragraph",
          children: row && row.split(" ").map(function (v) {
            if (/\{\{\s*([^}]+)\s*\}\}/g.test(v) && options.find(function (opt) {
              return opt.value === v;
            })) {
              return _objectSpread2({
                type: "reference",
                children: [{
                  text: ""
                }]
              }, options.find(function (opt) {
                return opt.value === v;
              }) || {});
            } else {
              return {
                text: v + " "
              };
            }
          }) || [{
            text: ""
          }]
        };
      }) || [{
        type: "paragraph",
        children: value ? unserializeValue(value) : [{
          text: ""
        }]
      }];
    };

    return unserializeValue(value);
  }, [value, options]);

  var serializeValue = function serializeValue(val) {
    if (!val) {
      return "";
    }

    return val.map(function (row) {
      return row.children && row.children.map(function (v) {
        if (v.type === "reference") {
          return v.value;
        }

        return v.text;
      }).join(" ") || "";
    }).join("\n");
  };

  var renderLabel = function renderLabel() {
    return /*#__PURE__*/React.createElement(Box, {
      component: "div",
      className: "rich-input__label-wrapper",
      onClick: function onClick() {
        setFocused(false);
      }
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "p",
      className: "rich-input__label"
    }, label), tooltip ? /*#__PURE__*/React.createElement(Tooltip$1, {
      title: tooltip,
      placement: "top",
      arrow: true
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "rich-input__label-tooltip"
    }, "error")) : "", required ? /*#__PURE__*/React.createElement(Typography, {
      variant: "p",
      sx: {
        marginBottom: "3px"
      },
      className: "required"
    }, "(required)") : "");
  };

  var renderDropdown = function renderDropdown() {
    var tabs = Object.keys(groupedOptions);

    if (hasAddressBook) {
      tabs.push("Address Book");
    }

    return focused ? /*#__PURE__*/React.createElement(Box, {
      className: "rich-input__dropdown"
    }, (tabs.length > 1 || tabs[0] === "Address Book") && /*#__PURE__*/React.createElement(Box, {
      className: "rich-input__dropdown-tabs-wrapper"
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: function onChange(index) {
        setTab(index);
      },
      options: tabs,
      orientation: "horizontal",
      activeIndicatorColor: "#A963EF",
      activeColor: "#8C30F5",
      type: "text",
      tabColor: "",
      variant: "scrollable"
    }), /*#__PURE__*/React.createElement(IconButton$1, {
      onClick: function onClick() {
        setFocused(false);
      },
      style: {
        marginRight: "4px",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(CloseIcon, null))), hasAddressBook && (tabs.length > 1 ? tab === tabs.indexOf("Address Book") : true) && (addressBookView === "add" || addressBookView === "edit") && /*#__PURE__*/React.createElement("div", {
      className: "rich-input__dropdown-address-book"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rich-input__dropdown-address-book-title",
      style: {
        marginLeft: addressBookView === "list" ? 0 : "auto"
      }
    }, addressBookView === "list" && "Address Book", addressBookView === "add" && "Add new", addressBookView === "edit" && "Edit"), /*#__PURE__*/React.createElement(IconButton$1, {
      onClick: function onClick() {
        if (addressBookView === "list") {
          setAddressBookView("add");
        } else {
          setSelectedAddress(null);
          setAddressBookView("list");
        }
      },
      style: {
        position: "absolute",
        left: addressBookView === "list" ? "auto" : "15px",
        right: addressBookView !== "list" ? "auto" : "15px"
      }
    }, addressBookView === "list" && /*#__PURE__*/React.createElement(PlusIcon, null), addressBookView === "add" && /*#__PURE__*/React.createElement(BackIcon, null), addressBookView === "edit" && /*#__PURE__*/React.createElement(BackIcon, null))), /*#__PURE__*/React.createElement(Box, null, Object.keys(groupedOptions).map(function (key, i) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: key
      }, groupedOptions[key].length > 0 && i === tab && renderSearch(), groupedOptions[key].length > 0 && /*#__PURE__*/React.createElement(Box, {
        className: "rich-input__dropdown-options-wrapper"
      }, /*#__PURE__*/React.createElement(Box, {
        sx: {
          display: i === tab ? "flex" : "none"
        },
        className: "rich-input__dropdown-options"
      }, groupedOptions[key].filter(function (opt) {
        return opt.label && opt.label.toLowerCase().includes(searchText.toLowerCase()) || opt.reference && opt.reference.toLowerCase().includes(searchText.toLowerCase());
      }).map(function (option) {
        return renderOption(option);
      }))));
    }), hasAddressBook && tab === tabs.indexOf("Address Book") && /*#__PURE__*/React.createElement(React.Fragment, null, addressBookView === "list" && /*#__PURE__*/React.createElement(React.Fragment, null, renderSearch(true), addressBook.length > 0 && /*#__PURE__*/React.createElement(Box, {
      sx: {
        display: tab === tabs.indexOf("Address Book") ? "flex" : "none"
      },
      className: "rich-input__dropdown-options"
    }, addressBook.filter(function (opt) {
      return opt.label && opt.label.toLowerCase().includes(searchText.toLowerCase()) || opt.reference && opt.reference.toLowerCase().includes(searchText.toLowerCase());
    }).map(function (option) {
      return renderOption(option);
    }))), addressBookView === "add" && /*#__PURE__*/React.createElement("div", {
      className: "rich-input__dropdown-address-book-form"
    }, /*#__PURE__*/React.createElement(AddAddressForm, {
      setAddressBookView: setAddressBookView,
      setAddressBook: setAddressBook,
      addressBook: addressBook,
      editor: editor,
      user: user
    })), addressBookView === "edit" && /*#__PURE__*/React.createElement("div", {
      className: "rich-input__dropdown-address-book-form"
    }, /*#__PURE__*/React.createElement(EditAddressForm, {
      setAddressBookView: setAddressBookView,
      setAddressBook: setAddressBook,
      addressBook: addressBook,
      editor: editor,
      selectedAddress: selectedAddress,
      setSelectedAddress: setSelectedAddress,
      user: user
    }))))) : null;
  };

  var renderSearch = function renderSearch() {
    var isAddressBook = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return /*#__PURE__*/React.createElement(Box, {
      className: "rich-input__dropdown-search-wrapper"
    }, /*#__PURE__*/React.createElement(TextField, {
      size: "small",
      placeholder: "Search...",
      fullWidth: true,
      value: searchText,
      autoComplete: "off",
      type: "text",
      className: "rich-input__search-input",
      InputProps: {
        startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(SearchIcon, null))
      },
      onChange: function onChange(e) {
        return setSearchText(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key !== "Escape") {
          e.stopPropagation();
        }
      },
      style: {
        flex: 1
      }
    }), isAddressBook && /*#__PURE__*/React.createElement(IconButton$1, {
      onClick: function onClick() {
        setAddressBookView("add");
      },
      style: {
        marginLeft: "6px"
      }
    }, /*#__PURE__*/React.createElement(PlusIcon, null)));
  };

  var renderOption = function renderOption(option) {
    return /*#__PURE__*/React.createElement(Box, {
      component: "div",
      key: option.value,
      className: "rich-input__dropdown-option ".concat(option.isAddressBook ? "has-actions" : "")
    }, /*#__PURE__*/React.createElement(Box, {
      component: "div",
      className: "rich-input__dropdown-option-frame",
      onClick: function onClick() {
        insertReference(editor, option);
      },
      onKeyDown: function onKeyDown(event) {
        if (event.key === "Enter") {
          insertReference(editor, option);
        }
      },
      tabIndex: "0",
      title: "".concat(option.label).concat(option.reference ? ": " + option.reference : "")
    }, option.icon ? /*#__PURE__*/React.createElement("img", {
      loading: "lazy",
      width: "16",
      height: "16",
      src: option.icon,
      alt: option.label
    }) : null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, option.label), " ", option.reference)), /*#__PURE__*/React.createElement("div", {
      className: "rich-input__dropdown-option-actions"
    }, option.isAddressBook && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton$1, {
      "aria-label": "edit",
      onClick: function onClick() {
        setSelectedAddress(option);
        ReactEditor.focus(editor);
        setAddressBookView("edit");
      }
    }, /*#__PURE__*/React.createElement(EditIcon, null)), /*#__PURE__*/React.createElement(IconButton$1, {
      "aria-label": "delete",
      onClick: function onClick() {
        handleOptionDelete(option);
      }
    }, /*#__PURE__*/React.createElement(Deleteicon, null)))));
  };

  var handleOptionDelete = function handleOptionDelete(option) {
    var newAddressBook = _toConsumableArray(addressBook.filter(function (address) {
      return address.value !== option.value && address.label !== option.label;
    }));

    localStorage.setItem("gr_addressBook__" + user, JSON.stringify(newAddressBook));
    ReactEditor.focus(editor);
    setAddressBook(newAddressBook);
  };

  return /*#__PURE__*/React.createElement(Foco, {
    onClickOutside: function onClickOutside() {
      setFocused(false);
    },
    onFocusOutside: function onFocusOutside() {
      setFocused(false);
      setSearchText("");
    }
  }, /*#__PURE__*/React.createElement(RichInputWrapper, {
    ref: inputRef
  }, /*#__PURE__*/React.createElement(Box, {
    className: "rich-input ".concat(error ? "has-error" : "")
  }, renderLabel(), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    editor: editor,
    value: initialValue,
    onChange: function onChange(value) {
      var isAstChange = editor.operations.some(function (op) {
        return "set_selection" !== op.type;
      });

      if (isAstChange) {
        _onChange(serializeValue(value));
      }
    }
  }, /*#__PURE__*/React.createElement(Editable, {
    placeholder: placeholder || "",
    renderPlaceholder: function renderPlaceholder(_ref2) {
      var children = _ref2.children,
          attributes = _ref2.attributes;
      return /*#__PURE__*/React.createElement("span", attributes, /*#__PURE__*/React.createElement("span", null, children));
    },
    editor: editor,
    renderElement: renderElement,
    onFocus: function onFocus() {
      setFocused(true);
    }
  }), (options.length > 0 || hasAddressBook) && renderDropdown())), Boolean(error) && /*#__PURE__*/React.createElement("div", {
    className: "error-message"
  }, error))));
}

var withReferences = function withReferences(editor) {
  var isInline = editor.isInline,
      isVoid = editor.isVoid;

  editor.isInline = function (element) {
    return element.type === "reference" ? true : isInline(element);
  };

  editor.isVoid = function (element) {
    return element.type === "reference" ? true : isVoid(element);
  };

  return editor;
};

var Reference = function Reference(_ref3) {
  var attributes = _ref3.attributes,
      children = _ref3.children,
      element = _ref3.element;
  return /*#__PURE__*/React.createElement(Box, _extends({}, attributes, {
    contentEditable: false,
    component: "span",
    className: "rich-input__reference"
  }), children, element.icon ? /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    width: "16",
    height: "16",
    src: element.icon,
    alt: element.label
  }) : null, /*#__PURE__*/React.createElement("span", null, element.label));
};

var insertReference = function insertReference(editor, option) {
  if (option && !option.insertValue) {
    var reference = _objectSpread2(_objectSpread2({
      type: "reference"
    }, option), {}, {
      children: [{
        text: ""
      }]
    });

    Transforms.insertNodes(editor, reference);
    Transforms.move(editor);
  } else {
    if (option && option.value) {
      Transforms.insertNodes(editor, {
        text: option.value
      });
      Transforms.move(editor);
    }
  }

  ReactEditor.focus(editor);
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case "reference":
      return /*#__PURE__*/React.createElement(Reference, props);

    default:
      return /*#__PURE__*/React.createElement("p", attributes, children);
  }
};

var AddAddressForm = function AddAddressForm(_ref4) {
  var addressBook = _ref4.addressBook,
      setAddressBook = _ref4.setAddressBook,
      setAddressBookView = _ref4.setAddressBookView,
      editor = _ref4.editor,
      user = _ref4.user;

  var _useState11 = useState(""),
      _useState12 = _slicedToArray(_useState11, 2),
      name = _useState12[0],
      setName = _useState12[1];

  var _useState13 = useState(""),
      _useState14 = _slicedToArray(_useState13, 2),
      address = _useState14[0],
      setAddress = _useState14[1];

  var handleSubmit = function handleSubmit() {
    if (name && address) {
      var newAddressBook = [{
        value: address,
        label: name,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGqSURBVHgBnVTLbcJAEF0bJMSNdGA6IBUAFYQOAhUEX0CccC78LlYqwKkAUkEowR1kS/CJn2Q771nexES242Wk9axmPW/efHYNkYrjOK1mszk3DGMYx3FL6ImcTqdtbgxlWa/XHlQXy46iKKiKZJomg+/g057NZrJOo+u6rev1+gxjH8aD0JDlcmkB9DcAP+fzWaUo85w2m00Hjj1RQeri/+ifqGnCAmWRaRayyMcsAyQYlH86nR5YI+wlbNtSn6ID1hXKQtdfMQEBWQF0BFuPzLUBlYRhmB0hi5/L5VI4BYU1tG07QM32THGxWNhJdNN0UU+PjLUBKXD2kfKgVqvtlA370hktTHm1Ws3BaEyybEramBGCDMF8LHQYsuhg5tAZV+o9c+QBLIB9i7RzU88FBLMONUcF4E72DLbkujUajQEDVAIEO47IAbqbdw6GB9TSzzvLBZxMJvy5L+6QG0DeDNTIEvoi1WzeACKVD6y9qC49lOUFj8ujatBfhl6abiVJpyHIdjv7wH5B+WjGW0U8Nm+A9cT5VO/oDyDfPM4Xth2hKWR5PB7bZPoNqljWhJyzkjoAAAAASUVORK5CYII=",
        group: "Address Book",
        reference: address,
        insertValue: true,
        isAddressBook: true
      }].concat(_toConsumableArray(addressBook));
      localStorage.setItem("gr_addressBook__" + user, JSON.stringify(newAddressBook));
      setAddressBook(newAddressBook);
      ReactEditor.focus(editor);
      setAddressBookView("list");
    } else {
      ReactEditor.focus(editor);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput, {
    label: "Name",
    placeholder: "Name",
    value: name,
    onChange: function onChange(e) {
      setName(e);
    }
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Contract Address",
    placeholder: "0x",
    value: address,
    onChange: function onChange(e) {
      setAddress(e);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    value: "Add Address",
    color: "primary",
    onClick: handleSubmit
  }));
};

var EditAddressForm = function EditAddressForm(_ref5) {
  var addressBook = _ref5.addressBook,
      setAddressBook = _ref5.setAddressBook,
      setAddressBookView = _ref5.setAddressBookView,
      editor = _ref5.editor,
      selectedAddress = _ref5.selectedAddress,
      setSelectedAddress = _ref5.setSelectedAddress,
      user = _ref5.user;

  var _useState15 = useState(selectedAddress.label || ""),
      _useState16 = _slicedToArray(_useState15, 2),
      name = _useState16[0],
      setName = _useState16[1];

  var _useState17 = useState(selectedAddress.value || ""),
      _useState18 = _slicedToArray(_useState17, 2),
      address = _useState18[0],
      setAddress = _useState18[1];

  var handleSubmit = function handleSubmit() {
    if (name && address) {
      var newAddressBook = _toConsumableArray(addressBook.map(function (addr) {
        if (addr.value === selectedAddress.value && addr.label === selectedAddress.label) {
          return _objectSpread2(_objectSpread2({}, addr), {}, {
            label: name,
            value: address,
            reference: address
          });
        }
      }));

      localStorage.setItem("gr_addressBook__" + user, JSON.stringify(newAddressBook));
      setAddressBook(newAddressBook);
      setSelectedAddress(null);
      ReactEditor.focus(editor);
      setAddressBookView("list");
    } else {
      ReactEditor.focus(editor);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput, {
    label: "Name",
    placeholder: "Name",
    value: name,
    onChange: function onChange(e) {
      setName(e);
    }
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Contract Address",
    placeholder: "0x",
    value: address,
    onChange: function onChange(e) {
      setAddress(e);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    value: "Save Address",
    color: "primary",
    onClick: handleSubmit
  }));
};

var RichInputWrapper = styled$1("div")({
  "& .rich-input": {
    fontFamily: "Roboto",
    position: "relative",
    marginBottom: "20px",
    '& p[data-slate-node="element"]': {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "32px",
      color: "#0B0D17",
      margin: 0,
      padding: 0,
      textAlign: "left"
    },
    '& [data-slate-placeholder="true"] p': {
      margin: 0
    },
    '& div[role="textbox"]': {
      background: "#F4F5F7",
      borderRadius: "5px",
      padding: "12px 15px",
      margin: 0,
      overflow: "hidden",
      boxSizing: "border-box",
      minHeight: "54px !important",
      border: "1px solid #DCDCDC",
      boxShadow: "none"
    },
    "& .rich-input__search-input .MuiOutlinedInput-root.Mui-focused": {
      border: "1px solid #8C30F5",
      boxShadow: "inset 0px 0px 0px 1px #8C30F5"
    },
    "& .rich-input__label-wrapper": {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      gap: "6px",
      marginBottom: "4px",
      "& > .required ": {
        marginLeft: "auto",
        fontSize: "14px",
        color: "#898989"
      }
    },
    "& .rich-input__label": {
      lineHeight: "150%",
      textAlign: "left"
    },
    "& .rich-input__label-tooltip": {
      marginBottom: "3px",
      color: "#898989",
      fontSize: "18px",
      ".": {
        backgroundColor: "#000"
      }
    },
    "& .rich-input__dropdown": {
      position: "absolute",
      left: 0,
      width: "100%",
      top: "calc(100% + 7px)",
      background: "#FFFFFF",
      border: "1px solid #DCDCDC",
      boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.15)",
      borderRadius: "5px",
      boxSizing: "border-box",
      //display: "none",
      zIndex: 2,
      "& .MuiOutlinedInput-input": {
        padding: "10px 70px 10px 15px"
      }
    },
    "& .rich-input__dropdown-search-wrapper": {
      margin: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap"
    },
    "& .rich-input__dropdown-tabs-wrapper": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      boxShadow: "inset 0px -2px 0px #F4F5F7",
      "& .MuiTabs-root": {
        background: "transparent"
      },
      "& .MuiTab-root": {
        textTransform: "initial",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "150%",
        color: "#0B0D17"
      }
    },
    "& .rich-input__dropdown-options-wrapper": {
      maxHeight: "285px",
      overflow: "auto",
      overscrollBehavior: "auto"
    },
    "& .rich-input__dropdown-options": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      flexDirection: "column",
      gap: "4px",
      paddingBottom: "10px",
      margin: "0px 10px 0"
    },
    "& .rich-input__dropdown-option": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      flexDirection: "row",
      gap: "4px",
      maxWidth: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      fontSize: "16px",
      color: "#0B0D17",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "normal",
      width: "100%",
      "& .rich-input__dropdown-option-actions": {
        display: "none",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "nowrap",
        flexDirection: "row",
        marginLeft: "auto",
        "& > * ": {
          marginLeft: "16px"
        },
        "& .MuiIconButton-root": {
          padding: 0
        }
      },
      "&.has-actions:hover .rich-input__dropdown-option-actions": {
        display: "flex"
      },
      "& span": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        color: "#898989",
        margin: "0px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      "& span strong": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "150%",
        color: "#141416",
        margin: "0px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: "30%"
      },
      "& .rich-input__dropdown-option-frame": {
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        gap: "5px",
        border: "1px solid #DCDCDC",
        padding: "4px",
        borderRadius: "5px",
        background: "#fff",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "100%",
        boxSizing: "border-box"
      },
      "& .rich-input__dropdown-option-frame:hover": {
        border: "1px solid #8C30F5"
      },
      "& .rich-input__dropdown-option-frame:focus": {
        border: "1px solid #8C30F5",
        outline: "none"
      }
    },
    "& .rich-input__reference": {
      background: "#FFFFFF",
      boxShadow: "inset 0px 0px 0px 1px #898989",
      borderRadius: "5px",
      padding: "2px 8px",
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      gap: "6px",
      margin: "2px",
      "& > img": {
        width: 16,
        height: 16
      },
      "& > span": {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        color: "#0B0D17",
        wordBreak: "break-word"
      }
    },
    "& .rich-input__dropdown-address-book": {
      background: "#FFFFFF",
      boxShadow: "inset 0px -2px 0px #F4F5F7",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "nowrap",
      flexDirection: "row",
      "& .rich-input__dropdown-address-book-title": {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "150%",
        marginRight: "auto"
      }
    },
    "& .rich-input__dropdown-address-book-form": {
      margin: "10px 10px 0",
      "& > .MuiBox-root": {
        marginBottom: "10px"
      },
      "& .MuiFormControl-root": {
        background: "none"
      }
    }
  },
  "& .rich-input.has-error": {
    '& p[data-slate-node="element"]': {},
    '& [data-slate-placeholder="true"] p': {},
    '& div[role="textbox"]': {
      border: "1px solid #FF5858",
      boxShadow: "inset 0px 0px 0px 1px #FF5858"
    },
    "& div.error-message": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#FF5858",
      marginTop: "4px"
    }
  }
});

var EditIcon = function EditIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_2185_50396)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.2353 0.765303C14.7821 0.312767 14.1678 0.0585938 13.5273 0.0585938C12.8869 0.0585938 12.2726 0.312767 11.8193 0.765303L0.976677 11.608C0.666178 11.9167 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9646V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9297 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.748C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18064C15.6877 3.72743 15.9417 3.11328 15.9417 2.47297C15.9417 1.83266 15.6877 1.21851 15.2353 0.765303ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6666H1.33334V13.9646C1.33267 13.7019 1.38411 13.4417 1.4847 13.1989C1.58529 12.9562 1.73302 12.7359 1.91934 12.5506L10.148 4.32197L11.6813 5.8553L3.44934 14.0813ZM14.292 3.23797L12.6213 4.9093L11.088 3.3793L12.7593 1.70797C12.86 1.60751 12.9795 1.52786 13.111 1.47358C13.2424 1.41929 13.3833 1.39143 13.5255 1.39158C13.6678 1.39174 13.8086 1.41991 13.9399 1.47448C14.0712 1.52905 14.1905 1.60896 14.291 1.70964C14.3915 1.81032 14.4711 1.9298 14.5254 2.06126C14.5797 2.19272 14.6076 2.33359 14.6074 2.47581C14.6072 2.61804 14.5791 2.75885 14.5245 2.89019C14.4699 3.02153 14.39 3.14084 14.2893 3.2413L14.292 3.23797Z",
    fill: "#8C30F5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_2185_50396"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
};

var Deleteicon = function Deleteicon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.9987 2.66667H11.932C11.7773 1.91428 11.3679 1.23823 10.7729 0.752479C10.1778 0.266727 9.4335 0.000969683 8.66536 0L7.33203 0C6.56389 0.000969683 5.81958 0.266727 5.22453 0.752479C4.62948 1.23823 4.2201 1.91428 4.06536 2.66667H1.9987C1.82189 2.66667 1.65232 2.7369 1.52729 2.86193C1.40227 2.98695 1.33203 3.15652 1.33203 3.33333C1.33203 3.51014 1.40227 3.67971 1.52729 3.80474C1.65232 3.92976 1.82189 4 1.9987 4H2.66536V12.6667C2.66642 13.5504 3.01795 14.3976 3.64284 15.0225C4.26774 15.6474 5.11497 15.9989 5.9987 16H9.9987C10.8824 15.9989 11.7297 15.6474 12.3546 15.0225C12.9794 14.3976 13.331 13.5504 13.332 12.6667V4H13.9987C14.1755 4 14.3451 3.92976 14.4701 3.80474C14.5951 3.67971 14.6654 3.51014 14.6654 3.33333C14.6654 3.15652 14.5951 2.98695 14.4701 2.86193C14.3451 2.7369 14.1755 2.66667 13.9987 2.66667ZM7.33203 1.33333H8.66536C9.07888 1.33384 9.48212 1.46225 9.81977 1.70096C10.1574 1.93967 10.413 2.27699 10.5514 2.66667H5.44603C5.58442 2.27699 5.83997 1.93967 6.17762 1.70096C6.51528 1.46225 6.91852 1.33384 7.33203 1.33333ZM11.9987 12.6667C11.9987 13.1971 11.788 13.7058 11.4129 14.0809C11.0378 14.456 10.5291 14.6667 9.9987 14.6667H5.9987C5.46827 14.6667 4.95956 14.456 4.58448 14.0809C4.20941 13.7058 3.9987 13.1971 3.9987 12.6667V4H11.9987V12.6667Z",
    fill: "#8C30F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.66667 12C6.84348 12 7.01305 11.9297 7.13807 11.8047C7.2631 11.6797 7.33333 11.5101 7.33333 11.3333V7.33329C7.33333 7.15648 7.2631 6.98691 7.13807 6.86189C7.01305 6.73686 6.84348 6.66663 6.66667 6.66663C6.48986 6.66663 6.32029 6.73686 6.19526 6.86189C6.07024 6.98691 6 7.15648 6 7.33329V11.3333C6 11.5101 6.07024 11.6797 6.19526 11.8047C6.32029 11.9297 6.48986 12 6.66667 12Z",
    fill: "#8C30F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.33464 12C9.51145 12 9.68102 11.9297 9.80604 11.8047C9.93106 11.6797 10.0013 11.5101 10.0013 11.3333V7.33329C10.0013 7.15648 9.93106 6.98691 9.80604 6.86189C9.68102 6.73686 9.51145 6.66663 9.33464 6.66663C9.15782 6.66663 8.98826 6.73686 8.86323 6.86189C8.73821 6.98691 8.66797 7.15648 8.66797 7.33329V11.3333C8.66797 11.5101 8.73821 11.6797 8.86323 11.8047C8.98826 11.9297 9.15782 12 9.33464 12Z",
    fill: "#8C30F5"
  }));
};

var PlusIcon = function PlusIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_2239_10657)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z",
    fill: "#8C30F5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_2239_10657"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
};

var BackIcon = function BackIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.9493 1.00338C11.949 1.26851 11.8435 1.52269 11.6559 1.71005L6.54125 6.82472C6.38644 6.97949 6.26363 7.16324 6.17985 7.36548C6.09606 7.56771 6.05294 7.78448 6.05294 8.00338C6.05294 8.22229 6.09606 8.43905 6.17985 8.64129C6.26363 8.84353 6.38644 9.02728 6.54125 9.18205L11.6493 14.29C11.8314 14.4787 11.9322 14.7313 11.9299 14.9935C11.9276 15.2556 11.8225 15.5065 11.6371 15.6919C11.4517 15.8773 11.2008 15.9824 10.9387 15.9847C10.6765 15.987 10.4239 15.8862 10.2353 15.7041L5.12725 10.6C4.44043 9.91188 4.05469 8.97932 4.05469 8.00705C4.05469 7.03478 4.44043 6.10223 5.12725 5.41405L10.2419 0.29605C10.3818 0.156106 10.56 0.0607924 10.754 0.0221697C10.9481 -0.0164531 11.1492 0.00335101 11.332 0.079076C11.5148 0.154801 11.671 0.283043 11.7809 0.447576C11.8907 0.612108 11.9493 0.805536 11.9493 1.00338Z",
    fill: "#8C30F5"
  }));
};

var CloseIcon = function CloseIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5024 9L13.25 6.24955C13.4284 6.04679 13.5229 5.78372 13.5143 5.5138C13.5057 5.24387 13.3946 4.98736 13.2036 4.7964C13.0127 4.60544 12.7562 4.49436 12.4862 4.48574C12.2163 4.47712 11.9532 4.57161 11.7505 4.75L9.00002 7.49763L6.24461 4.7415C6.14591 4.64281 6.02875 4.56452 5.8998 4.51111C5.77085 4.4577 5.63264 4.43021 5.49307 4.43021C5.35349 4.43021 5.21528 4.4577 5.08633 4.51111C4.95738 4.56452 4.84022 4.64281 4.74152 4.7415C4.64283 4.8402 4.56454 4.95737 4.51113 5.08632C4.45772 5.21526 4.43023 5.35347 4.43023 5.49305C4.43023 5.63262 4.45772 5.77083 4.51113 5.89978C4.56454 6.02873 4.64283 6.14589 4.74152 6.24459L7.49765 9L4.75002 11.7498C4.64227 11.8461 4.5553 11.9634 4.49443 12.0945C4.43357 12.2256 4.40009 12.3677 4.39605 12.5122C4.392 12.6567 4.41748 12.8004 4.47092 12.9347C4.52435 13.069 4.60463 13.191 4.70683 13.2932C4.80903 13.3954 4.93101 13.4757 5.0653 13.5291C5.19959 13.5826 5.34338 13.608 5.48785 13.604C5.63233 13.5999 5.77446 13.5665 5.90556 13.5056C6.03665 13.4447 6.15395 13.3578 6.25027 13.25L9.00002 10.5024L11.7469 13.25C11.9463 13.4493 12.2166 13.5613 12.4985 13.5613C12.7804 13.5613 13.0507 13.4493 13.25 13.25C13.4493 13.0507 13.5613 12.7803 13.5613 12.4985C13.5613 12.2166 13.4493 11.9462 13.25 11.7469L10.5024 9Z",
    fill: "#0B0D17"
  }));
};

RichInput.propTypes = {
  /** The field value */
  value: PropTypes.string.isRequired,

  /** Value change handler */
  onChange: PropTypes.func.isRequired,

  /** Field label */
  label: PropTypes.string,

  /** Available options */
  options: PropTypes.array,

  /** Field placeholder  */
  placeholder: PropTypes.string,

  /** Help text that will be shown in the tooltip  */
  tooltip: PropTypes.string,

  /** Is field required */
  required: PropTypes.bool,

  /** Error message */
  error: PropTypes.string,

  /** Is field allows to use Address Book */
  hasAddressBook: PropTypes.bool,

  /** User id, required if `hasAddressBook` is `true` */
  user: PropTypes.string,

  /** User's address book, required if `hasAddressBook` is `true` */
  addressBook: PropTypes.array,

  /** Address Book change handler, required if `hasAddressBook` is `true` */
  setAddressBook: PropTypes.func
};

/**
 *
 * @example ./Example.md
 */

function Tooltip(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Tooltip$1, {
    title: title,
    placement: "top",
    arrow: true
  }, children);
}

Tooltip.propTypes = {
  title: PropTypes.string.isRequired
};

/**
 *
 * @example ./Example.md
 */

function Menu(_ref) {
  var anchorEl = _ref.anchorEl,
      onClose = _ref.onClose,
      items = _ref.items,
      closeOnClick = _ref.closeOnClick,
      anchorOrigin = _ref.anchorOrigin,
      transformOrigin = _ref.transformOrigin;
  var open = Boolean(anchorEl);

  var handleClose = function handleClose() {
    onClose();
  };

  return /*#__PURE__*/React.createElement(Menu$1, {
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    anchorOrigin: anchorOrigin,
    transformOrigin: transformOrigin //hideBackdrop

  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: item.key,
      onClick: function onClick() {
        if (item.onClick) {
          item.onClick();
        }

        if (closeOnClick) {
          handleClose();
        }
      }
    }, item.label ? item.label : item.Component ? item.Component : null);
  }));
}

Menu.propTypes = {
  /** Anchor element */
  anchorEl: PropTypes.element,

  /** Function called on menu close */
  onClose: PropTypes.func.isRequired,

  /** Menu items */
  items: PropTypes.array,

  /** If menu should be closed on item click */
  closeOnClick: PropTypes.bool,

  /** Point on the anchor where the dropdown will be attached */
  anchorOrigin: PropTypes.object,

  /** Point on the dropdown which will be attached to the anchor's origin. */
  transformOrigin: PropTypes.object
};
Menu.defaultProps = {
  anchorEl: null,
  items: []
};

var palette = {
  primary: {
    main: "#8C30F5"
  },
  secondary: {
    main: "#0B0D17"
  }
};

var severity = {
  info: {
    main: "#F1E4FF"
  },
  error: {
    main: "#FFE7E7"
  },
  warning: {
    main: "#FFF1D7"
  }
};

var typography = {
  h2: {
    fontSize: 20,
    color: "#0B0D17",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "110%"
  },
  h3: {
    fontSize: 30,
    color: "#0B0D17",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%"
  },
  p: {
    fontSize: 16,
    fontFamily: '"Roboto"',
    color: "#0B0D17",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "150%"
  },
  span: {
    fontFamily: '"Roboto"',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#898989"
  }
};

var MuiAlert = {
  styleOverrides: {
    message: function message(_ref) {
      var theme = _ref.theme;
      return {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "150%",
        textAlign: "left",
        color: theme.palette.secondary.main
      };
    },
    icon: {
      marginRight: "10px",
      fontSize: "20px"
    },
    standardError: {
      backgroundColor: "#FFE7E7!important",
      "& .MuiAlert-icon": {
        color: "#FF5858!important"
      }
    },
    standardWarning: {
      backgroundColor: "#FFF1D7!important",
      "& .MuiAlert-icon": {
        color: "#FFB930!important"
      }
    },
    standardInfo: {
      backgroundColor: "#F1E4FF!important",
      "& .MuiAlert-icon": {
        color: "#8C30F5!important"
      }
    }
  }
};

var MuiSwitch = {
  styleOverrides: {
    root: {
      width: "45px",
      height: "auto",
      padding: "0px",
      "& .Mui-checked+.MuiSwitch-track": {
        backgroundColor: "#fff!important",
        opacity: 1
      },
      "& .Mui-checked > .MuiSwitch-thumb": {}
    },
    track: {
      height: "24px",
      borderRadius: "16px",
      border: "1px solid #758796",
      backgroundColor: "#fff!important"
    },
    thumb: {
      width: "18px",
      height: "18px",
      background: "#758796",
      boxShadow: "none",
      marginTop: "1px"
    },
    switchBase: {
      padding: "3px",
      "&:hover": {
        background: "none"
      }
    }
  }
};

var MuiTooltip = {
  styleOverrides: {
    tooltip: {
      background: "#000",
      width: "160px",
      padding: "10px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "150%"
    },
    arrow: {
      color: "#000"
    }
  }
};

var MuiFormControl = {
  styleOverrides: {
    root: {
      "&.custom-text-input": {
        marginTop: "4px",
        padding: "0px",
        width: "100%",
        "& input": {
          padding: "15px 5px 15px 15px !important"
        },
        "& textarea": {
          padding: "15px 5px 15px 15px"
        },
        "& fieldset": {
          border: "none"
        },
        "&.input-filled .MuiOutlinedInput-root": {
          boxShadow: "inset 0px 0px 0px 1px #8C30F5",
          border: "1px solid #8C30F5"
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          boxShadow: "inset 0px 0px 0px 1px #8C30F5",
          border: "1px solid #8C30F5"
        }
      }
    }
  }
};

var MuiOutlinedInput = {
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
        background: "#FFFFFF"
      },
      "& .icon_second": {
        marginLeft: "-5px"
      },
      "& .icon_first": {
        zIndex: "1"
      }
    },
    notchedOutline: {
      border: 0
    },
    input: {
      padding: "15px 70px 15px 15px"
    }
  }
};

var MuiFilledInput = {
  styleOverrides: {
    root: {
      borderRadius: 4,
      border: "1px solid #DCDCDC",
      paddingTop: "0px!important",
      background: "#F4F5F7!important",
      "& img": {
        marginRight: "0px"
      },
      "& li": {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: "4px",
        borderRadius: "4px",
        border: "1px solid #DCDCDC",
        marginRight: "5px",
        marginTop: "10px",
        marginBottom: "10px",
        overflow: "hidden",
        whiteSpace: "normal",
        textOverflow: "ellipsis",
        "& > img": {
          border: 0
        }
      },
      "& .icon_second": {
        marginLeft: "-4px",
        backgroundColor: "#FFFFFF"
      },
      "& .icon_first": {
        marginRight: "0px",
        backgroundColor: "#FFFFFF"
      },
      "&:hover:not(.Mui-disabled):before": {
        border: 0
      },
      "&:hover": {
        background: "#F4F5F7!important"
      },
      "&:after": {
        border: 0
      },
      "&:before": {
        border: 0
      }
    }
  }
};

var MuiAutocomplete = {
  styleOverrides: {
    root: {
      "& .MuiInputAdornment-root": {
        marginLeft: "0px",
        marginRight: "0px",
        width: "24px",
        height: "24px",
        "& > img": {
          border: "1px solid #DCDCDC",
          padding: "4px",
          borderRadius: "5px",
          marginLeft: "-5px",
          background: "#FFFFFF"
        }
      },
      "& .MuiOutlinedInput-root": {
        marginTop: "4px",
        border: "1px solid #DCDCDC",
        borderRadius: "5px",
        background: "#F4F5F7",
        padding: "0px 10px 0px 10px!important",
        "& > img": {
          border: "1px solid #DCDCDC",
          padding: "4px",
          borderRadius: "5px",
          background: "#FFFFFF"
        },
        "& .icon_second": {
          marginLeft: "-5px"
        },
        "& .icon_first": {
          zIndex: "1"
        }
      },
      "& .MuiFilledInput-root": {
        borderRadius: 4,
        border: "1px solid #DCDCDC",
        paddingTop: "0px!important",
        background: "#F4F5F7!important",
        "& img": {
          marginRight: "0px"
        },
        "& li": {
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: "4px",
          borderRadius: "4px",
          border: "1px solid #DCDCDC",
          marginRight: "5px",
          marginTop: "10px",
          marginBottom: "10px",
          overflow: "hidden",
          whiteSpace: "normal",
          textOverflow: "ellipsis",
          "& > img": {
            border: 0
          }
        },
        "& .icon_second": {
          marginLeft: "-4px",
          backgroundColor: "#FFFFFF"
        },
        "& .icon_first": {
          marginRight: "0px",
          backgroundColor: "#FFFFFF"
        },
        "&:hover:not(.Mui-disabled):before": {
          border: "0 !important"
        },
        "&:hover": {
          background: "#F4F5F7!important"
        },
        "&:after": {
          border: "0 !important"
        },
        "&:before": {
          border: "0 !important"
        }
      },
      "& .MuiInputBase-sizeSmall": {
        width: "240px"
      },
      "& > div > .Mui-focused": {
        boxShadow: "inset 0px 0px 0px 1px #8C30F5",
        border: "1px solid #8C30F5"
      },
      position: "relative",
      "& .paid-label": {
        position: "absolute",
        top: "25px",
        right: "50px",
        backgroundColor: "#FF5858",
        borderRadius: "2px"
      },
      "& .paid-label span": {
        padding: "2px 6px",
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "8px",
        margin: "0px",
        display: "flex"
      },
      "& .MuiIcon-root": {
        fontSize: "24px"
      },
      "&.Mui-focused": {
        "& .MuiFilledInput-root": {
          boxShadow: "inset 0px 0px 0px 1px #8C30F5"
        }
      },
      notchedOutline: {
        border: 0
      },
      input: {
        padding: "15px 70px 15px 15px"
      }
    },
    listbox: {
      "& > li:first-of-type > .MuiListSubheader-root": {
        border: "0px",
        padding: "0px"
      },
      '& .MuiAutocomplete-option[aria-disabled="true"]': {
        opacity: 1
      }
    },
    option: {
      fontSize: "16px",
      color: "#0B0D17",
      textOverflow: "ellipsis",
      overflow: "hidden",
      "&:hover": {
        backgroundColor: "#FDFBFF"
      },
      "& .icon_second": {
        marginLeft: "-5px",
        backgroundColor: "#FFFFFF"
      },
      "& .icon_first": {
        zIndex: "1",
        backgroundColor: "#FFFFFF"
      },
      "& img": {
        backgroundColor: "#FFFFFF"
      },
      "& h5": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "150%",
        color: "#141416",
        margin: "0px"
      },
      "& span": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        color: "#898989",
        margin: "0px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "260px"
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
        whiteSpace: "nowrap"
      },
      "& .paid-label": {
        backgroundColor: "#FF5858",
        borderRadius: "2px",
        right: "15px",
        margin: "0px",
        display: "flex",
        marginLeft: "auto"
      },
      "& .paid-label span": {
        padding: "2px 6px",
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "8px",
        margin: "0px",
        overflow: "inherit",
        whiteSpace: "inherit",
        width: "inherit"
      }
    },
    groupLabel: {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "10px",
      padding: "8px 0px",
      borderTop: "1px solid #DCDCDC",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#898989"
    },
    groupUl: {
      padding: "0px",
      "& > .MuiAutocomplete-option": {
        paddingLeft: "15px"
      }
    },
    input: {
      padding: "15px 70px 15px 5px!important"
    },
    endAdornment: {
      "& > button": {
        visibility: "visible",
        background: "#898989",
        padding: "2px",
        marginRight: "10px",
        "& > svg": {
          fill: "#fff",
          fontSize: "16px"
        }
      }
    }
  }
};

var MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: 5,
      padding: "10px 20px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: "150%",
      textAlign: "center",
      textTransform: "none",
      color: "#FFFFFF",
      boxShadow: "initial",
      margin: "10px 0px",
      "& span": {
        marginRight: "10px",
        "& img": {
          padding: "4px",
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          border: "1px solid #DCDCDC"
        }
      },
      "&:hover": {
        opacity: 0.7
      }
    },
    containedPrimary: function containedPrimary(_ref) {
      var theme = _ref.theme;
      return {
        "&:disabled": {
          opacity: 0.4,
          backgroundColor: theme.palette.primary.main,
          color: "#FFFFFF"
        }
      };
    },
    containedSecondary: function containedSecondary(_ref2) {
      var theme = _ref2.theme;
      return {
        "&:disabled": {
          opacity: 0.4,
          backgroundColor: theme.palette.secondary.main,
          color: "#FFFFFF"
        }
      };
    },
    sizeSmall: {
      width: 167
    },
    sizeLarge: {
      width: "100%"
    },
    outlinedPrimary: {
      color: "#8C30F5",
      border: "1px solid #8C30F5"
    },
    outlinedSecondary: {
      color: "#0B0D17",
      border: "1px solid #0B0D17"
    }
  }
};

var MuiModal = {
  styleOverrides: {
    root: {
      margin: "0 auto"
    }
  }
};

var MuiBackdrop = {
  styleOverrides: {
    root: {
      background: "rgba(11, 13, 23, 0.5)",
      backdropFilter: "blur(20px)"
    }
  }
};

var MuiDialog = {
  styleOverrides: {
    container: {
      "& > div": {
        width: "100%",
        margin: "30px",
        padding: "20px",
        borderRadius: 10
      }
    }
  }
};

var MuiMenu = {
  styleOverrides: {
    root: {
      "& .MuiBackdrop-root": {
        opacity: "0 !important"
      }
    },
    paper: {
      background: "#FFFFFF !important",
      border: "1px solid #DCDCDC !important",
      boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.15) !important",
      borderRadius: "5px !important",
      color: "#0B0D17",
      padding: "0 10px !important"
    },
    list: {
      "& li:hover": {
        background: "#FDFBFF !important",
        borderRadius: "5px !important"
      }
    }
  }
};

var MuiTabs = {
  styleOverrides: {
    root: {
      background: "#FDFBFF"
    }
  }
};

var MuiTab = {
  styleOverrides: {
    root: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "150%",
      textAlign: "right"
    }
  }
};

var MuiList = {
  styleOverrides: {
    root: {
      "& .MuiMenuItem-root.select-item": {
        margin: "4px 0px",
        padding: "0px 5px 0px 5px",
        "&:hover": {
          backgroundColor: "#FDFBFF"
        },
        "&.Mui-selected": {
          backgroundColor: "#FDFBFF"
        },
        "& #search-input": {
          padding: "10px 70px 10px 15px"
        },
        "& .MuiOutlinedInput-root": {
          justifyContent: "flex-start",
          "& .MuiInputAdornment-root": {
            maxWidth: "16px"
          }
        },
        "& .icon_second": {
          marginLeft: "-17px",
          background: "#FFFFFF"
        },
        "& .icon_first": {
          zIndex: "1",
          background: "#FFFFFF"
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
          whiteSpace: "nowrap"
        },
        "& .img_box_icon img": {
          border: "1px solid #DCDCDC",
          padding: "5px",
          gap: "5px",
          borderRadius: "5px",
          background: "#FFFFFF"
        },
        "& .full_img_box .icon_second": {
          marginLeft: "0px"
        },
        "& .img_box_icon .icon_second": {
          marginLeft: "-10px"
        },
        "& .onlyImg": {
          border: 0,
          background: "initial"
        },
        "& .onlyImg img": {
          display: "flex",
          alignItems: "center",
          border: "1px solid #DCDCDC",
          padding: "5px",
          gap: "5px",
          borderRadius: "5px",
          background: "#FFFFFF"
        },
        "& > div": {
          display: "flex",
          alignItems: "center",
          padding: "5px",
          gap: "5px"
        },
        "& h5": {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "150%",
          color: "#141416",
          margin: "0px"
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
          textOverflow: "ellipsis"
        }
      },
      "& .MuiMenuItem-root.simple-select-item": {
        "&:hover": {
          backgroundColor: "#FDFBFF"
        },
        "&.Mui-selected": {
          backgroundColor: "#FDFBFF"
        }
      }
    }
  }
};

var components = {
  MuiAlert: MuiAlert,
  MuiAutocomplete: MuiAutocomplete,
  MuiBackdrop: MuiBackdrop,
  MuiButton: MuiButton,
  MuiDialog: MuiDialog,
  MuiFilledInput: MuiFilledInput,
  MuiFormControl: MuiFormControl,
  MuiList: MuiList,
  MuiMenu: MuiMenu,
  MuiModal: MuiModal,
  MuiOutlinedInput: MuiOutlinedInput,
  MuiSwitch: MuiSwitch,
  MuiTab: MuiTab,
  MuiTabs: MuiTabs,
  MuiTooltip: MuiTooltip
};

var theme = createTheme({
  palette: palette,
  severity: severity,
  typography: typography,
  components: components
});

/**
 * Grindery UI theme provider. All other components must be children of the Provider component. It is a good practice to add ThemeProvider at the highest level, for example in the App.js file.
 *
 * @example ./Example.md
 */

function ThemeProvider(props) {
  return /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: props.theme
  }, props.children);
}

ThemeProvider.propTypes = {
  /** Custom theme (See Material UI theme for reference: https://mui.com/material-ui/customization/theming/) */
  theme: PropTypes.object
};
ThemeProvider.defaultProps = {
  theme: theme
};

export { Alert, Autocomplete, Button, CircularProgress, Dialog, Drawer, IconButton, Menu, RichInput, Select, SelectSimple, SuffixInput, Switch, Tabs, Text, TextInput, ThemeProvider, Tooltip };
