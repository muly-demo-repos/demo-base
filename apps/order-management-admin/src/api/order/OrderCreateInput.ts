import { Decimal } from "decimal.js";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  amount?: Decimal | null;
  customer?: CustomerWhereUniqueInput | null;
  details?: string | null;
};
