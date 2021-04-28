import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  height: 100%;
  width: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M57.9,51.3l32.4-32.4c2.2-2.2,2.2-5.8,0-8c-2.2-2.2-5.8-2.2-8,0L50.2,42.9L18.1,10.8c-2.2-2.2-5.8-2.2-8,0  c-2.2,2.2-2.2,5.8,0,8l32.4,32.4L10.1,83.7c-2.2,2.2-2.2,5.8,0,8c2.2,2.2,5.8,2.2,8,0l32.1-32.1l32.1,32.1c2.2,2.2,5.8,2.2,8,0  c2.2-2.2,2.2-5.8,0-8L57.9,51.3z"
    />
  </CloseIconWrapper>
);
