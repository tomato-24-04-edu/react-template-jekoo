import * as React from "react";
import { Palette } from "@mui/material/styles/createPalette";
import type {
  AgnosticIndexRouteObject,
  AgnosticNonIndexRouteObject,
  LazyRouteFunction,
} from "@remix-run/router";

import { PartialDeep } from "type-fest";
import {
  DefaultLayoutConfigType,
  MobileLayOutConfigType,
} from "./layoutConfig";
import { ThemeOptions } from "@mui/material";

//Routes types =======================================================
export interface IndexRouteObject {
  caseSensitive?: AgnosticIndexRouteObject["caseSensitive"];
  path?: AgnosticIndexRouteObject["path"];
  id?: AgnosticIndexRouteObject["id"];
  loader?: AgnosticIndexRouteObject["loader"];
  action?: AgnosticIndexRouteObject["action"];
  hasErrorBoundary?: AgnosticIndexRouteObject["hasErrorBoundary"];
  shouldRevalidate?: AgnosticIndexRouteObject["shouldRevalidate"];
  handle?: AgnosticIndexRouteObject["handle"];
  index: true;
  children?: undefined;
  element?: React.ReactNode | null;
  hydrateFallbackElement?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  HydrateFallback?: React.ComponentType | null;
  ErrorBoundary?: React.ComponentType | null;
  lazy?: LazyRouteFunction<RouteObject>;
}
export interface NonIndexRouteObject {
  caseSensitive?: AgnosticNonIndexRouteObject["caseSensitive"];
  path?: AgnosticNonIndexRouteObject["path"];
  id?: AgnosticNonIndexRouteObject["id"];
  loader?: AgnosticNonIndexRouteObject["loader"];
  action?: AgnosticNonIndexRouteObject["action"];
  hasErrorBoundary?: AgnosticNonIndexRouteObject["hasErrorBoundary"];
  shouldRevalidate?: AgnosticNonIndexRouteObject["shouldRevalidate"];
  handle?: AgnosticNonIndexRouteObject["handle"];
  index?: false;
  children?: RouteObject[];
  element?: React.ReactNode | null;
  hydrateFallbackElement?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  HydrateFallback?: React.ComponentType | null;
  ErrorBoundary?: React.ComponentType | null;
  lazy?: LazyRouteFunction<RouteObject>;
}
export type RouteObject = IndexRouteObject | NonIndexRouteObject;

export type RouteItemType = RouteObject & {
  auth?: string[] | [];
  settings?: unknown;
};

export type RoutesType = RouteItemType[];

export type RouteConfigType = {
  routes: RoutesType;
  settings?: unknown;
  auth?: string[] | [];
};

export type RouteConfigsType = RouteConfigType[];

//========================================================

export type ThemeType = {
  palette: PartialDeep<Palette>;
};

export type SettingsConfigType = {
  layout: DefaultLayoutConfigType;

  customScrollbars?: boolean;
  theme: ThemeOptions;
  defaultAuth?: string[];
  loginRedirectUrl: string;
};
