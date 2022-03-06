import { useCallback } from "react";
import { CurrentWeatherResultInfo } from "../weatherInfo/currentWeatherResultInfo";
import { WeatherService } from "../weatherInfo/getWeatherInfo";
import { Coordinates, useOpenWeather } from "./services/useOpenWeather";

export const useOpenWeatherAdapter = (
  coordinates: Coordinates
): WeatherService => {
  const { data } = useOpenWeather({
    lat: coordinates.lat,
    lon: coordinates.lon,
  });

  const get = useCallback((): CurrentWeatherResultInfo | undefined => {
    return (
      data && {
        city: data.name,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      }
    );
  }, [data]);

  return { get };
};
