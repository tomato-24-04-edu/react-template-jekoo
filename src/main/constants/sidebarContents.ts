import { NavItemType } from "types/navbarTypes";

export const navigationConfig: NavItemType[] = [
  {
    id: "manage-employee",
    title: "社員管理",
    subtitle: "社員管理ページ",
    type: "item",
    icon: "outline:home",
    translate: "Manage Employee",
    // children: [
    //   {
    //     id: "dashboards.project",
    //     title: "Project",
    //     type: "item",
    //     icon: "heroicons-outline:clipboard-check",
    //     url: "/dashboards/project",
    //   },
    //   {
    //     id: "dashboards.analytics",
    //     title: "Analytics",
    //     type: "item",
    //     icon: "heroicons-outline:chart-pie",
    //     url: "/dashboards/analytics",
    //   },
    //   {
    //     id: "dashboards.finance",
    //     title: "Finance",
    //     type: "item",
    //     icon: "heroicons-outline:cash",
    //     url: "/dashboards/finance",
    //   },
    //   {
    //     id: "dashboards.crypto",
    //     title: "Crypto",
    //     type: "item",
    //     icon: "heroicons-outline:currency-dollar",
    //     url: "/dashboards/crypto",
    //   },
    // ],
  },
];

// export type SidebarContentsType = {
//   key: number;
//   name: string;
//   path: string;
// };

// export const SidebarContents: SidebarContentsType[] = [
//   {
//     key: 0,
//     name: "SideBar Contents 1",
//     path: "/sidebar-contents-1",
//   },
//   {
//     key: 1,
//     name: "SideBar Contents 2",
//     path: "/sidebar-contents-2",
//   },
//   {
//     key: 2,
//     name: "SideBar Contents 3",
//     path: "/sidebar-contents-3",
//   },
//   {
//     key: 3,
//     name: "SideBar Contents 4",
//     path: "/sidebar-contents-4",
//   },
// ];
