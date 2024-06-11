import { SettingsConfigType } from "./configTypes";
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
  defaultAuth: ["user"],
  loginRedirectUrl: "/",
};

export default settingsConfig;
