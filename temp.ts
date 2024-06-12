import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    ComponentType,
  } from "react";
  import {
    matchRoutes,
    useLocation,
    RouteMatch,
    RouteObject,
  } from "react-router-dom";
  import { useAppDispatch, useAppSelector } from "store/hooks";
  import { PartialDeep } from "type-fest";
  
  import Layout1 from "./layout1";
  import Layout2 from "./layout2";
  
  export type themeLayoutsType = {
    [key: string]: ComponentType<{ children?: React.ReactNode }>;
  };
  
  const themeLayouts: themeLayoutsType = {
    layout1: Layout1,
    layout2: Layout2,
  };
  
  import _ from "@lodash";
  // import AppContext from 'app/AppContext';
  import { AppContext } from "App";
  
  import { selectCurrentSettings } from "store/slices/settingSlice/settingSlice";
  
  // import {
  //   generateSettings,
  //   selectCurrentSettings,
  //   selectDefaultSettings,
  //   setSettings,
  // } from "@/core/Settings/SettingsSlice";
  
  import { SettingsConfigType } from "configs/configTypes";
  // import Loading from "../Loading";
  
  // export type RouteObjectType = RouteObject & {
  //   settings?: selectCurrentSettings;
  // };
  
  export type RouteMatchType = RouteMatch & {
    route: RouteObjectType;
  };
  
  type LayoutProps = {
    layouts: themeLayoutsType;
    children?: React.ReactNode;
  };
  
  function LayoutProvider(props: LayoutProps) {
    const { layouts, children } = props;
    const dispatch = useAppDispatch();
    const settings = useAppSelector(selectCurrentSettings);
    // const defaultSettings = useAppSelector(selectDefaultSettings);
  
    const layoutStyle = settings.layout.style;
  
    // const appContext = useContext(AppContext);
    // const { routes } = appContext;
  
    const location = useLocation();
    const { pathname } = location;
  
    const matchedRoutes = matchRoutes(routes, pathname) as
      | RouteMatchType[]
      | null;
  
    const matched = matchedRoutes?.[0] || false;
  
    const newSettings = useRef<PartialDeep<SettingsConfigType>>(settings);
  
    const shouldAwaitRender = useCallback(() => {
      let _newSettings: SettingsConfigType;
  
      // if (prevPathname !== pathname) {
      if (typeof matched !== "boolean") {
        const routeSettings = matched.route.settings;
  
        _newSettings = generateSettings(defaultSettings, routeSettings);
      } else if (!_.isEqual(newSettings.current, defaultSettings)) {
        _newSettings = _.merge({}, defaultSettings);
      } else {
        _newSettings = newSettings.current as SettingsConfigType;
      }
  
      if (!_.isEqual(newSettings.current, _newSettings)) {
        newSettings.current = _newSettings;
      }
    }, [settings, matched]);
  
    shouldAwaitRender();
  
    const currentSettings = useMemo(
      () => newSettings.current,
      [newSettings.current]
    );
  
    useEffect(() => {
      if (!_.isEqual(currentSettings, settings)) {
        dispatch(setSettings(currentSettings as SettingsConfigType));
      }
    }, [dispatch, currentSettings, settings]);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return useMemo(() => {
      // if (!_.isEqual(currentSettings, settings)) {
      // 	return <Loading />;
      // }
  
      return Object.entries(layouts).map(([key, Layout]) => {
        if (key === layoutStyle) {
          return (
            <React.Fragment key={key}>
              <Layout>{children}</Layout>
            </React.Fragment>
          );
        }
  
        return null;
      });
    }, [layouts, layoutStyle, children, currentSettings, settings]);
  }
  
  export default LayoutProvider;
  