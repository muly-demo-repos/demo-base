import { Decimal } from "decimal.js";
import { Customer } from "../customer/Customer";

export type Order = {
  amount: Decimal | null;
  createdAt: Date;
  customer?: Customer | null;
  details: string | null;
  id: string;
  updatedAt: Date;
};
