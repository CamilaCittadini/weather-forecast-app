import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { WeatherTypes } from "../services/currentAndForecast";
import { skyConditionIcon, TemperatureUnits } from "./WeatherCard";
import NavigationIcon from "@mui/icons-material/Navigation";
import { applyConversion, applyConversionUnit } from "./WeatherCard";
import { useUserPreferencesSelector } from "../app/store/userSelectors";
interface dailyForecastCardProps {
  date?: string;
  dayOfTheWeek?: number;
  skyCondition?: WeatherTypes;
  tempMax?: number;
  tempMin?: number;
  windDirection?: number;
  windSpeed?: number;
  precipitation?: number;
}

export default function DailyForecastCard({
  date = "-",
  dayOfTheWeek = 0,
  skyCondition = "-",
  tempMax = 0,
  tempMin = 0,
  windDirection = 0,
  windSpeed = 0,
  precipitation = 0,
}: dailyForecastCardProps) {
  const { temperatureUnit } = useUserPreferencesSelector();

  return (
    <Card sx={{ minWidth: 200, maxWidth: 200 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 20, fontWeight: 800, display: "inline" }}
          color="text.secondary"
          gutterBottom
        >
          {date} {getDayOfTheWeek[dayOfTheWeek]}
        </Typography>

        <Stack
          direction={"row"}
          alignItems="center"
          spacing={1}
          sx={{ marginY: 1 }}
        >
          {skyConditionIcon[skyCondition]}

          <Typography
            sx={{ mb: 0, fontSize: 18, fontWeight: 500 }}
            color="text.secondary"
          >
            {skyCondition}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          <Stack direction={"column"} justifyContent="start" spacing={3}>
            <Stack direction={"row"} spacing={2}>
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={1}
                sx={{ marginY: 1 }}
              >
                <ThermostatOutlinedIcon color="error" />
                <p style={{ margin: 0 }}>
                  {applyConversion[temperatureUnit](tempMax) +
                    applyConversionUnit[temperatureUnit]}
                </p>
              </Stack>
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={1}
                sx={{ marginY: 1 }}
              >
                <ThermostatOutlinedIcon color="info" />
                <p style={{ margin: 0 }}>
                  {applyConversion[temperatureUnit](tempMin) +
                    applyConversionUnit[temperatureUnit]}
                </p>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={1}
                sx={{ marginY: 1 }}
              >
                <NavigationIcon
                  color="primary"
                  style={{ transform: `rotate(${windDirection}deg)` }}
                />
                <p style={{ margin: 0 }}>{windSpeed} km/h</p>
              </Stack>
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={1}
                sx={{ marginY: 1 }}
              >
                <ThunderstormIcon color="info" />
                <p style={{ margin: 0 }}>{precipitation} %</p>
              </Stack>
            </Stack>
          </Stack>
        </Typography>
      </CardContent>
    </Card>
  );
}

const getDayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
