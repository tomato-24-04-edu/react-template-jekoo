import * as React from "react";
import { Palette } from "@mui/material/styles/createPalette";
import { RouteObject } from "react-router-dom";
import { PartialDeep } from "type-fest";
import { LayoutConfigType } from "../configs/layoutConfig";
import { ThemeOptions } from "@mui/material";

//Routes types =======================================================

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

//Theme types ========================================================

export type ThemeType = {
  palette: PartialDeep<Palette>;
};

export type SettingsConfigType = {
  layout: LayoutConfigType;
  theme: ThemeOptions;
  defaultAuth?: string[];
  loginRedirectUrl: string;
};
