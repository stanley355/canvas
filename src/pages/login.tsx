import { GetServerSideProps, GetServerSidePropsContext } from "next";
import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";
import LoginHeader from "@/modules/login/components/LoginHeader";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import Link from "next/link";
import { HOME_SEO } from "@/modules/home/lib/constant";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card"
import LoginCardHeader from "@/modules/login/components/LoginCardHeader";
import { BackgroundGradient } from "@/common/components/ui/BackgroundGradient";
import LoginCardFooter from "@/modules/login/components/LoginCardFooter";
import LoginCardContent from "@/modules/login/components/LoginCardContent";

const Login = () => {
  return (
    <>
      <Card className="border-transparent w-full lg:w-[350px] lg:mx-auto">
        <LoginCardHeader />
        <LoginCardContent />
        <LoginCardFooter />
      </Card>
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
