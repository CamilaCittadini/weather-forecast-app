import axios from "axios";

interface LocationParamsType {
  lat?: number;
  lon?: number;
}

interface Weather {
  data?: WeatherData;
}

interface WeatherData {
  main?: {
    temp?: number;
    temp_max?: number;
    temp_min?: number;
    humidity?: number;
  };
  name?: string;
  wind?: {
    speed?: number;
  };
  weather?: WeatherType[];
}

interface WeatherType {
  main?: WeatherTypes;
}

export type WeatherTypes = "Clear" | "Rain" | "Snow" | "Clouds" | "-";

//Api call to retrieve current weather conditions based on location
export const getCurrentWeather = async (location: LocationParamsType) => {
  return await axios<any, Weather>({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=e4bec65652816c75b5ccb48883534027`,
    method: "GET",
  });
};

//Api call to retrieve forecast based on location
export const getForecast = async (location: LocationParamsType) => {
  return await axios<any, Weather>({
    url: `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${location.lat}&lon=${location.lon}&appid=e4bec65652816c75b5ccb48883534027`,
    method: "GET",
  });
};
