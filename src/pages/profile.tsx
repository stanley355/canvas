import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import jwtDecode from 'jwt-decode';
import Button from '@/common/components/Button';

interface IProfile {
  user: {
    fullname: string;
    email: string;
  };
}

const Profile = (props: IProfile) => {
  const { user } = props;

  return (
    <Layout>
      <div className='container mx-auto p-4 h-screen'>
        <div className='text-2xl'>{user.fullname}</div>
        <div>{user.email}</div>

        <div className='mt-8 lg:w-1/3'>
          <div className='font-semibold text-lg'>Oops you are running out of balance!</div>
          <div className='border p-2 my-2'>
            Rp 0
          </div>
          <div className='my-2'>*Add more balance you can access our Premium Translation and Checkbot (Better Result & Correction)</div>
          <div>**You can even start Premium with Rp1000, we charge you by per word/token basis (Rp 1 per word)</div>
          <div className='grid grid-cols-2 gap-4 my-4'>
            <Button type='link' href='/premium' title='Premium' wrapperClassName='border border-white p-2 bg-white text-black text-center rounded font-semibold hover:bg-transparent hover:text-white' buttonClassName='w-full'/>
            <Button type='link' href='/balance' title='Balance' wrapperClassName='border border-white p-2 bg-white text-black text-center rounded font-semibold hover:bg-transparent hover:text-white' buttonClassName='w-full'/>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Profile;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  };

  const decodedToken = jwtDecode(token);

  return {
    props: {
      user: decodedToken
    }
  };
};