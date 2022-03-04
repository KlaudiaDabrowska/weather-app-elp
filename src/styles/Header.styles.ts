import styled from "styled-components";

export const Header = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.headerColor};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 540px) {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (max-width: 375px) {
    margin-bottom: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
