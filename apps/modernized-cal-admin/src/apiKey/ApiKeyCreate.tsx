import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AppTitle } from "../app/AppTitle";
import { UserTitle } from "../user/UserTitle";

export const ApiKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="app.id" reference="App" label="App">
          <SelectInput optionText={AppTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <TextInput label="Hashed Key" source="hashedKey" />
        <DateTimeInput label="Last Used At" source="lastUsedAt" />
        <TextInput label="Note" source="note" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
