import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useUserPreferencesSelector } from "../../app/store/userSelectors";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Forecast from "../pages/Forecast";
import { useDispatch } from "react-redux";
import { onLocationObtained } from "../../app/store/userInfoSlice";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";

const Layout = () => {
  const userPreference = useUserPreferencesSelector();

  const theme = createTheme({
    palette: {
      mode: userPreference.themeMode,
    },
  });

  //get user's current location with useEffect, and then dispatches the location to the store
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => dispatch(onLocationObtained(position)),
      (err) => console.log("user denied geolocation", err)
    );
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Paper sx={{ height: "85vh" }} elevation={0}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/forecast" element={<Forecast />}></Route>
        </Routes>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
};

export { Layout };
