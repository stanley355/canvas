import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import jwtDecode from "jwt-decode";
import Layout from "@/common/components/Layout";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";
import TopupForm from "@/modules/profile/components/TopupForm";


interface ITopup{
  user: {
    balance: number;
  };
}

const Topup = (props: ITopup) => {
  const { user } = props;

  return (
    <Layout>
      <div className="container mx-auto p-4 h-screen">
        <h1 className="text-center text-2xl font-bold my-4">Topup</h1>

        <div className="font-semibold text-lg">
          Oops you are running out of balance!
        </div>
        <div className="border p-2 my-2">Current Balance: Rp {user.balance}</div>
       <TopupForm /> 
      <div className="my-2">
        *Topup more balance so you can access our Premium Translation and Checkbot
        (Better Result & Correction)
      </div>
      <div>
        **You can even start Premium with Rp1000, we charge you by per word/token
        basis (Rp 1 per word)
      </div>
      </div>
    </Layout>
  );
};

export default Topup;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  const decodedToken: any = jwtDecode(token);
  const user = await fetchUserData(decodedToken.email);

  return {
    props: {
      user,
    },
  };
};
