import axios from "axios";

export const verifyPaypalTopup = async (topup_id: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/paypal/paid/",
    },
    data: {
      topup_id,
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
