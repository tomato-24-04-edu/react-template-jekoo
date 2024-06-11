import { SettingsConfigType } from "../configs/configTypes";

export type User = {
  uid: string;
  role: string[] | string | null;
  data: {
    displayName: string;
    photoURL?: string;
    email?: string;
    settings?: Partial<SettingsConfigType>;
    loginRedirectUrl?: string;
  };
};
