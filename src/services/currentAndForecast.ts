import axios from "axios";
import type { Forecast, LocationParamsType, Weather } from "../interfaces";

//Api call to retrieve current weather conditions based on location
export const getCurrentWeather = async (location: LocationParamsType) => {
  return await axios<any, Weather>({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`,
    method: "GET",
  });
};

//Api call to retrieve forecast based on location
export const getForecast = async (id?: number) => {
  return await axios<any, Forecast>({
    url: `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_API_KEY}`,
    method: "GET",
  });
};
