import { SettingsConfigType } from "./types";
import themesConfig from "./themeConfig";

const settingsConfig: SettingsConfigType = {
  layout: {
    style: "layout1",
    config: {},
  },
  customScrollbars: false,
  theme: {
    main: themesConfig.default,
    navbar: themesConfig.default,
    toolbar: themesConfig.default,
    footer: themesConfig.default,
  },

  defaultAuth: ["admin"],
  loginRedirectUrl: "/",
};

export default settingsConfig;
