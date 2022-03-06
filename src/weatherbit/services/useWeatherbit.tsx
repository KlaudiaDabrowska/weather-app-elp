import { useCallback } from "react";
import { useQuery } from "react-query";
import { WeatherbitApiClient } from "../config/WeatherbitApiClient";

interface UseWeatherbitProps {
  lat: number;
  lon: number;
}

interface WeatherbitCurrentWeatherResponse {
  count: string;
  data: WeatherbitData[];
}

interface WeatherbitData {
  city_name: string;
  lat: string;
  lon: string;
  rh: number;
  temp: number;
  pres: number;
}

export const useWeatherbit = ({ lat, lon }: UseWeatherbitProps) => {
  const client = WeatherbitApiClient;

  const fetchWeather = async () => {
    return client
      .get<WeatherbitCurrentWeatherResponse>(
        `/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&include=minutely`
      )
      .then((res) => res.data);
  };

  return useQuery([`weatherbit-${lat}-${lon}`], fetchWeather);
};
