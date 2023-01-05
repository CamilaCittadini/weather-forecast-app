import React from "react";
import { useQuery } from "react-query";
import { getCurrentWeather } from "../../services/currentAndForecast";
import { useUserLocation } from "../../app/store/userSelectors";
import WeatherCard from "../WeatherCard";

const Home = () => {
  const location = useUserLocation();

  const { data: weather } = useQuery(
    ["current-weather", location],
    () =>
      getCurrentWeather({
        lat: location?.latitude,
        lon: location?.longitude,
      }),
    {
      enabled: !!location,
    }
  );

  return (
    <div style={{ paddingTop: 30, paddingLeft: 30 }}>
      <WeatherCard
        city={weather?.data?.name}
        humidity={weather?.data?.main?.humidity}
        temperature={weather?.data?.main?.temp}
        wind={weather?.data?.wind?.speed}
        skyCondition={weather?.data?.weather?.[0]?.main}
      />
    </div>
  );
};

export default Home;
