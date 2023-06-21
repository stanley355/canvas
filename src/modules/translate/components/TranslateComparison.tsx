import React from 'react';
import Link from 'next/link';
import { TRANSLATE_COMPARISON } from '../constant';

const TranslateComparison = () => {
  return (
    <div className='my-8 mb-16'>
      <div className='font-semibold text-lg mb-2'>Wanna Have Better Translation Result? Support us with  <Link href="/premium/translate" className='underline text-blue-200'>Premium Translation</Link>: </div>
      <table className='lg:w-full'>
        <thead>
          <tr>
            <th className='border lg:py-2' >-</th>
            <th className='border lg:py-2'>Original</th>
            <th className='border lg:py-2'>Premium</th>
          </tr>
        </thead>
        <tbody>
          {TRANSLATE_COMPARISON.map((comparison: any) => <tr key={comparison.title}>
            <td className='border text-center lg:py-2'>{comparison.title}</td>
            <td className='border text-center lg:py-2'>{comparison.original}</td>
            <td className='border text-center lg:py-2'>{comparison.premium}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default TranslateComparison;