import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { SelectedApi } from "../../weatherInfo/useWeatherInfo";

interface SwitchProps {
  selectWeatherbit: () => void;
  selectOpenWeather: () => void;
  selectedApi: SelectedApi;
}
export const Switch = ({
  selectWeatherbit,
  selectOpenWeather,
  selectedApi,
}: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).value === "openWeather") {
      selectOpenWeather();
    } else {
      selectWeatherbit();
    }
  };

  return (
    <FormControl>
      <RadioGroup
        row
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={selectedApi}
      >
        <FormControlLabel
          value="openWeather"
          control={<Radio color="default" />}
          label="OpenWeather API"
        />
        <FormControlLabel
          value="weatherbit"
          control={<Radio color="default" />}
          label="Weatherbit API"
        />
      </RadioGroup>
    </FormControl>
  );
};
