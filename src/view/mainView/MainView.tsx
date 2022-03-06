import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header } from "../../styles/Header.styles";
import { StyledCol } from "../../styles/StyledCol.styles";
import { useWeatherInfo } from "../../weatherInfo/useWeatherInfo";
import { CoordinatesForm } from "../form/CoordinatesForm";
import { WeatherResult } from "../weatherResult/WeatherResult";
import { Switch } from "./Switch";

export const MainView = () => {
  const {
    selectedApi,
    selectOpenWeather,
    selectWeatherbit,
    weatherInfo,
    coordinates,
    setCoordinates,
  } = useWeatherInfo();
  return (
    <Container>
      <Header>Weather app</Header>
      <Switch
        selectOpenWeather={selectOpenWeather}
        selectWeatherbit={selectWeatherbit}
        selectedApi={selectedApi}
      />
      <Row>
        <StyledCol>
          <CoordinatesForm
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          ></CoordinatesForm>
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <WeatherResult weatherInfo={weatherInfo}></WeatherResult>
        </StyledCol>
      </Row>
    </Container>
  );
};
