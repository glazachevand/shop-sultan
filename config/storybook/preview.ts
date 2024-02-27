import type { Preview } from "@storybook/react";
import "styles/index.scss";
import i18n from "../../src/i18n/i18nForTests";

const preview: Preview = {
  globals: {
    locale: "ru",
    locales: {
      en: "English",
      ru: "Russian",
    },
  },
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
    i18n,
    locale: "ru",
  },
};

export default preview;
