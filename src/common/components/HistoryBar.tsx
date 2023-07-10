import React from 'react';
import Button from './Button';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { FaClock, FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { decode } from 'jsonwebtoken';
import { findHistory } from '../lib/findHistory';


const HistoryBar = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['history'], queryFn: async () => {
      const token = Cookies.get("token");
      if (token) {
        const user: any = decode(token);
        const history = await findHistory(user.id);
        return JSON.parse(history);
      }

      return null;
    }
  })


  console.log("final", data);
  return (

    <div className="fixed top-0 left-0 w-full h-full z-10 bg-black">
      <div className='flex items-center text-xl justify-between border-b p-4'>
        <div className='flex items-center gap-2 font-semibold'>
          <FaClock />
          <span>My History</span>
        </div>
        <Button type='button' wrapperClassName='text-2xl' buttonClassName='w-full flex items-center' >
          <FaTimes />
        </Button>
      </div>

      {!data && <div className='text-white text-center p-2'>No Recent History</div> }
    </div>
  )
};

export default HistoryBar;