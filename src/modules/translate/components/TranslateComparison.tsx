import React from 'react';
import { TRANSLATE_COMPARISON } from '../constant';

const TranslateComparison = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className='border' >-</th>
            <th className='border'>Non-Premium</th>
            <th className='border'>Premium</th>
          </tr>
        </thead>
        <tbody>
          {TRANSLATE_COMPARISON.map((comparison: any) => <tr>
            <td className='border text-center'>{comparison.title}</td>
            <td className='border text-center'>{comparison.original}</td>
            <td className='border text-center'>{comparison.premium}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default TranslateComparison;