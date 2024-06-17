import { ThemeOptions } from "@mui/material/styles";

const themesConfig: { default: ThemeOptions; dark: ThemeOptions } = {
  default: {
    palette: {
      mode: "light",
      primary: {
        main: "#FF4F4F",
        light: "#ffffff",
      },
      secondary: {
        main: "#D50000",
      },
      background: {
        default: "#ffffff",
      },
    },
  },
  dark: {
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
      background: {
        default: "#121212",
      },
    },
  },
};

export default themesConfig;
