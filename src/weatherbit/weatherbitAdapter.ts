import { useCallback } from "react";
import { Coordinates } from "../openWeather/services/useOpenWeather";
import { CurrentWeatherResultInfo } from "../weatherInfo/currentWeatherResultInfo";
import { WeatherService } from "../weatherInfo/getWeatherInfo";
import { useWeatherbit } from "./services/useWeatherbit";

export const useWeatherbitAdapter = (
  coordinates: Coordinates
): WeatherService => {
  const { data } = useWeatherbit({
    lat: coordinates.lat,
    lon: coordinates.lon,
  });

  const get = useCallback((): CurrentWeatherResultInfo | undefined => {
    return (
      data && {
        city: data.data[0].city_name,
        temperature: data.data[0].temp,
        pressure: data.data[0].pres,
        humidity: data.data[0].rh,
      }
    );
  }, [data]);

  return { get };
};
