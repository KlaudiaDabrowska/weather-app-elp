import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 460px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  box-shadow: 5px 5px 10px gray;
  @media (max-width: 540px) {
    width: 470px;
    height: 300px;
  }
  @media (max-width: 414px) {
    height: 350px;
  }
  @media (max-width: 375px) {
    width: 370px;
    height: 250px;
  }
`;

export const Header = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: black;
  @media (max-width: 540px) {
    margin-bottom: ${({ theme }) => theme.spacing.l};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 414px) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
  @media (max-width: 375px) {
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: black;
  font-weight: bold;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Result = styled.div`
  margin-left: ${({ theme }) => theme.spacing.xxs};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: black;
  font-weight: normal;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
