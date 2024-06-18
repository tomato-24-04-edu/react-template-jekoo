export const LayOut1Config = {
  title: "Layout1",
  mode: "container",
  containerWidth: 1570,
  navbar: {
    display: true,
    style: "normal",
    folded: true,
    position: "left",
    open: false,
  },
  toolbar: {
    display: true,
    style: "fixed",
  },
  footer: {
    display: true,
    style: "fixed",
  },
  leftSidePanel: {
    display: true,
  },
  rightSidePanel: {
    display: true,
  },
};

export type Layout1ConfigType = typeof LayOut1Config;

export const Layout2Config = {
  title: "Layout2",
  mode: "container",
  containerWidth: 1120,
  navbar: {
    display: true,
    style: "normal",
    position: "right",
    folded: true,
    open: true,
  },
  toolbar: {
    display: true,
    style: "static",
    position: "below",
  },
  footer: {
    display: true,
    style: "fixed",
  },
  leftSidePanel: {
    display: true,
  },
  rightSidePanel: {
    display: true,
  },
};

export type Layout2ConfigType = typeof Layout2Config;
