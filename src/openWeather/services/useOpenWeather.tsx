import { useQuery } from "react-query";
import { OpenWeatherApiClient } from "../config/OpenWeatherApiClient";

interface useOpenWeatherProps {
  lat: number;
  lon: number;
}

interface OpenWeatherCurrentWeatherResponse {
  coord: Coordinates;
  main: OpenWeatherData;
  name: string;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

interface OpenWeatherData {
  temp: number;
  pressure: number;
  humidity: number;
}

export const useOpenWeather = ({ lat, lon }: useOpenWeatherProps) => {
  const client = OpenWeatherApiClient;

  const fetchWeather = async () => {
    return client
      .get<OpenWeatherCurrentWeatherResponse>(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((res) => res.data);
  };

  return useQuery([`open-weather-${lat}-${lon}`], fetchWeather);
};
