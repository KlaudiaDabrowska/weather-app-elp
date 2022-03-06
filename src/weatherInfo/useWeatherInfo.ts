import { useState } from "react";
import { useOpenWeatherAdapter } from "../openWeather/openWeatherAdapter";
import { Coordinates } from "../openWeather/services/useOpenWeather";
import { useWeatherbitAdapter } from "../weatherbit/weatherbitAdapter";
import { CurrentWeatherResultInfo } from "./currentWeatherResultInfo";

export type SelectedApi = "openWeather" | "weatherbit";

export const useWeatherInfo = () => {
  const [selectedApi, setSelectedApi] = useState<SelectedApi>("weatherbit");
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 50.45466,
    lon: 30.5238,
  });
  const weatherbitAdapter = useWeatherbitAdapter(coordinates);
  const openWeatherAdapter = useOpenWeatherAdapter(coordinates);

  const selectOpenWeather = () => {
    setSelectedApi("openWeather");
  };

  const selectWeatherbit = () => {
    setSelectedApi("weatherbit");
  };

  const getAdapter = () => {
    if (selectedApi === "weatherbit") {
      return weatherbitAdapter;
    } else {
      return openWeatherAdapter;
    }
  };

  const getWeatherInfo = (): CurrentWeatherResultInfo | undefined => {
    return getAdapter().get(coordinates.lat, coordinates.lon);
  };

  return {
    selectedApi,
    selectOpenWeather,
    selectWeatherbit,
    weatherInfo: getWeatherInfo(),
    coordinates,
    setCoordinates,
  };
};
