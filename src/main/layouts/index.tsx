import React, { useCallback, useEffect, useMemo, useRef } from "react";
import _ from "lodash";
import routes from "configs/routesConfig";
import Layout1 from "./layout1";
import Layout2 from "./layout2";
import { useAppSelector } from "store/hooks";
import { selectCurrentSettings } from "store/slices/settingSlice/settingSlice";
import { SettingsConfigType } from "configs/configTypes";
import {
  matchRoutes,
  useLocation,
  RouteMatch,
  RouteObject,
} from "react-router-dom";
import settingsConfig from "configs/settingsConfig";

export type RouteObjectType = RouteObject & {
  settings?: SettingsConfigType;
};

export type RouteMatchType = RouteMatch & {
  route: RouteObjectType;
};

export const LayoutProvider = () => {
  const selectedSettings = useAppSelector(selectCurrentSettings);

  const newSettings = useRef<SettingsConfigType>(selectedSettings);

  const location = useLocation();
  const { pathname } = location;
  const matchedRoutes = matchRoutes(routes, pathname) as
    | RouteMatchType[]
    | null;

  const matched = matchedRoutes?.[0] || false;

  const shouldAwaitRender = useCallback(() => {
    if (!_.isEqual(settingsConfig, newSettings.current)) {
      let _newSettings: SettingsConfigType;

      if (typeof matched !== "boolean") {
        const routeSettings = matched.route.settings;

        _newSettings = _.merge(newSettings.current, routeSettings);
      } else if (!_.isEqual(_newSettings, newSettings.current)) {
        _newSettings = _.merge({}, newSettings.current);
      } else {
        _newSettings = newSettings.current as SettingsConfigType;
      }

      if (!_.isEqual(newSettings.current, _newSettings)) {
        newSettings.current = _newSettings;
      }
    }
  }, [matched]);

  shouldAwaitRender();
  const currentSettings = useMemo(
    () => newSettings.current,
    [newSettings.current]
  );

  console.log("1 : ", currentSettings);
  console.log("2 : ", selectedSettings);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>hi hello</>;
};
