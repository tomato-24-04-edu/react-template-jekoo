import { RouteConfigType } from "types/configTypes";
import Document from ".";

const DocumentConfig: RouteConfigType = {
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
      path: "document",
      element: <Document />,
    },
  ],
};

export default DocumentConfig;
