import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useUserPreferencesSelector = () => {
  return useTypedSelector((state) => state.userInfo.userPreferences);
};

export const useUserLocation = () => {
  return useTypedSelector((state) => state.userInfo.userLocation);
};
