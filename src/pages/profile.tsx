import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import MetaSEO from "@/common/components/MetaSEO";
import ProfileBalance from "@/modules/profile/components/ProfileBalance";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";

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

  const seo = {
    title:
      "LanguageAI - 10x Better Writing Check and Translation for All Languages",
    description:
      "Discover LanguageAI's Checkbot and Translation products that provide 10x better grammar and translation accuracy than Grammarly and Google Translate. Our AI-powered technology can check your writing and correct grammar and spelling errors in any language. Translate any language in the world with LanguageAI, and provide context to get accurate and nuanced translations. Experience LanguageAI, the best language tool for writers and communicators worldwide.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  const onLogoutClick = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="container mx-auto min-h-screen text-black bg-white p-4">
          <div className="lg:w-1/3">

            <div className="border border-gray-500 p-2 mb-4 rounded lg:flex lg:gap-2 lg:w-fit">
              <div>Referral ID:</div>
              <div className="text-blue-500">{user.id}</div>
            </div>
            <div className="text-2xl">{user.fullname}</div>
            <div>{user.email}</div>

            <ProfileBalance balance={user.balance} />
            <Button
              type="button"
              onClick={onLogoutClick}
              title="logout"
              wrapperClassName="mt-8 border border-gray-500 w-16 py-1 rounded text-center "
              buttonClassName="w-full hover:underline"
            />
          </div>
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
  const user = await fetchUserData(decodedToken.email);

  return {
    props: {
      user,
    },
  };
};
