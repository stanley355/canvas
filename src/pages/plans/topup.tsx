import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { decode } from "jsonwebtoken";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import TopupForm from "@/modules/plans/components/TopupForm";
import VAinfo from "@/modules/plans/components/VAinfo";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";

const PlansTopup = ({ user }: any) => {
  const [vaInfo, setVaInfo] = useState<any>({});

  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white h-[90vh]">
        <div className="w-full lg:w-[400px] mx-auto text-black p-4 border-x border-blue-900 h-full">
          <Link href="/plans">
            <FaCircleArrowLeft className="text-2xl text-blue-900" />
          </Link>
          <h1 className="text-center text-3xl font-semibold mb-2">
            Pay-as-you-Go
          </h1>
          <h2 className="text-center mb-4">
            Pay for what you need, no expiration time
          </h2>
          <div className="border border-blue-900 p-2 rounded">
            Current Balance:{" "}
            <span className="text-green-700 font-semibold">
              {user?.balance}
            </span>
          </div>
          {vaInfo?.bank_name ? (
            <VAinfo info={vaInfo} />
          ) : (
            <TopupForm dispatchVAinfo={setVaInfo} />
          )}
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
