import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { WeatherTypes } from "../services/currentAndForecast";
import NavigationIcon from "@mui/icons-material/Navigation";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/conversion";
import { useUserPreferencesSelector } from "../app/store/userSelectors";

interface weatherCardProps {
  city?: string;
  country?: string;
  skyCondition?: WeatherTypes;
  temperature?: number;
  windDirection?: number;
  windSpeed?: number;
  humidity?: number;
}

export type TemperatureUnits = "celsius" | "fahrenheit" | "kelvin";

export default function WeatherCard({
  city = "-",
  country = "",
  skyCondition = "-",
  temperature = 0,
  windDirection = 0,
  windSpeed = 0,
  humidity = 0,
}: weatherCardProps) {
  const { temperatureUnit } = useUserPreferencesSelector();

  return (
    <Card sx={{ minWidth: 200, maxWidth: 350 }}>
      <CardContent>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{ fontSize: 14, marginBottom: 0 }}
            color="text.secondary"
            gutterBottom
          >
            Today's weather in
          </Typography>
          <CardActions>
            <IconButton size="small" color="primary">
              <StarBorderOutlinedIcon />
            </IconButton>
          </CardActions>
        </Stack>
        <Typography variant="h5" component="div">
          {city}, {country}
        </Typography>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={1}
          sx={{ marginY: 1 }}
        >
          {skyConditionIcon[skyCondition]}

          <Typography sx={{ mb: 0 }} color="text.secondary">
            {skyCondition}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          <Stack direction={"row"} justifyContent="start" spacing={3}>
            <Stack
              direction={"row"}
              alignItems="center"
              spacing={1}
              sx={{ marginY: 1 }}
            >
              <ThermostatOutlinedIcon color="error" />
              <p style={{ margin: 0 }}>
                {applyConversion[temperatureUnit](temperature) +
                  applyConversionUnit[temperatureUnit]}
              </p>
            </Stack>
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
              <InvertColorsOutlinedIcon color="info" />
              <p style={{ margin: 0 }}>{humidity} %</p>
            </Stack>
          </Stack>
        </Typography>
      </CardContent>
    </Card>
  );
}

export const skyConditionIcon: Record<WeatherTypes, React.ReactNode> = {
  Rain: <ThunderstormIcon fontSize="large" sx={{ color: "indigo" }} />,
  Clear: <WbSunnyOutlinedIcon fontSize="large" sx={{ color: "yellow" }} />,
  Snow: <AcUnitOutlinedIcon fontSize="large" sx={{ color: "cyan" }} />,
  Clouds: <CloudOutlinedIcon fontSize="large" sx={{ color: "blue" }} />,
  "-": <ErrorOutlineOutlinedIcon fontSize="large" color="error" />,
};

export const applyConversion: Record<TemperatureUnits, (n: number) => number> =
  {
    celsius: kelvinToCelsius,
    kelvin: (kelvin: number) => kelvin,
    fahrenheit: kelvinToFahrenheit,
  };

export const applyConversionUnit: Record<TemperatureUnits, string> = {
  celsius: "°C",
  kelvin: "K",
  fahrenheit: "°F",
};
