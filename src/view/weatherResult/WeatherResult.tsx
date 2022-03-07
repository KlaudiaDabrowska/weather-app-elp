import React from "react";
import {
  Description,
  Header,
  Result,
  Wrapper,
} from "../../styles/WeatherResult.styles";
import { CurrentWeatherResultInfo } from "../../weatherInfo/currentWeatherResultInfo";

export interface WeatherResultProps {
  weatherInfo: CurrentWeatherResultInfo | undefined;
}

export const WeatherResult = ({ weatherInfo }: WeatherResultProps) => {
  if (!weatherInfo) {
    return <Wrapper></Wrapper>;
  }
  return (
    <Wrapper>
      <Header>{weatherInfo.city}</Header>
      <Description>
        Temperature: <Result> {weatherInfo.temperature} °C </Result>
      </Description>
      <Description>
        Pressure: <Result> {weatherInfo.pressure} hPa</Result>
      </Description>
      <Description>
        Humidity: <Result> {weatherInfo.humidity} % </Result>
      </Description>
    </Wrapper>
  );
};
