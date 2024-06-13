import { SettingsConfigType } from "../types/configTypes";
import themesConfig from "./themeConfig";
import { DefaultLayoutConfig } from "./layoutConfig";

const settingsConfig: SettingsConfigType = {
  layout: DefaultLayoutConfig,
  customScrollbars: false,
  theme: themesConfig.default,
  defaultAuth: ["user"],
  loginRedirectUrl: "/",
};

export default settingsConfig;
