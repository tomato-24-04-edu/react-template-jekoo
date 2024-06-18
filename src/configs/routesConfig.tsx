import { Navigate } from "react-router-dom";
import settingsConfig from "./settingsConfig";
import _ from "lodash";
import { SettingsConfigType } from "../types/configTypes";
import {
  RouteConfigsType,
  RouteConfigType,
  RouteItemType,
  RoutesType,
} from "../types/configTypes";
import ManageEmployeesConfig from "main/apps/manageEmployees/manageEmployeesConfig";
import TempConfig from "main/apps/temp/tempConfig";
import Error404Page from "./utils/Error404Page";

const setRoutes = (
  config: RouteConfigType,
  defaultAuth: SettingsConfigType["defaultAuth"] = undefined
): RouteItemType[] => {
  let routes = [...config.routes];
  routes = routes.map((route) => {
    let auth =
      config.auth || config.auth === null ? config.auth : defaultAuth || null;
    auth = route.auth || route.auth === null ? route.auth : auth;
    const settings = _.merge({}, config.settings, route.settings);
    return {
      ...route,
      settings,
      auth,
    };
  }) as RouteItemType[];

  return [...routes];
};

const generateRoutesFromConfigs = (
  configs: RouteConfigsType,
  defaultAuth: SettingsConfigType["defaultAuth"]
) => {
  let allRoutes: RouteItemType[] = [];
  configs.forEach((config: RouteConfigType) => {
    allRoutes = [...allRoutes, ...setRoutes(config, defaultAuth)];
  });
  return allRoutes;
};

const routeConfigs: RouteConfigsType = [ManageEmployeesConfig, TempConfig];

const routes: RoutesType = [
  ...generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: "/",
    element: <Navigate to="/manage-employees" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
