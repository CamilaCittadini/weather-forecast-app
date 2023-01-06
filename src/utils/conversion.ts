export const kelvinToFahrenheit = (kelvin: number) => {
  return Number((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
};

export const kelvinToCelsius = (kelvin: number) => {
  return Number((kelvin - 273.15).toFixed(2));
};
