import { NavItemType } from "types/navBarTypes";
export const navBarContents: NavItemType[] = [
  {
    id: "manage-employee",
    title: "社員管理",
    subtitle: "社員管理ページ",
    type: "item",
    icon: "outline:home",
    translate: "Manage Employee",
    url: "manage-employees",
    children: [],
  },
  {
    id: "temp",
    title: "Temp",
    subtitle: "Temp Page",
    type: "item",
    icon: "outline:home",
    translate: "Temp Page",
    url: "temp",
    children: [],
  },
];
