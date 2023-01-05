import axios from "axios";

interface GetCityResponse {
  data: City[];
}

interface City {
  name: string;
  latitude: number;
  longitude: number;
}

//Api call to retrieve current city's information
export const getCity = async (city: string) => {
  return await axios<any, GetCityResponse>({
    url: `https://api.api-ninjas.com/v1/city?name=${city}`,
    headers: { "X-Api-Key": "oGPqlj1yfagjkpGlZ7bEdg==C5v5LggeXUaAJYDi" },
    method: "GET",
  });
};
