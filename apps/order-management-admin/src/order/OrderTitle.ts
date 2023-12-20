import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "details";

export const OrderTitle = (record: TOrder): string => {
  return record.details?.toString() || String(record.id);
};
