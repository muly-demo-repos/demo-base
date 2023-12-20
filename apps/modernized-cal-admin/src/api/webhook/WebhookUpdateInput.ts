import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookUpdateInput = {
  active?: boolean;
  app?: AppWhereUniqueInput | null;
  eventTriggers?: Array<
    "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "BOOKING_CANCELLED"
  >;
  eventType?: EventTypeWhereUniqueInput | null;
  payloadTemplate?: string | null;
  secret?: string | null;
  subscriberUrl?: string;
  user?: UserWhereUniqueInput | null;
};
