import axios from "axios";

export const WeatherbitApiClient = axios.create({
  baseURL: "https://api.weatherbit.io",
});
