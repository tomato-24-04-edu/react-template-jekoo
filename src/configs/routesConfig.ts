// import Loading from '@/core/Loading';
import { Navigate } from "react-router-dom";
import settingsConfig from "./settingsConfig";
import { SettingsConfigType } from "./configTypes";
import {
  RouteConfigsType,
  RouteConfigType,
  RouteItemType,
  RoutesType,
} from "./configTypes";

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
    allRoutes = [...allRoutes, setRoutes(config, defaultAuth)];
  });
  return allRoutes;
};

const routeConfigs: RouteConfigsType = [
  // SignOutConfig,
  // SignInConfig,
  // SignUpConfig,
  // DocumentationConfig,
  // ...PagesConfigs,
  // ...UserInterfaceConfigs,
  // ...DashboardsConfigs,
  // ...AppsConfigs,
  // ...authRoleExamplesConfigs
];

/**
 * The routes of the application.
 */
const routes: RoutesType = [
  generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: "/",
    element: <Navigate to="/main" />,
    auth: settingsConfig.defaultAuth,
  },
  // {
  // 	path: 'loading',
  // 	element: <Loading />
  // },
  // {
  // 	path: '404',
  // 	element: <Error404Page />
  // },
  // {
  // 	path: '*',
  // 	element: <Navigate to="404" />
  // }
];

export default routes;
