import { BooleanFilter } from "../../util/BooleanFilter";
import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookWhereInput = {
  active?: BooleanFilter;
  app?: AppWhereUniqueInput;
  createdAt?: DateTimeFilter;
  eventType?: EventTypeWhereUniqueInput;
  id?: StringFilter;
  payloadTemplate?: StringNullableFilter;
  secret?: StringNullableFilter;
  subscriberUrl?: StringFilter;
  user?: UserWhereUniqueInput;
};
