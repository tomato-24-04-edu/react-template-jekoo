import { ThemeOptions } from "@mui/material/styles";

const themesConfig: { default: ThemeOptions; dark: ThemeOptions } = {
  default: {
    palette: {
      mode: "light",
      text: {
        primary: "#000000",
      },
      primary: {
        main: "#06928A",
        light: "#ffffff",
        dark: "#05736D",
      },
      secondary: {
        main: "#00A69E",
      },
      background: {
        default: "#ffffff",
      },
    },
  },
  dark: {
    palette: {
      mode: "dark",
      text: {
        primary: "#ffffff",
      },
      primary: {
        main: "#2A2A2A",
        light: "#ffffff",
        dark: "#acacac",
      },
      secondary: {
        main: "#000000",
        dark: "#acacac",
      },
      background: {
        default: "#727272",
      },
    },
  },
};

export default themesConfig;
