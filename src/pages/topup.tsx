import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import ProfileBalance from "@/modules/profile/components/ProfileBalance";

interface IProfile {
  user: {
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

  return (
    <Layout>
      <div className="container mx-auto p-4 h-screen">
        <div className="text-2xl">{user.fullname}</div>
        <div>{user.email}</div>

        <Button
          type="button"
          onClick={onLogoutClick}
          title="logout"
          wrapperClassName="mt-8 border border-white w-16 py-1 rounded text-center "
          buttonClassName="w-full hover:underline"
        />
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

  const decodedToken = jwtDecode(token);

  return {
    props: {
      user: decodedToken,
    },
  };
};
