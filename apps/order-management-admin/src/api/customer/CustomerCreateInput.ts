import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
