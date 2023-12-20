import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { DestinationCalendarCreateNestedManyWithoutCredentialsInput } from "./DestinationCalendarCreateNestedManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialCreateInput = {
  app?: AppWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarCreateNestedManyWithoutCredentialsInput;
  key: InputJsonValue;
  typeField: string;
  user?: UserWhereUniqueInput | null;
};
