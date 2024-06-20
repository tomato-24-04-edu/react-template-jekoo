import { SettingsConfigType } from "../types/configTypes";
import themesConfig from "./themeConfig";
import { LayOut1Config } from "./layoutConfig";

const settingsConfig: SettingsConfigType = {
  layout: LayOut1Config,
  theme: themesConfig.default,
  defaultAuth: ["user"],
  loginRedirectUrl: "/",
};

export default settingsConfig;
