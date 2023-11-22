import type { Preview } from "@storybook/react";
import "styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "Snow",
      values: [
        { name: "light", value: "#F0FFF0" },
        { name: "dark", value: "#3f4e65" },
        { name: "Aquamarine", value: "#7FFFD4" },
        { name: "MediumTurquoise", value: "#48D1CC" },
        { name: "Snow", value: "#FFFAFA" },
      ],
    },
    decorators: [],
  },
};

export default preview;
