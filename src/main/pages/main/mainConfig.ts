// import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";
import { RouteConfigType } from "configs/configTypes";
import MainPage from ".";

const MainConfig: RouteConfigType = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: null,
  routes: [
    {
      path: "main",
      element: <MainPage />,
    },
  ],
};

export default MainConfig;
