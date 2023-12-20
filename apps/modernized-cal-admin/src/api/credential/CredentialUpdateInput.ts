import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { DestinationCalendarUpdateManyWithoutCredentialsInput } from "./DestinationCalendarUpdateManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialUpdateInput = {
  app?: AppWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarUpdateManyWithoutCredentialsInput;
  key?: InputJsonValue;
  typeField?: string;
  user?: UserWhereUniqueInput | null;
};
