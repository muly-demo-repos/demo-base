import { ApiKeyUpdateManyWithoutAppsInput } from "./ApiKeyUpdateManyWithoutAppsInput";
import { CredentialUpdateManyWithoutAppsInput } from "./CredentialUpdateManyWithoutAppsInput";
import { InputJsonValue } from "../../types";
import { WebhookUpdateManyWithoutAppsInput } from "./WebhookUpdateManyWithoutAppsInput";

export type AppUpdateInput = {
  apiKey?: ApiKeyUpdateManyWithoutAppsInput;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  credentials?: CredentialUpdateManyWithoutAppsInput;
  dirName?: string;
  keys?: InputJsonValue;
  webhook?: WebhookUpdateManyWithoutAppsInput;
};
