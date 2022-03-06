import axios from "axios";

export const OpenWeatherApiClient = axios.create({
  baseURL: "https://api.openweathermap.org",
});
