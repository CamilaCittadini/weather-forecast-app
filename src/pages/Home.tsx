import React from "react";
import { useQuery } from "react-query";
import { getCurrentWeather } from "../services/currentAndForecast";
import { useUserLocation } from "../app/store/userSelectors";
import WeatherCard from "../components/WeatherCard";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
  const location = useUserLocation();

  const { isLoading, data: weather } = useQuery(
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

  if (isLoading) {
    return <SkeletonCard width={350} height={200} />;
  }

  return (
    <div style={{ paddingTop: 30, paddingLeft: 30 }}>
      <WeatherCard
        city={weather?.data?.name}
        country={weather?.data?.sys?.country}
        humidity={weather?.data?.main?.humidity}
        temperature={weather?.data?.main?.temp}
        windDirection={weather?.data?.wind?.deg}
        windSpeed={weather?.data?.wind?.speed}
        skyCondition={weather?.data?.weather?.[0]?.main}
      />
    </div>
  );
};

export { Home };
