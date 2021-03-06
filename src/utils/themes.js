import { purple, neutral, yellow, green, red } from "./colors";
import { headingFont, bodyFont } from "./typography";

export const defaultTheme = {
  primaryColor: purple[500],
  primaryColorHover: purple[400],
  primaryColorActive: purple[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],

  // * Text-Colors

  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],

  // * Font
  headingFont,
  bodyFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[300],
  textColorOnPrimary: purple[300],
  textColor: purple[300],
  textColorInverted: purple[400],
  primaryFont: bodyFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],

  formElementBackground: purple[200],
  textOnFormElementBackground: neutral[100],
  textFieldBackground: purple[100],
  textFieldLabelColor: neutral[500],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
