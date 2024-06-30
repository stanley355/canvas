import { GetServerSideProps } from "next";
import { getLoginPageServerSideProps } from "@/modules/login/lib/getLoginPageServerSideProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import LoginCard from "@/modules/login/components/LoginCard";

interface ILoginProps {
  datoCmsData: NextHeadProps;
}

export const getServerSideProps: GetServerSideProps =
  getLoginPageServerSideProps;

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  return (
    <div className="px-4 lg:px-0">
      {datoCmsData?.pagesSchema && (
        <NextHead pagesSchema={datoCmsData.pagesSchema} />
      )}
      <LoginCard />
    </div>
  );
};

export default Login;
