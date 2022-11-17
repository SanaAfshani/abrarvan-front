import React from "react";
import styled from "styled-components";
import { LoginForm } from "../../components/loginForm";
export default function Login() {
  const StyledContainer = styled.section`
    display: flex;
    height: 100vh;
  `;
  const StyledSmallContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: auto;
    width: 450px;
    padding: 37px 20px 19px;
    border-radius: 4px;
    background-color: var(--silver);
    flex-direction: column;
  `;
  const StyledTitleLogin = styled.h2`
    font-size: 47px;
    color: #707070;
  `;

  return (
    <>
      <StyledContainer>
        <StyledSmallContainer>
          <StyledTitleLogin>LOGIN</StyledTitleLogin>
          <LoginForm />
        </StyledSmallContainer>
      </StyledContainer>
    </>
  );
}