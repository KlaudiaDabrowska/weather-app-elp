import React from "react";
import {
  Description,
  Header,
  Result,
  Wrapper,
} from "../../styles/WeatherResult.styles";

export const WeatherResult = () => {
  return (
    <Wrapper>
      <Header>HELLO</Header>
      <Description>
        Temperture: <Result> 10000000000000000000 </Result>
      </Description>
      <Description>
        Temperture: <Result> 10 </Result>
      </Description>
      <Description>
        Temperture: <Result> 10 </Result>
      </Description>
      <Description>
        Temperture: <Result> 10 </Result>
      </Description>
    </Wrapper>
  );
};
