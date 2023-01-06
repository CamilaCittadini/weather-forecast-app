import React from "react";
import { useQuery } from "react-query";
import { useUserLocation } from "../../app/store/userSelectors";
import {
  getCurrentWeather,
  getForecast,
} from "../../services/currentAndForecast";
import Typography from "@mui/material/Typography";
import DailyForecastCard from "../DailyForecastCard";
import { useDispatch } from "react-redux";
import { onLocalForecastObtained } from "../../app/store/userInfoSlice";

const Forecast = () => {
  const dispatch = useDispatch();

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

  const { data: forecast } = useQuery(
    ["forecast", weather],
    () => getForecast(weather?.data?.id),
    {
      enabled: !!weather,
      onSuccess() {
        dispatch(onLocalForecastObtained(forecast?.data));
      },
    }
  );

  //filters by the time of day (12:00) to show the dailyForecast at set hour
  const dailyForecast = forecast?.data?.list?.filter(
    (entry) => new Date(entry.dt_txt).getHours() === 12
  );

  return (
    <div style={{ paddingTop: 30 }}>
      <Typography
        sx={{ fontSize: 20, paddingLeft: 5 }}
        color="text.secondary"
        gutterBottom
      >
        Next 5 Days in {weather?.data?.name}, {weather?.data?.sys?.country}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {dailyForecast?.map((day) => (
          <DailyForecastCard
            date={formatDate(new Date(day?.dt_txt || ""))}
            dayOfTheWeek={new Date(day?.dt_txt)?.getDay()}
            tempMax={day?.main?.temp_max}
            tempMin={day?.main?.temp_min}
            windDirection={day?.wind?.deg}
            windSpeed={day?.wind?.speed}
            precipitation={day?.pop}
            skyCondition={day?.weather?.[0].main}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;

const formatDate = (date: Date) => {
  return `${date.getMonth() + 1}/${date.getDate()}`;
};
