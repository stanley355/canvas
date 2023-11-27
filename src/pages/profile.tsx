import React from "react";
import { FaEnvelope, FaRegCircleUser} from "react-icons/fa6";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import { fetchUserData } from "@/common/lib/fetchUserData";
import { fetchUserSubscription } from "@/common/lib/api/subscriptions/fetchUserSubscription";

interface IProfile {
  user: any;
  subscription: any;
}

const Profile = (props: IProfile) => {
  const { user, subscription } = props;
  
  const onLogoutClick = () => {
    Cookies.remove("token");
    Cookies.remove("subscription");
    window.location.href = "/";
  };

  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white">
        <div className="container mx-auto h-screen p-4 lg:px-0">
          <div className="text-xl">
            <div className="flex items-center gap-2">
              <FaRegCircleUser className="text-blue-900" />
              <span className="font-bold">{user.fullname}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-900" />
              <span className="text-lg">{user.email}</span>
            </div>
          </div>

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
