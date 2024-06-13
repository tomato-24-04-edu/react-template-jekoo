import * as React from "react";
import { Palette } from "@mui/material/styles/createPalette";
import { RouteObject } from "react-router-dom";
import { PartialDeep } from "type-fest";
import {
  DefaultLayoutConfigType,
  MobileLayOutConfigType,
} from "../configs/layoutConfig";
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

//========================================================

export type ThemeType = {
  palette: PartialDeep<Palette>;
};

export type SettingsConfigType = {
  layout: DefaultLayoutConfigType | MobileLayOutConfigType;
  customScrollbars?: boolean;
  theme: ThemeOptions;
  defaultAuth?: string[];
  loginRedirectUrl: string;
};
