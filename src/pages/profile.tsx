import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import { FaSkating } from "react-icons/fa";

import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import LogoutBtn from "@/modules/profile/components/LogoutBtn";
import { fetchActiveSubscription } from "@/modules/profile/lib/fetchActiveSubscription";
import { fetchUserData } from "@/common/lib/fetchUserData";

interface IProfile {
  user: any;
  subscription: any;
}

const Profile = (props: IProfile) => {
  const { user, subscription } = props;
  
  useEffect(() => {
    Cookies.set("subscription", JSON.stringify(subscription));
  }, [subscription])

  const onLogoutClick = () => {
    Cookies.remove("token");
    Cookies.remove("subscription");
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
  );

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
          <PlanBox />

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

  const user: any = decode(token);
  const plansData: Array<any> = await Promise.allSettled([await fetchUserData(user.email), await fetchActiveSubscription(user.id)]);

  return {
    props: {
      user: plansData[0]?.value,
      subscription: plansData[1]?.value
    },
  };
};
