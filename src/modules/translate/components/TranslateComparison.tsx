import React from 'react';
import Link from 'next/link';
import ComparisonTable from '@/common/components/ComparisonTable';
import { TRANSLATE_COMPARISON } from '../constant';

const TranslateComparison = () => {
  return (
    <div className='my-8 mb-16'>
      <div className='font-semibold text-lg mb-2'>Wanna Have Better Translation Result? Support us with  <Link href="/premium/translate" className='underline text-blue-200'>Premium Translation</Link>: </div>
      <ComparisonTable comparisons={TRANSLATE_COMPARISON} />
    </div>
  )
};

export default TranslateComparison;