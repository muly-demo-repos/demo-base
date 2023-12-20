import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyCreateInput = {
  app?: AppWhereUniqueInput | null;
  expiresAt?: Date | null;
  hashedKey: string;
  lastUsedAt?: Date | null;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
};
