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
    navbar: themesConfig.defaultDark,
    toolbar: themesConfig.default,
    footer: themesConfig.defaultDark,
  },

  defaultAuth: ["admin"],
  loginRedirectUrl: "/",
};

export default settingsConfig;
