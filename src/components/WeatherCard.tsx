import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { WeatherTypes } from "../services/currentAndForecast";

interface weatherCardProps {
  city?: string;
  skyCondition?: WeatherTypes;
  temperature?: number;
  wind?: number;
  humidity?: number;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function WeatherCard({
  city = "-",
  skyCondition = "-",
  temperature = 0,
  wind = 0,
  humidity = 0,
}: weatherCardProps) {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 300 }}>
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
            Weather in
          </Typography>
          <CardActions>
            <IconButton size="small" color="primary">
              <StarBorderOutlinedIcon />
            </IconButton>
          </CardActions>
        </Stack>
        <Typography variant="h5" component="div">
          {city}
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
              <p style={{ margin: 0 }}>{temperature}</p>
            </Stack>
            <Stack
              direction={"row"}
              alignItems="center"
              spacing={1}
              sx={{ marginY: 1 }}
            >
              <AirOutlinedIcon color="primary" />
              <p style={{ margin: 0 }}>{wind} km/h</p>
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

const skyConditionIcon: Record<WeatherTypes, React.ReactNode> = {
  Rain: <ThunderstormIcon fontSize="large" sx={{ color: "indigo" }} />,
  Clear: <WbSunnyOutlinedIcon fontSize="large" sx={{ color: "yellow" }} />,
  Snow: <AcUnitOutlinedIcon fontSize="large" sx={{ color: "cyan" }} />,
  Clouds: <CloudOutlinedIcon fontSize="large" sx={{ color: "blue" }} />,
  "-": <ErrorOutlineOutlinedIcon fontSize="large" color="error" />,
};
