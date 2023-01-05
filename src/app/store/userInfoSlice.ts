import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userInfoType {
  userLocation: { latitude: number; longitude: number };
  userPreferences: { themeMode: "light" | "dark" };
}

const initialState: userInfoType = {
  userLocation: { latitude: 0, longitude: 0 },
  userPreferences: { themeMode: "light" },
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
  },
});

// Action creators are generated for each case reducer function
export const { onThemeToggleChanged, onLocationObtained } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
