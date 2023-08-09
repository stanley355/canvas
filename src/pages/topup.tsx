import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { decode } from "jsonwebtoken";

import Layout from "@/common/components/Layout";
import TopupForm from "@/modules/profile/components/TopupForm";
import VAinfo from "@/modules/profile/components/VAinfo";
import TopupOptions from "@/modules/profile/components/TopupOptions";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";

interface ITopup {
  user: any;
}

const Topup = (props: ITopup) => {
  const { user } = props;
  const [vaInfo, setVaInfo] = useState<any>({});
  const [showTopupForm, setShowTopupForm] = useState(false);

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="container mx-auto">
          <div className="lg:w-1/3 lg:mx-auto bg-white text-black min-h-screen p-4">
            <h1 className="text-center text-2xl font-bold my-4">
              LanguageAI Topup
            </h1>
            {user.balance < 2500 && (
              <div className="font-semibold text-lg text-red-500">
                *Oops you are running out of balance!
              </div>
            )}
            <div className="border p-2 my-2 rounded border-gray-500">
              Current Balance: Rp {user.balance}
            </div>
            <TopupOptions
              onPaypalClick={(type: string) => {
                setShowTopupForm(false);
                setVaInfo({});
              }}
              onBankTrfClick={() => {
                setVaInfo({});
                setShowTopupForm(true);
              }}
            />
            {showTopupForm && (
              <TopupForm
                user={user}
                onBackClick={() => setShowTopupForm(false)}
                dispatchVAinfo={(info: any) => {
                  setShowTopupForm(false);
                  setVaInfo(info);
                }}
              />
            )}
            {vaInfo?.bank_name && <VAinfo info={vaInfo} />}
          </div>
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

  const decodedToken: any = decode(token);
  const user = await fetchUserData(decodedToken.email);

  return {
    props: {
      user,
    },
  };
};
