import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import MetaSEO from "@/common/components/MetaSEO";
import ProfileBalance from "@/modules/profile/components/ProfileBalance";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";
import { HOME_SEO } from "@/modules/home/lib/constant";
import { FaHandPointUp, FaSignOutAlt, FaSkating } from "react-icons/fa";

interface IProfile {
  user: {
    id: string;
    fullname: string;
    email: string;
    balance: number;
  };
}

const Profile = (props: IProfile) => {
  const { user } = props;

  const onLogoutClick = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  const PlanBox = () => (
    <div className="flex items-center justify-between border border-gray-500 rounded p-2 my-4 lg:my-0 lg:w-2/3 lg:items-start">
      <div>
        <div className="font-semibold">My Plan:</div>
        <div>*Freemium Plan</div>
      </div>
      <Button
        type="link"
        href="/plans/"
        wrapperClassName="bg-blue-900 p-2 text-white rounded"
        buttonClassName="w-full h-full flex items-center gap-2"
      >
        <FaSkating />
        <span>Upgrade</span>
      </Button>
    </div>
  )

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-white">
        <div className="container mx-auto min-h-screen text-black bg-white p-4 lg:border-l lg:border-r lg:flex">
          <div className="lg:w-1/3">
            <div className="text-2xl">{user.fullname}</div>
            <div>{user.email}</div>
          </div>
          <PlanBox />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
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

  const decodedToken: any = decode(token);

  return {
    props: {
      user: decodedToken,
    },
  };
};
