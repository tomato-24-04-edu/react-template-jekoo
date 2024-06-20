import { RouteConfigType } from "types/configTypes";
import TempPage from ".";

const TempConfig: RouteConfigType = {
  settings: {
    layout: {
      navbar: {
        display: false,
      },
      header: {
        display: false,
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
