import { RouteConfigType } from "types/configTypes";
import Document from ".";

const DocumentConfig: RouteConfigType = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: true,
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
      path: "document",
      element: <Document />,
    },
  ],
};

export default DocumentConfig;
