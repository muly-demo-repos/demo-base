import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "currency";

export const PaymentTitle = (record: TPayment): string => {
  return record.currency?.toString() || String(record.id);
};
