import { RouteConfigType } from "types/configTypes";
import ManageEmployees from ".";

const ManageEmployeesConfig: RouteConfigType = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        header: {
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
