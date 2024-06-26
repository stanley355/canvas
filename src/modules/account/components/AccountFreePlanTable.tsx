import NextLink from '@/common/components/NextLink'
import React from 'react'
import { PiStudentDuotone, PiUserPlusDuotone } from 'react-icons/pi'

const AccountFreePlanTable = () => {
  return (
    <table className='w-full border text-xs lg:text-base'>
      <thead>
        <tr className='[&>*]:p-2 [&>*]:border [&>*]:border-black bg-blue-100'>
          <th >Plans</th>
          <th>Free</th>
          <th>Student</th>
          <th >Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr className='[&>*]:text-center [&>*]:border [&>*]:border-black'>
          <td className='p-2 border'>AI Translate</td>
          <td className='p-2 border'>10x / Month</td>
          <td className='p-2 border'>Unlimited</td>
          <td className='p-2 border'>Unlimited</td>
        </tr>
        <tr className='[&>*]:text-center [&>*]:border [&>*]:border-black bg-blue-100'>
          <td className='p-2 border'>AI Checkbot</td>
          <td className='p-2 border'>10x / Month</td>
          <td className='p-2 border'>Unlimited</td>
          <td className='p-2 border'>Unlimited</td>
        </tr>
        <tr className='[&>*]:text-center [&>*]:border [&>*]:border-black'>
          <td className='p-2 border'>Base Price</td>
          <td className='p-2 border'>Rp 0</td>
          <td className='p-2 border'>Rp 0</td>
          <td className='p-2 border'>Rp 25,000</td>
        </tr>
        <tr className='[&>*]:text-center [&>*]:border [&>*]:border-black bg-blue-100'>
          <td className='p-2 border'>Time</td>
          <td className='p-2 border'>Forever</td>
          <td className='p-2 border'>
            <ol className='list-disc ml-4 text-left'>
              <li>1st year: Free</li>
              <li>2nd year: 50% off</li>
              <li className='font-semibold'>*renewable</li>
            </ol>
          </td>
          <td className='p-2 border'>
            <ol className='list-disc ml-4 text-left'>
              <li>Monthly</li>
              <li>Quarterly</li>
              <li>Yearly</li>
            </ol>
          </td>
        </tr>
        <tr className='[&>*]:text-center [&>*]:border [&>*]:border-black'>
          <td className='p-2 border'></td>
          <td className='p-2 border'>Applied</td>
          <td className='p-2 border'>
            <NextLink href="/student/application" className='justify-center mx-auto w-fit gap-1'>
              <PiStudentDuotone />
              <span>Apply</span>
            </NextLink>
          </td>
          <td className='p-2 border'>
            <NextLink href="/plans" className='justify-center mx-auto w-fit gap-2'>
              <PiUserPlusDuotone />
              <span>Apply</span>
            </NextLink>
          </td>
        </tr>

      </tbody>
    </table>
  )
}

export default AccountFreePlanTable