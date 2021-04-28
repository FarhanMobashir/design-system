import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { Illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
    width: 800px;
    height: 580px:
    border: 1px solid black;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    background-color: ${(props) => props.theme.formElementBackground};
    color: ${(props) => props.theme.textOnformElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
    padding:50px;
    
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.heading4};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.heading5};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
`;

// * Creating the Modal

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img
        style={{ maxWidth: "400px" }}
        src={Illustrations.signup}
        alt="sign-up"
        aria-hidden="true"
      />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up today to access all of our features!</SignUpText>
      <PrimaryButton onClick={() => console.log("you signed up !")}>
        Sign Up
      </PrimaryButton>
      <CloseModalButton aria-label="close-icon">
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};
