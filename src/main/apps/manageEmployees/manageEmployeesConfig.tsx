// import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";
import { RouteConfigType } from "types/configTypes";
import ManageEmployees from ".";

const ManageEmployeesConfig: RouteConfigType = {
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
      path: "manage-employees",
      element: <ManageEmployees />,
    },
  ],
};

export default ManageEmployeesConfig;
