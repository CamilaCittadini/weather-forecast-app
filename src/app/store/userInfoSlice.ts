import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ForecastData } from "../../services/currentAndForecast";

export interface userInfoType {
  userLocation: { latitude: number; longitude: number };
  userPreferences: { themeMode: "light" | "dark" };
  userLocalForecast: ForecastData;
}

const initialState: userInfoType = {
  userLocation: { latitude: 0, longitude: 0 },
  userPreferences: { themeMode: "light" },
  userLocalForecast: { list: [] },
};
//slice is a function that accepts an initial state, an object of reducer functions and a slice name
//and generates action creators and action types that correspond to the reducers and state
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    onThemeToggleChanged: (state, action: PayloadAction<"light" | "dark">) => {
      state.userPreferences.themeMode = action.payload;
    },
    onLocationObtained: (state, action: PayloadAction<GeolocationPosition>) => {
      state.userLocation.latitude = action.payload.coords.latitude;
      state.userLocation.longitude = action.payload.coords.longitude;
    },
    onLocalForecastObtained: (
      state,
      action: PayloadAction<ForecastData | undefined>
    ) => {
      if (action.payload) {
        state.userLocalForecast.list = action.payload.list;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onThemeToggleChanged,
  onLocationObtained,
  onLocalForecastObtained,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
