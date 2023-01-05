import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Search = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "solid",
  borderWidth: "1px",
  borderColor: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchInput = ({ onChange, ...rest }: { onChange: any }) => {
  return (
    <Search {...rest}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledTextField
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
      />
    </Search>
  );
};

export default SearchInput;
