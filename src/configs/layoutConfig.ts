export const LayOut1Config = {
  title: "Layout1",
  mode: "container",
  containerWidth: 1570,
  navbar: {
    display: true,
    position: "left",
    open: false,
  },
  header: {
    display: true,
  },
  sidepanel: {
    display: true,
    position: "right",
    open: false,
  },
};

export type LayoutConfigType = typeof LayOut1Config;

export const Layout2Config = {
  title: "Layout2",
  mode: "container",
  containerWidth: 1570,
  navbar: {
    display: true,
    position: "right",
    open: true,
  },
  header: {
    display: true,
  },
  sidepanel: {
    display: true,
    position: "left",
    open: false,
  },
};

