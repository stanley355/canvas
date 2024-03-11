import { GetStaticProps } from "next";
import { useEffect } from "react";
import Cookies from "js-cookie";

import { getLoginPageStaticProps } from "@/modules/login/lib/getLoginPageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import LoginCard from "@/modules/login/components/LoginCard";
import LoginModal from "@/modules/login/components/LoginModal";

interface ILoginProps {
  datoCmsData: IMetaHead;
}

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) window.location.href = "/account/";
  }, [token]);

  if (token) return <h1 className="px-4 text-2xl">Redirecting...</h1>;

  return (
    <>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <LoginCard />
    </>
  );
};

export default Login;
export const getStaticProps: GetStaticProps = getLoginPageStaticProps;
