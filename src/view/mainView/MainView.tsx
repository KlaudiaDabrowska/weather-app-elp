import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../../styles/Header.styles";
import { StyledCol } from "../../styles/StyledCol.styles";
import { CoordinatesForm } from "../form/CoordinatesForm";
import { WeatherResult } from "../weatherResult/WeatherResult";
import { Switch } from "./Switch";

export const MainView = () => {
  return (
    <Container>
      <Header>Weather app</Header>
      <Switch />
      <Row>
        <StyledCol>
          <CoordinatesForm></CoordinatesForm>
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <WeatherResult></WeatherResult>
        </StyledCol>
      </Row>
    </Container>
  );
};
