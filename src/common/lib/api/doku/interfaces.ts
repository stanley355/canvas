export interface IDokuCheckoutPaymentRes {
  message: string[];
  response: {
    order: IDokuOrder;
    payment: IDokuPayment;
    customer: {
      email: string;
      name: string;
    };
    additional_info: {
      origin: {
        product: string;
        system: string;
        apiFormat: string;
        source: string;
      };
    };
    uuid: number;
    headers: IDokuHeaders;
  };
}

interface IDokuOrder {
  amount: string;
  invoice_number: string;
  currency: string;
  session_id: string;
  callback_url: string;
}

interface IDokuPayment {
  payment_method_types: string[];
  payment_due_date: number;
  token_id: string;
  url: string;
  expired_date: string;
}

export interface IDokuHeaders {
  request_id: string;
  signature: string;
  date: string;
  client_id: string;
}
