// Weather and forecast
export interface LocationParamsType {
  lat?: number;
  lon?: number;
}

export interface Weather {
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

export interface WeatherData {
  id?: number;
  main?: MainType;
  name?: string;
  sys?: {
    country: string;
  };
  wind?: WindType;
  weather?: WeatherType[];
}

export interface WeatherType {
  main?: WeatherTypes;
}

export type WeatherTypes = "Clear" | "Rain" | "Snow" | "Clouds" | "-";

export interface Forecast {
  data?: ForecastData;
}

export interface ForecastData {
  list: ListItem[];
}

export interface ListItem {
  dt_txt: string;
  main: MainType;
  pop: number;
  weather?: WeatherType[];
  wind?: WindType;
}

// Geoposition
export interface GetCityResponse {
  data: City[];
}

export interface City {
  country?: string;
  name: string;
  lat: number;
  lon: number;
  state?: string;
}
