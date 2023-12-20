import { App } from "../app/App";
import { User } from "../user/User";

export type ApiKey = {
  app?: App | null;
  createdAt: Date;
  expiresAt: Date | null;
  hashedKey: string;
  id: string;
  lastUsedAt: Date | null;
  note: string | null;
  user?: User | null;
};
