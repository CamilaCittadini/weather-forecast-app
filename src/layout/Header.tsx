import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Button, ButtonGroup, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import {
  onTemperatureUnitChanged,
  TemperatureUnits,
} from "../app/store/userInfoSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const [openNav, setOpenNav] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleNav = (state: boolean) => {
    setOpenNav(state);
  };

  const handleTemperatureUnitChange = (newState: TemperatureUnits) => {
    dispatch(onTemperatureUnitChanged(newState));
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderNav = (
    <Drawer
      id={menuId}
      keepMounted
      anchor="left"
      open={openNav}
      onClose={() => setOpenNav(false)}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link
          to="/forecast"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Forecast
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
          Search
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}></MenuItem>
    </Drawer>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => handleNav(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Weatherly
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <ButtonGroup
            variant="contained"
            aria-label="outlined button group"
            size="small"
            color="primary"
            sx={{ marginRight: 3 }}
          >
            <Button onClick={() => handleTemperatureUnitChange("kelvin")}>
              K
            </Button>
            <Button onClick={() => handleTemperatureUnitChange("celsius")}>
              ??C
            </Button>
            <Button onClick={() => handleTemperatureUnitChange("fahrenheit")}>
              ??F
            </Button>
          </ButtonGroup>

          <ThemeToggle />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderNav}
    </Box>
  );
}

export { Header };
