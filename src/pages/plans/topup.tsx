import React, { useState } from "react";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import TopupForm from "@/modules/plans/components/TopupForm";
import VAinfo from "@/modules/plans/components/VAinfo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { decode } from "jsonwebtoken";

const PlansTopup = ({ user }: any) => {
  const [vaInfo, setVaInfo] = useState<any>({});

  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="w-full lg:w-[450px] mx-auto min-h-screen bg-white text-black p-4">
          <h1 className="mt-4 mb-2 text-center text-3xl font-semibold">
            Pay-as-you-Go
          </h1>
          <h2 className="text-center mb-2">
            Only pay for what you need, no expiration time
          </h2>
          <div className="border border-gray-500 p-2 rounded">
            Current Balance:{" "}
            <span className="text-green-700 font-semibold">
              {user?.balance}
            </span>
          </div>
          {!vaInfo?.bank_name && <TopupForm dispatchVAinfo={setVaInfo} />}
          {vaInfo?.bank_name && <VAinfo info={vaInfo} />}
        </div>
      </div>
    </div>
  );
};

export default PlansTopup;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login?target=/plans/topup",
      },
    };
  }

  const decodedToken: any = decode(token);

  return {
    props: {
      user: decodedToken,
    },
  };
};
