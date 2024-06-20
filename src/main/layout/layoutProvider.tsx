import { useCallback, useEffect, useContext, useMemo, useRef } from "react";
import { AppContext } from "../../AppProvider";
import Layout from "./layout";
import _ from "lodash";
import { useAppSelector, useAppDispatch } from "configs/hooks";
import { selectCurrentSettings } from "store/globalSlices/settingSlice";
import { SettingsConfigType } from "types/configTypes";
import {
  useLocation,
  matchRoutes,
  RouteMatch,
  RouteObject,
} from "react-router-dom";
import { changeLayout } from "store/globalSlices/settingSlice";

export type RouteObjectType = RouteObject & {
  settings?: SettingsConfigType;
};

export type RouteMatchType = RouteMatch & {
  route: RouteObjectType;
};

export const LayoutProvider = () => {
  const dispatch = useAppDispatch();
  const currentSettings = useAppSelector(selectCurrentSettings);
  const location = useLocation();
  const { pathname } = location;
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  const matchedRoutes = matchRoutes(routes, pathname) as
    | RouteMatchType[]
    | null;
  const matched = matchedRoutes?.[0] || false;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof matched !== "boolean") {
      const routeLayouts = matched?.route?.settings?.layout;
      if (!_.isEqual(currentSettings.layout, routeLayouts)) {
        dispatch(changeLayout(routeLayouts));
      }
    }
  }, [pathname]);

  return <Layout />;
};
