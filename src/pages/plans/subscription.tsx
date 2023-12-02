import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaCircleArrowLeft } from "react-icons/fa6";

import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import VAinfo from "@/modules/plans/components/VAinfo";
import SubscriptionVAForm from "@/modules/plans/components/SubscriptionVAForm";
import PlanSubscriptionOverview from "@/modules/plans/components/PlanSubscriptionOverview";
import { calcSubscriptionCost } from "@/modules/plans/lib/calcSubscriptionCost";

const Subscription = (props: any) => {
  const { duration } = props;
  const [vaInfo, setVaInfo] = useState<any>({});

  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white">
        <div className="w-full lg:w-[400px] mx-auto h-[90vh] p-4 border-x border-blue-900">
          <Link href="/plans">
            <FaCircleArrowLeft className="text-2xl text-blue-900" />
          </Link>
          <h1 className="mb-2 text-center text-3xl flex mx-auto w-fit">
            Language{" "}
            <Image
              src="/images/languageai.png"
              alt="LanguageAI"
              width={30}
              height={30}
              className="mr-2"
            />{" "}
            Subscription
          </h1>
          <h2 className="text-center mb-2">How can AI help you?</h2>
          {vaInfo?.bank_name ? (
            <VAinfo info={vaInfo} />
          ) : (
            <>
              <PlanSubscriptionOverview duration={duration} />
              <SubscriptionVAForm
                duration={duration}
                amount={calcSubscriptionCost(duration)}
                dispatchVAinfo={setVaInfo}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
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

  return {
    props: {
      duration: ctx.query.duration,
    },
  };
};
