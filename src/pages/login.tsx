import { GetStaticProps } from "next";
import { useEffect } from "react";
import Cookies from "js-cookie";

import { getLoginPageStaticProps } from "@/modules/login/lib/getLoginPageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import LoginCard from "@/modules/login/components/LoginCard";

interface ILoginProps {
  datoCmsData: IMetaHead;
}

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) window.location.href = "/account/";
  }, [token]);

  return (
    <>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <LoginCard />
    </>
  );
};

export default Login;
export const getStaticProps: GetStaticProps = getLoginPageStaticProps;
