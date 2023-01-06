import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material/";
import { useUserPreferencesSelector } from "../app/store/userSelectors";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Forecast } from "../pages/Forecast";
import { Footer } from "./Footer";
import { GetGeoPosition } from "./GetGeoposition";

const Layout = () => {
  const userPreference = useUserPreferencesSelector();

  const theme = createTheme({
    palette: {
      mode: userPreference.themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GetGeoPosition>
        <Header />
        <Paper sx={{ height: "85vh" }} elevation={0}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/forecast" element={<Forecast />}></Route>
          </Routes>
        </Paper>
        <Footer />
      </GetGeoPosition>
    </ThemeProvider>
  );
};

export { Layout };
