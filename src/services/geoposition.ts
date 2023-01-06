import axios from "axios";
import type { GetCityResponse } from "../interfaces";

//Api call to retrieve current city's information
export const getCity = async (city: string) => {
  return await axios<any, GetCityResponse>({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`,
    method: "GET",
  });
};
