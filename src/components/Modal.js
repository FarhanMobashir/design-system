import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { Illustrations, CloseIcon } from "../assets";
import { useSpring, animated } from "react-spring";
import { EmailInput, PasswordInput } from "./TextField";

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
    margin:10px;
    
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

// Sign in Modal

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
   width: 800px;
    height: 580px:
    border: 1px solid black;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    background-color: ${(props) => props.theme.formElementBackground};
    color: ${(props) => props.theme.textOnformElementBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
    padding:50px;
    margin:10px;
`;

// * Creating the signup Modal

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  });
  return (
    <animated.div style={animation}>
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
    </animated.div>
  );
};

//* creating the Signin modal

export const SignInModal = () => (
  <ColumnModalWrapper>
    <div>
      <ModalHeader>Sign In</ModalHeader>
      <EmailInput label="Email" placeholder="farhanmobashir@gmail.com" />
      <PasswordInput label="Password" />
      <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
        Sign Up
      </SecondaryButton>
      <PrimaryButton>Sign In</PrimaryButton>
    </div>
    <img
      src={Illustrations.login}
      style={{ maxWidth: "400px" }}
      alt="Sign in to your account"
    />
    <CloseModalButton onClick={() => console.log("You closed the modal!")}>
      <CloseIcon />
    </CloseModalButton>
  </ColumnModalWrapper>
);
