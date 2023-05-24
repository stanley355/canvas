import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import jwtDecode from "jwt-decode";
import Layout from "@/common/components/Layout";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";

interface IProfile {
  user: {
    balance: number;
  };
}

const Topup = (props: IProfile) => {
  const { user } = props;

  return (
    <Layout>
      <div className="container mx-auto p-4 h-screen">
        <h1 className="text-center text-2xl font-bold my-4">Topup</h1>

        <div className="font-semibold text-lg">
          Oops you are running out of balance!
        </div>
        <div className="border p-2 my-2">Current Balance: Rp {user.balance}</div>
        
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
