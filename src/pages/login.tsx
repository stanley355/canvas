import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Cookies from "js-cookie";

import { getLoginPageServerSideProps } from "@/modules/login/lib/getLoginPageServerSideProps";
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
export const getServerSideProps: GetServerSideProps = getLoginPageServerSideProps;
