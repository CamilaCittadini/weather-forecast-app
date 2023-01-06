import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Autocomplete, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchInput = ({
  value,
  onChange,
  onInputChange,
  options,
  ...rest
}: {
  value?: any;
  onChange?: any;
  onInputChange?: any;
  options: any[];
}) => {
  return (
    <Search sx={{ width: "300px" }} {...rest}>
      <StyledAutocomplete
        disablePortal
        value={value}
        onInputChange={(e, v) => onInputChange(v)}
        onChange={(e, v) => onChange(v)}
        options={options}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </Search>
  );
};

export default SearchInput;
