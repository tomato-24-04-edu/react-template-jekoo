import React, { ComponentType } from "react";
import Layout1 from "./layout1";
import Layout2 from "./layout2";

export type themeLayoutsType = {
  [key: string]: ComponentType<{ children?: React.ReactNode }>;
};

const themeLayouts: themeLayoutsType = {
  layout1: Layout1,
  layout2: Layout2,
};

export default themeLayouts;
