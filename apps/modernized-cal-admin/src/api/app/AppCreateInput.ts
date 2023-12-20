import { ApiKeyCreateNestedManyWithoutAppsInput } from "./ApiKeyCreateNestedManyWithoutAppsInput";
import { CredentialCreateNestedManyWithoutAppsInput } from "./CredentialCreateNestedManyWithoutAppsInput";
import { InputJsonValue } from "../../types";
import { WebhookCreateNestedManyWithoutAppsInput } from "./WebhookCreateNestedManyWithoutAppsInput";

export type AppCreateInput = {
  apiKey?: ApiKeyCreateNestedManyWithoutAppsInput;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  credentials?: CredentialCreateNestedManyWithoutAppsInput;
  dirName: string;
  keys?: InputJsonValue;
  webhook?: WebhookCreateNestedManyWithoutAppsInput;
};
