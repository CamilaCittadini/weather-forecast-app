import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Option, SearchInput } from "../components/SearchInput";
import { getCity } from "../services/geoposition";
import { useQuery } from "react-query";
import WeatherCard from "../components/WeatherCard";
import { getCurrentWeather } from "../services/currentAndForecast";

const Search = () => {
  const [inputCity, setInputCity] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<{
    label: string;
    lat: number;
    lon: number;
  } | null>(null);
  const { data: city } = useQuery(["get-city", inputCity], () =>
    getCity(inputCity)
  );

  const { data: weather } = useQuery(
    ["current-weather", selectedCity],
    () =>
      getCurrentWeather({
        lat: selectedCity?.lat,
        lon: selectedCity?.lon,
      }),
    {
      enabled: !!city,
    }
  );

  return (
    <Stack direction="row" justifyContent="center" sx={{ paddingTop: 10 }}>
      <Stack direction="column" alignItems={"center"} spacing={5}>
        <Typography
          sx={{ fontSize: 20, fontWeight: 800 }}
          color="text.secondary"
          gutterBottom
        >
          Search the weather conditions in your city
        </Typography>
        <SearchInput
          onChange={(value: Option) => setSelectedCity(value)}
          onInputChange={(value: string) => setInputCity(value)}
          options={
            city?.data?.map((city) => {
              return {
                label: getCityLabel(city?.name, city?.state, city?.country),
                lat: city?.lat,
                lon: city?.lon,
              };
            }) || []
          }
        />

        {weather && (
          <WeatherCard
            city={weather?.data?.name}
            country={weather?.data?.sys?.country}
            humidity={weather?.data?.main?.humidity}
            temperature={weather?.data?.main?.temp}
            windSpeed={weather?.data?.wind?.speed}
            skyCondition={weather?.data?.weather?.[0]?.main}
          />
        )}
      </Stack>
    </Stack>
  );
};

export { Search };

const getCityLabel = (city?: string, state?: string, country?: string) => {
  return `${formattedLabel(city)} ${formattedLabel(state)} ${country}`;
};

const formattedLabel = (str?: string) => {
  return str ? `${str},` : "";
};
