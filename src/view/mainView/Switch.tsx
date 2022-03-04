import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const Switch = () => {
  return (
    <FormControl>
      <RadioGroup row name="row-radio-buttons-group">
        <FormControlLabel
          value="A"
          control={<Radio color="default" />}
          label="API A"
        />
        <FormControlLabel
          value="B"
          control={<Radio color="default" />}
          label="API B"
        />
      </RadioGroup>
    </FormControl>
  );
};
