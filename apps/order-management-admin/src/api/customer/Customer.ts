import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
