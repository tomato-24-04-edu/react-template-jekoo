export const Layout1Config = {
  title: "Layout 1 - Vertical",
  defaults: {
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
  },
  form: {
    mode: {
      title: "Mode",
      type: "radio",
      options: [
        {
          name: "Boxed",
          value: "boxed",
        },
        {
          name: "Full Width",
          value: "fullwidth",
        },
        {
          name: "Container",
          value: "container",
        },
      ],
    },
    containerWidth: {
      title: "Container Width (px)",
      type: "number",
    },

    navbar: {
      type: "group",
      title: "Navbar",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        position: {
          title: "Position",
          type: "radio",
          options: [
            {
              name: "Left",
              value: "left",
            },
            {
              name: "Right",
              value: "right",
            },
          ],
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Slide (style-1)",
              value: "style-1",
            },
            {
              name: "Folded (style-2)",
              value: "style-2",
            },
            {
              name: "Tabbed (style-3)",
              value: "style-3",
            },
            {
              name: "Tabbed Dense (style-3-dense)",
              value: "style-3-dense",
            },
          ],
        },
        folded: {
          title: "Folded (style-2, style-3)",
          type: "switch",
        },
      },
    },
    toolbar: {
      type: "group",
      title: "Toolbar",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
      },
    },
    footer: {
      type: "group",
      title: "Footer",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
      },
    },
  },
};

export type Layout1ConfigDefaultsType = (typeof Layout1Config)["defaults"];

export const Layout2Config = {
  title: "Layout 2 - Horizontal",
  defaults: {
    mode: "container",
    containerWidth: 1120,
    navbar: {
      display: true,
      style: "fixed",
      folded: true,
    },
    toolbar: {
      display: true,
      style: "static",
      position: "below",
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
  },
  form: {
    mode: {
      title: "Mode",
      type: "radio",
      options: [
        {
          name: "Boxed",
          value: "boxed",
        },
        {
          name: "Full Width",
          value: "fullwidth",
        },
        {
          name: "Container",
          value: "container",
        },
      ],
    },
    containerWidth: {
      title: "Container Width (px)",
      type: "number",
    },
    navbar: {
      type: "group",
      title: "Navbar",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
      },
    },
    toolbar: {
      type: "group",
      title: "Toolbar",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        position: {
          title: "Position",
          type: "radio",
          options: [
            {
              name: "Above",
              value: "above",
            },
            {
              name: "Below",
              value: "below",
            },
          ],
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
      },
    },
    footer: {
      type: "group",
      title: "Footer",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
      },
    },
  },
};

export type Layout2ConfigDefaultsType = (typeof Layout2Config)["defaults"];