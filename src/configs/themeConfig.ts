import { ThemeOptions } from "@mui/material/styles";

const themesConfig: { default: ThemeOptions; dark: ThemeOptions } = {
  default: {
    palette: {
      mode: "light",
      primary: {
        main: "#06928A",
        light: "#ffffff",
        dark: "#05736D",
      },
      secondary: {
        main: "#00A69E",
      },
      background: {
        default: "#00A69E",
      },
    },
  },
  dark: {
    palette: {
      mode: "dark",
      primary: {
        main: "#535353",
        light: "#ffffff",
        dark: "#acacac",
      },
      secondary: {
        main: "#00A69E",
      },
      background: {
        default: "#000000",
      },
    },
  },
};

export default themesConfig;
