import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import { FaSkating } from "react-icons/fa";

import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import { fetchUserData } from "@/common/lib/fetchUserData";
import PlanBox from "@/modules/profile/components/PlanBox";

interface IProfile {
  user: any;
}

const Profile = (props: IProfile) => {
  const { user } = props;

  const onLogoutClick = () => {
    Cookies.remove("token");
    Cookies.remove("subscription");
    window.location.href = "/";
  };


  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="container mx-auto min-h-screen text-black bg-white p-4 lg:flex">
          <div className="lg:w-1/3">
            <div className="text-2xl">{user.fullname}</div>
            <div>{user.email}</div>
            <Button
              type="button"
              title="logout"
              onClick={onLogoutClick}
              wrapperClassName="p-1 w-fit border border-gray-500 rounded hidden lg:block mt-2"
              buttonClassName="w-full h-full hover:underline"
            />
          </div>
          <PlanBox user={user} />
          <Button
            type="button"
            title="logout"
            onClick={onLogoutClick}
            wrapperClassName="p-1 w-fit border border-gray-500 rounded lg:hidden"
            buttonClassName="w-full h-full"
          />
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
