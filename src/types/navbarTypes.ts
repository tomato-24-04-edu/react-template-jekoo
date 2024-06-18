import { SxProps } from "@mui/system";

export type NavBadgeType = {
  bg?: string;
  fg?: string;
  title: string;
  classes?: string;
};

export type NavItemType = {
  id: string;
  title?: string;
  translate?: string;
  auth?: string[] | string;
  subtitle?: string;
  icon?: string;
  iconClass?: string;
  url?: string;
  target?: string;
  type?: string;
  sx?: SxProps;
  disabled?: boolean;
  active?: boolean;
  exact?: boolean;
  end?: boolean;
  badge?: NavBadgeType;
  children?: NavItemType[];
  hasPermission?: boolean;
};
