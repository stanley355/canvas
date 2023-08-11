import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FaCheck, FaTimes } from 'react-icons/fa';

import Layout from '@/common/components/Layout';
import { PLANS_OPTIONS } from '@/modules/plans/lib/constant';
import PlanComparisonTable from '@/modules/plans/components/PlanComparisonTable';
import TransQualityComparisonTable from '@/modules/plans/components/TransQualityComparisonTable';
import MetaSEO from '@/common/components/MetaSEO';
import { HOME_SEO } from '@/modules/home/lib/constant';

const Plans = () => {

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className='container mx-auto min-h-screen bg-white text-black p-4 lg:p-8' id='start'>
          <h1 className='text-3xl mb-4 lg:text-5xl'>Pricing for All Stages</h1>
          <h2 className='lg:text-lg'>All plans include access to Premium package: Translate+, Checkbot+, and LanguageGPT (Coming soon).</h2>
          <div className='my-8 px-4 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-4'>
            {PLANS_OPTIONS.map((plan: any, index: number) => <div key={plan.title} className='border border-gray-500 mb-8'>
              {index === 0 && <div className='p-2 text-center bg-orange-100 border-b border-gray-500'>Best Value</div>}
              <div className={classNames('p-4 pb-8', index === 0 ? "bg-green-100" : "")}>
                <div className='my-4 text-center text-2xl'>{plan.title}</div>
                <div className='text-center mb-4'>{plan.desc}</div>
                <div className='mt-4 text-center text-xl'>{plan.price}</div>
                <div className='text-center text-lg'>{plan.unit}</div>
                <div className='flex flex-col items-center mt-8'>
                  <Link href={plan.url} className="border border-gray-500 rounded-[2rem] bg-[#feff69] text-lg font-semibold p-4">Get started</Link>
                  <Link href="#comparison" className='mt-4 underline'>Learn More</Link>
                </div>
              </div>
            </div>)}
          </div>
          <PlanComparisonTable />
          <TransQualityComparisonTable />
          <div className='my-8 flex flex-col items-center'>
            <div className='text-3xl font-semibold'>Satisfied with Our AI?</div>
            <div className='text-lg mb-8'>What are you waiting for?</div>
            <Link href="#start" className="border border-gray-500 rounded-[2rem] bg-[#feff69] text-lg font-semibold p-4">Get started</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Plans;