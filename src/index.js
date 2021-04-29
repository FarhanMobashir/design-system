import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { SignUpModal, SignInModal } from "./components/Modal";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px",
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px",
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Show modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <div>
          <PrimaryButton>Hello World</PrimaryButton>
          <SecondaryButton>Hello World</SecondaryButton>
          <TertiaryButton>Hello World</TertiaryButton>
        </div>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <SignInModal />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
