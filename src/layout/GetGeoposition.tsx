import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onLocationObtained } from "../app/store/userInfoSlice";

const GetGeoPosition = ({ children }: { children: React.ReactNode }) => {
  //get user's current location with useEffect, and then dispatches the location to the store
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => dispatch(onLocationObtained(position)),
      (err) => console.log("user denied geolocation", err)
    );
  }, [dispatch]);

  return <>{children}</>;
};

export { GetGeoPosition };
