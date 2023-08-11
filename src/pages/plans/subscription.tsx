import React, { useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Layout from '@/common/components/Layout';
import { calcSubscriptionCost } from '@/modules/plans/lib/calcSubscriptionCost';
import { formatSubscriptionMonth } from '@/modules/plans/lib/formatSubscriptionMonth';
import { formatSubscriptionEndDate, formatSubscriptionStartDate } from '@/modules/plans/lib/formatSubscriptionDate';
import SubscriptionVAForm from '@/modules/plans/components/SubscriptionVAForm';
import VAinfo from '@/modules/plans/components/VAinfo';
import MetaSEO from '@/common/components/MetaSEO';
import { HOME_SEO } from '@/modules/home/lib/constant';

const Subscription = (props: any) => {
  const { duration } = props;
  const [vaInfo, setVaInfo] = useState<any>({});

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className='w-full lg:w-[450px] mx-auto min-h-screen bg-white text-black p-4'>
          <h1 className='mt-4 mb-2 text-center text-3xl flex mx-auto w-fit'>Language <Image src="/images/languageai.png" alt="LanguageAI" width={30} height={30} className='mr-2' />  Subscription</h1>
          <h2 className='text-center mb-2'>Your solution to Eazy Language</h2>
          {!vaInfo?.bank_name && <div className='border border-gray-500 p-2 mt-4'>
            <div className='text-center text-xl font-semibold mb-4'>Subscription Overview</div>
            <div>Duration: <span className='font-semibold'> {formatSubscriptionMonth(duration)} </span></div>
            <div>Cost: <span className='text-green-700 font-semibold'>Rp{calcSubscriptionCost(duration)}</span> </div>
            <div>Start Date: {formatSubscriptionStartDate()}</div>
            <div>End Date: {formatSubscriptionEndDate(duration)}</div>
          </div>}
          {!vaInfo?.bank_name && <SubscriptionVAForm duration={duration} amount={calcSubscriptionCost(duration)} dispatchVAinfo={setVaInfo} />}
          {vaInfo?.bank_name && <VAinfo info={vaInfo} />}
        </div>
      </div>
    </Layout>
  )
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
      duration: ctx.query.duration
    },
  };
};