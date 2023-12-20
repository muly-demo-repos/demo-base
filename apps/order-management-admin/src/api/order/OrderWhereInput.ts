import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  amount?: DecimalNullableFilter;
  customer?: CustomerWhereUniqueInput;
  details?: StringNullableFilter;
  id?: StringFilter;
};
