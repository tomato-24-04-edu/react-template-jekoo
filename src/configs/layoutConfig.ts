export const DefaultLayoutConfig = {
  mode: "container",
  containerWidth: 1570,
  navbar: {
    display: true,
    style: "style-1",
    folded: true,
    position: "left",
    open: true,
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

export type DefaultLayoutConfigType = typeof DefaultLayoutConfig;

export const MobileLayOutConfig = {
  mode: "fullwidth",
  containerWidth: "100%",
  navbar: {
    display: true,
    style: "static",
    position: "top",
    folded: false,
    open: false,
  },
  toolbar: {
    display: false,
  },
  footer: {
    display: true,
    style: "static",
  },
  leftSidePanel: {
    display: false,
  },
  rightSidePanel: {
    display: false,
  },
};

export type MobileLayOutConfigType = typeof MobileLayOutConfig;
