import { Stack } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SearchInput from "../SearchInput";
import { getCity } from "../../services/geoposition";
import { useQuery } from "react-query";
import WeatherCard from "../WeatherCard";
import { getCurrentWeather } from "../../services/currentAndForecast";

const Search = () => {
  const [inputCity, setInputCity] = useState<string>("");
  const { data: city } = useQuery(["get-city", inputCity], () =>
    getCity(inputCity)
  );

  console.log("aaaa", city);

  const { data: weather } = useQuery(
    ["current-weather", city],
    () =>
      getCurrentWeather({
        lat: city?.data?.[0]?.latitude,
        lon: city?.data?.[0]?.longitude,
      }),
    {
      enabled: !!city,
    }
  );

  return (
    <Stack direction="row" justifyContent="center" sx={{ marginTop: 10 }}>
      <Stack direction="column" alignItems={"center"} spacing={5}>
        <SearchInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputCity(e.target.value)
          }
        />
        {weather && (
          <WeatherCard
            city={weather?.data?.name}
            humidity={weather?.data?.main?.humidity}
            temperature={weather?.data?.main?.temp}
            wind={weather?.data?.wind?.speed}
            skyCondition={weather?.data?.weather?.[0]?.main}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default Search;
