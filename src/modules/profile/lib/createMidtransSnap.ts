import axios from "axios";

export const createMidtransSnap = async (
  order_id: string,
  gross_amount: number,
  user: any
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/midtrans/snap/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    data: {
      "transaction_details": {
        order_id,
        gross_amount,
      },
      "customer_details": {
        "id": user.id,
        "fullname": user.fullname,
        "email": user.email,
      },
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
