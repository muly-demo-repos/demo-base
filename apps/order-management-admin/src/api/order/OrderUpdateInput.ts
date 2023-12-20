import { Decimal } from "decimal.js";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: Decimal | null;
  customer?: CustomerWhereUniqueInput | null;
  details?: string | null;
};
