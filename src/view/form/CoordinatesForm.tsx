import React from "react";
import { Form } from "react-bootstrap";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "../../styles/CoordinatesForm.styles";

export const CoordinatesForm = () => {
  return (
    <StyledForm>
      <Form.Group>
        <StyledLabel label="LAT">
          <StyledInput id="title" name="title" type="title" placeholder="Lat" />
        </StyledLabel>
        <StyledLabel label="LON">
          <StyledInput
            id="author"
            name="author"
            type="author"
            placeholder="Lon"
          />
        </StyledLabel>
      </Form.Group>
      <StyledButton variant="primary" type="submit" size="sm">
        Search
      </StyledButton>
    </StyledForm>
  );
};
