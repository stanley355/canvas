import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios from "axios";

interface ICreateDokuVA {
  dokuPath: string;
  topupID: string;
  amount: number;
  user: any;
}

export const createDokuVA = async (payload: ICreateDokuVA) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/doku/va/`;

  const isBNI = payload.dokuPath.includes("bni");
  const dokuPayload: any = {
    headers: {
      request_id: payload.topupID,
      doku_path: payload.dokuPath,
    },
    main: {
      order: {
        invoice_number: payload.topupID,
        amount: Number(payload.amount),
      },
      virtual_account_info: {
        expired_time: 60,
        reusable_status: true,
        info1: "LanguageAI Topup",
      },
      customer: {
        name: payload.user.fullname,
        email: payload.user.email,
      },
    },
  };

  if (isBNI) {
    const topupIDArr = payload.topupID.split("-");
    dokuPayload.main.virtual_account_info.merchant_unique_reference =
      topupIDArr[0] + "-" + topupIDArr[1];
  }

  const axiosConfig = {
    method: "POST",
    url: URL,
    data: dokuPayload,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    const errorRes = axiosErrorHandler(error, URL);
    return errorRes;
  }
};
