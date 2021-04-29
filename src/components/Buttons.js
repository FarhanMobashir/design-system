import styled from "styled-components";
// eslint-disable-next-line
import { theme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size:${typeScale.helperText};
    padding:8px;
  `,
  large: () => `
    font-size:${typeScale.heading3};
    padding:16px 24px;
  `,
  warning: (props) => `
    background: none;
    color: ${props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: (props) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  error: (props) => `
    background: none;
    color: ${props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: (props) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  tertiaryButtonError: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
    border:none;
  `,
  success: (props) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: (props) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
};

const Button = styled.button`
  // CSS
  border-radius: 5px;
  font-size: ${typeScale.paragraph};
  padding: 14px 24px;
  margin:15px;
  font-weight:bold;
  min-width: 100px;
  cursor: pointer;
  font-family: "Open Sans";
  transition: 0.2s ease-in;

  // hover-state
  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};

  // focus
  &:focus{
    outline: 3px solid ${(props) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
{
  // active
  &:active{
    background-color:${(props) => props.theme.primaryColorActive};
    border-color:${(props) => props.theme.primaryColorActive};
    color:${(props) => props.theme.textColorOnPrimary}
  }}
`;

export const PrimaryButton = styled(Button)`
  // CSS
  background: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColorInverted};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  // CSS
  color: ${(props) => props.theme.primaryColor};
  background: none;
  border: none;
  border: 3px solid ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.textOnDisabled};
    border-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  // CSS
  color: ${(props) => props.theme.primaryColor};
  background: none;
  border: none;

  &:disabled {
    background: none;
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
