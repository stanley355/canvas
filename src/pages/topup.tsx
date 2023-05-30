import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import jwtDecode from "jwt-decode";
import Layout from "@/common/components/Layout";
import TopupForm from "@/modules/profile/components/TopupForm";
import VAinfo from "@/modules/profile/components/VAinfo";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";

interface ITopup {
  user: any;
}

const Topup = (props: ITopup) => {
  const { user } = props;
  const [vaInfo, setVaInfo] = useState<any>({});

  console.log(vaInfo);

  return (
    <Layout>
      <div className="container mx-auto p-4 h-screen">
        <div className="lg:w-1/3 lg:mx-auto">
          <h1 className="text-center text-2xl font-bold my-4">Topup</h1>

          <div className="font-semibold text-lg">
            Oops you are running out of balance!
          </div>
          <div className="border p-2 my-2">
            Current Balance: Rp {user.balance}
          </div>
          {vaInfo?.bank_name ? (
            <VAinfo info={vaInfo} />
          ) : (
            <TopupForm user={user} dispatchVAinfo={setVaInfo} />
          )}
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
