import { GetStaticProps } from "next";

import { Card } from "@/common/components/ui/card";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import LoginCardHeader from "@/modules/login/components/LoginCardHeader";
import LoginCardFooter from "@/modules/login/components/LoginCardFooter";
import LoginCardContent from "@/modules/login/components/LoginCardContent";
import { getLoginPageStaticProps } from "@/modules/login/lib/getLoginPageStaticProps";
import { useEffect } from "react";
import Cookies from "js-cookie";

interface ILoginProps {
  datoCmsData: IMetaHead;
}

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) window.location.href = "/account/"
  }, [token])

  if (token) return <h1 className="text-2xl">Redirecting...</h1>

  return (
    <>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <Card className="border-transparent w-full lg:w-[350px] lg:mx-auto lg:border-black">
        <LoginCardHeader />
        <LoginCardContent />
        <LoginCardFooter />
      </Card>
    </>
  );
};

export default Login;
export const getStaticProps: GetStaticProps = getLoginPageStaticProps;
