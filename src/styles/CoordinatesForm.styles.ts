import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const StyledForm = styled(Form)`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  border-radius: 20px;
  @media (max-width: 540px) {
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
  @media (max-width: 414px) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
  @media (max-width: 375px) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledInput = styled(Form.Control)`
  width: 300px;
  border: none;

  &:focus {
    box-shadow: 4px 4px 5px black;
  }

  @media (max-width: 540px) {
    width: 250px;
  }
  @media (max-width: 375px) {
    width: 200px;
  }
`;

export const StyledLabel = styled(FloatingLabel)`
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.labelColor};
  font-weight: bold;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const StyledButton = styled(Button)`
  width: 100px;
  height: 40px;
  margin-top: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.blackColor};
  font-weight: bold;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundButtonColor};
  border: none;

  &:hover,
  :active,
  :focus {
    background-color: ${({ theme }) => theme.colors.backgroundButtonHoverColor};
    color: ${({ theme }) => theme.colors.blackColor};
  }
  @media (max-width: 540px) {
    width: 80px;
    height: 30px;
  }
`;
