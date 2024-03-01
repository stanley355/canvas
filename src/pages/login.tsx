import { GetServerSideProps, GetServerSidePropsContext } from "next";
import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";
import LoginHeader from "@/modules/login/components/LoginHeader";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import Link from "next/link";
import { HOME_SEO } from "@/modules/home/lib/constant";

const Login = () => {
  return (
    <>
      
    </>
  );
};

export default Login;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile/",
      },
    };
  }

  return {
    props: {},
  };
};
