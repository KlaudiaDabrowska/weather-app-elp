import { CurrentWeatherResultInfo } from "./currentWeatherResultInfo";

export interface WeatherService {
  get(lat: number, lon: number): CurrentWeatherResultInfo | undefined;
}
