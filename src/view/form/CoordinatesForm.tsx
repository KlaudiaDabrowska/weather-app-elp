import React, { Dispatch } from "react";
import { Form } from "react-bootstrap";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  Alert,
} from "../../styles/CoordinatesForm.styles";
import { useFormik } from "formik";
import { Coordinates } from "../../openWeather/services/useOpenWeather";

interface Errors {
  lat?: string;
  lon?: string;
}

interface CoordinatesFormProps {
  coordinates: Coordinates;
  setCoordinates: Dispatch<Coordinates>;
}

export const CoordinatesForm = ({
  coordinates,
  setCoordinates,
}: CoordinatesFormProps) => {
  const formik = useFormik({
    initialValues: {
      lat: coordinates.lat,
      lon: coordinates.lon,
    },
    validate: (values) => {
      const errors: Errors = {};
      if (!values.lat) {
        errors.lat = "Required";
      } else if (values.lat < -90 || values.lat > 90) {
        errors.lat = "Must be between -90 and 90";
      }

      if (!values.lon) {
        errors.lon = "Required";
      } else if (values.lon < -180 || values.lon > 180) {
        errors.lon = "Must be between -180 and 180";
      }
      return errors;
    },
    onSubmit: (values) => {
      setCoordinates({ lon: values.lon, lat: values.lat });
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Form.Group>
        <StyledLabel label="LAT">
          <StyledInput
            id="lat"
            name="lat"
            type="number"
            placeholder="Lat"
            onChange={formik.handleChange}
            value={formik.values.lat}
            onBlur={formik.handleBlur}
          />
        </StyledLabel>
        {formik.touched.lat && formik.errors.lat ? (
          <Alert>{formik.errors.lat}</Alert>
        ) : null}
        <StyledLabel label="LON">
          <StyledInput
            id="lon"
            name="lon"
            type="number"
            placeholder="Lon"
            onChange={formik.handleChange}
            value={formik.values.lon}
            onBlur={formik.handleBlur}
          />
        </StyledLabel>
        {formik.touched.lon && formik.errors.lon ? (
          <Alert>{formik.errors.lon}</Alert>
        ) : null}
      </Form.Group>
      <StyledButton variant="primary" type="submit" size="sm">
        Search
      </StyledButton>
    </StyledForm>
  );
};
