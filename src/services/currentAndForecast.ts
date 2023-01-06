import axios from "axios";

interface LocationParamsType {
  lat?: number;
  lon?: number;
}

interface Weather {
  data?: WeatherData;
}

export interface WindType {
  deg?: number;
  speed?: number;
}

interface MainType {
  temp?: number;
  temp_max?: number;
  temp_min?: number;
  humidity?: number;
}

interface WeatherData {
  id?: number;
  main?: MainType;
  name?: string;
  sys?: {
    country: string;
  };
  wind?: WindType;
  weather?: WeatherType[];
}

interface WeatherType {
  main?: WeatherTypes;
}

export type WeatherTypes = "Clear" | "Rain" | "Snow" | "Clouds" | "-";

interface Forecast {
  data?: ForecastData;
}

export interface ForecastData {
  list: ListItem[];
}

interface ListItem {
  dt_txt: string;
  main: MainType;
  pop: number;
  weather?: WeatherType[];
  wind?: WindType;
}

//Api call to retrieve current weather conditions based on location
export const getCurrentWeather = async (location: LocationParamsType) => {
  return await axios<any, Weather>({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=e4bec65652816c75b5ccb48883534027`,
    method: "GET",
  });
};

//Api call to retrieve forecast based on location
export const getForecast = async (id?: number) => {
  return await axios<any, Forecast>({
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=e4bec65652816c75b5ccb48883534027`,
    method: "GET",
  });
};
