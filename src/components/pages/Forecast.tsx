import React from "react";
import { useQuery } from "react-query";
import { getForecast } from "../../services/currentAndForecast";

const Forecast = () => {
  //const {data: forecast} = useQuery("forecast", ()=>{getForecast(location)})

  return <div>Forecast</div>;
};

export default Forecast;
