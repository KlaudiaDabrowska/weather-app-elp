import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { CoordinatesForm, CoordinatesFormProps } from "./CoordinatesForm";

const renderComponent = ({
  coordinates,
  setCoordinates,
}: CoordinatesFormProps) =>
  render(
    <ThemeProvider theme={theme}>
      <CoordinatesForm
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
    </ThemeProvider>
  );

const mockCoordinates = {
  lat: 10.23,
  lon: 111.233,
};

const mockWrongCoordinates = {
  lat: 0,
  lon: 10,
};

describe("CoordinatesForm component", () => {
  it("should display initial values", async () => {
    const { findByDisplayValue } = renderComponent({
      coordinates: mockCoordinates,
      setCoordinates: (React.useState = jest
        .fn()
        .mockReturnValue([mockCoordinates, {}])),
    });

    const latInput = await findByDisplayValue(10.23);
    const lonInput = await findByDisplayValue(111.233);

    expect(latInput).toBeInTheDocument();
    expect(lonInput).toBeInTheDocument();
  });
  it("should display `Required` when empty input", async () => {
    const { findByDisplayValue, findByText } = renderComponent({
      coordinates: mockCoordinates,
      setCoordinates: (React.useState = jest
        .fn()
        .mockReturnValue([mockCoordinates, {}])),
    });

    const latInput = await findByDisplayValue(10.23);
    expect(latInput).toBeInTheDocument();

    fireEvent.change(latInput, { target: { value: "" } });

    const button = await findByText("Search");
    fireEvent.click(button);

    const errorMessage = await findByText(/Required/);
    expect(errorMessage).toBeInTheDocument();
  });
  it("should display `Must be between -90 and 90` when wrong lat input value", async () => {
    const { findByDisplayValue, findByText } = renderComponent({
      coordinates: mockCoordinates,
      setCoordinates: (React.useState = jest
        .fn()
        .mockReturnValue([mockCoordinates, {}])),
    });

    const latInput = await findByDisplayValue(10.23);
    expect(latInput).toBeInTheDocument();

    fireEvent.change(latInput, { target: { value: "94" } });

    const button = await findByText("Search");
    fireEvent.click(button);

    const errorMessage = await findByText(/Must be between -90 and 90/);
    expect(errorMessage).toBeInTheDocument();
  });
  it("should display `Must be between -180 and 180` when wrong lon input value", async () => {
    const { findByDisplayValue, findByText } = renderComponent({
      coordinates: mockCoordinates,
      setCoordinates: (React.useState = jest
        .fn()
        .mockReturnValue([mockCoordinates, {}])),
    });

    const lonInput = await findByDisplayValue(111.233);
    expect(lonInput).toBeInTheDocument();

    fireEvent.change(lonInput, { target: { value: "-190" } });

    const button = await findByText("Search");
    fireEvent.click(button);

    const errorMessage = await findByText(/Must be between -180 and 180/);
    expect(errorMessage).toBeInTheDocument();
  });
});
