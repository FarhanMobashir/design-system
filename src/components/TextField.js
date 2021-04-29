import React from "react";
import styled from "styled-components";
import { typeScale, headingFont } from "../utils";

const Input = styled.input`
  width: 316px;
  height: 52px;
  background-color: ${(props) => props.theme.textFieldBackground};
  border: none;
  padding-left: 8px;
  font-family: ${headingFont};
  border-radius: 2px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin-bottom: 8px;
`;

export const EmailInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="email">{label}</Label>
    <Input id="email" type="email" placeholder={placeholder} />
  </div>
);

export const PasswordInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="password">{label}</Label>
    <Input id="password" type="password" placeholder={placeholder} />
  </div>
);
