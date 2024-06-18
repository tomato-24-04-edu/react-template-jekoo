import { NavItemType } from "types/navBarTypes";

export const navBarContents: NavItemType[] = [
  {
    id: "manage-employee",
    title: "社員管理",
    subtitle: "社員管理ページ",
    type: "item",
    icon: "outline:users",
    translate: "Manage Employee",
    url: "manage-employees",
    children: [],
  },
  {
    id: "temp",
    title: "Temp",
    subtitle: "Temp Page",
    type: "item",
    icon: "outline:template",
    translate: "Temp Page",
    url: "temp",
    children: [],
  },
  {
    id: "document",
    title: "関連情報",
    subtitle: "Document",
    type: "item",
    icon: "outline:document",
    translate: "Document Page",
    url: "document",
    children: [],
  },

];
