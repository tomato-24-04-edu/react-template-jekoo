// import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";
import { RouteConfigType } from "types/configTypes";
import TempPage from ".";

const TempConfig: RouteConfigType = {
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
      path: "temp",
      element: <TempPage />,
    },
  ],
};

export default TempConfig;
