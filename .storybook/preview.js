import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts";
import { contexts } from "./contexts";

// post-written
addParameters({
  backgrounds: [
    { name: "Dafault Theme", value: "#ffffff", default: true },
    { name: "Dark Theme", value: "#7F2EAB" },
  ],
});

addDecorator(withContexts(contexts));

// Pre-written
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
