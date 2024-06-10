import { SettingsConfigType } from "../configs/types";

export type User = {
  uid: string;
  role: string[] | string | null;
  data: {
    displayName: string;
    photoURL?: string;
    email?: string;
    shortcuts?: string[];
    settings?: Partial<SettingsConfigType>;
    loginRedirectUrl?: string;
  };
};
