import React from "react";
import { FaEnvelope, FaRegCircleUser } from "react-icons/fa6";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import { fetchUserData } from "@/common/lib/fetchUserData";
import { fetchUserSubscription } from "@/common/lib/api/subscriptions/fetchUserSubscription";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import ProfileIdentity from "@/modules/profile/components/ProfileIdentity";
import { ISubscription } from "@/common/lib/api/subscriptions/subscriptionInterface";
import ProfileSubscriptionStatus from "@/modules/profile/components/ProfileSubscriptionStatus";

export interface IProfile {
  user: IUser;
  subscription: ISubscription;
}

const Profile = (props: IProfile) => {
  const { user, subscription } = props;
  
  const onLogoutClick = () => {
    Cookies.remove("token");
    Cookies.remove("subscription");
    window.location.href = "/login/";
  };

  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white">
        <div className="container mx-auto h-screen p-4 lg:px-0 lg:w-1/3 border-x border-blue-900">
          <ProfileIdentity user={user} />
          <ProfileSubscriptionStatus /> 
        </div>
      </div>
    </div>
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
  const subscription = await fetchUserSubscription(decodedToken.id);

  return {
    props: {
      user,
      subscription,
    },
  };
};
