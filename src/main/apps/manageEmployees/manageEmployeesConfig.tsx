import { RouteConfigType } from "types/configTypes";
import ManageEmployees from ".";

const ManageEmployeesConfig: RouteConfigType = {
  settings: {
    layout: {
      navbar: {
        display: true,
      },
      header: {
        display: true,
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
