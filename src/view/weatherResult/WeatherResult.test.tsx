import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { WeatherResult, WeatherResultProps } from "./WeatherResult";

const renderComponent = ({ weatherInfo }: WeatherResultProps) =>
  render(
    <ThemeProvider theme={theme}>
      <WeatherResult weatherInfo={weatherInfo} />
    </ThemeProvider>
  );

const mockWeatherInfo = {
  city: "Kiev",
  temperature: 12,
  pressure: 1010,
  humidity: 56,
};

describe("WeatherResult component", () => {
  it("should display all data", async () => {
    const { findByText } = renderComponent({ weatherInfo: mockWeatherInfo });

    const cityElement = await findByText("Kiev");
    const temperatureElement = await findByText(/12/);
    const pressureElement = await findByText(/1010/);
    const humidityElement = await findByText(/56/);

    expect(cityElement).toBeInTheDocument();
    expect(temperatureElement).toBeInTheDocument();
    expect(pressureElement).toBeInTheDocument();
    expect(humidityElement).toBeInTheDocument();
  });
});
