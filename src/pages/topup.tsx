import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import jwtDecode from "jwt-decode";
import Layout from "@/common/components/Layout";
import TopupForm from "@/modules/profile/components/TopupForm";
import VAinfo from "@/modules/profile/components/VAinfo";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";

interface ITopup {
  user: any;
}

const Topup = (props: ITopup) => {
  const { user } = props;
  const [vaInfo, setVaInfo] = useState<any>({});

  console.log(vaInfo);

  //   {
  //     "virtual_account_number": "8000000000010446",
  //     "created_date": "20230529090510",
  //     "expired_date": "20230529100510",
  //     "created_date_utc": "2023-05-29T02:05:10Z",
  //     "expired_date_utc": "2023-05-29T03:05:10Z",
  //     "how_to_pay_page": "https://sandbox.doku.com/how-to-pay/v2/doku-virtual-account/8000000000010446/LHidqYTdpkkclYaQckAl0MMh7l0c_Uwf9vZa5Fj07L8",
  //     "how_to_pay_api": "https://api-sandbox.doku.com/doku-virtual-account/v2/how-to-pay-api/8000000000010446/LHidqYTdpkkclYaQckAl0MMh7l0c_Uwf9vZa5Fj07L8",
  //     "bank_name": "BCA via DOKU"
  // }

  return (
    <Layout>
      <div className="container mx-auto p-4 h-screen">
        <div className="lg:w-1/3 lg:mx-auto">
          <h1 className="text-center text-2xl font-bold my-4">Topup</h1>

          <div className="font-semibold text-lg">
            Oops you are running out of balance!
          </div>
          <div className="border p-2 my-2">Current Balance: Rp {user.balance}</div>
          {vaInfo?.bank_name ? <VAinfo info={vaInfo} /> : <TopupForm user={user} dispatchVAinfo={setVaInfo} />}
        </div>
      </div>
    </Layout>
  );
};

export default Topup;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  const decodedToken: any = jwtDecode(token);
  const user = await fetchUserData(decodedToken.email);

  return {
    props: {
      user,
    },
  };
};
