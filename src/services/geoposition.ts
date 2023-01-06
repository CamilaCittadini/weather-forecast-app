import axios from "axios";

interface GetCityResponse {
  data: City[];
}

interface City {
  country?: string;
  name: string;
  lat: number;
  lon: number;
  state?: string;
}

//Api call to retrieve current city's information
export const getCity = async (city: string) => {
  return await axios<any, GetCityResponse>({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=e4bec65652816c75b5ccb48883534027`,
    method: "GET",
  });
};
