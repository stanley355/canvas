import { GetServerSideProps } from "next";
import { getLoginPageServerSideProps } from "@/modules/login/lib/getLoginPageServerSideProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import LoginCard from "@/modules/login/components/LoginCard";

interface ILoginProps {
  datoCmsData: NextHeadProps;
}

export const getServerSideProps: GetServerSideProps = getLoginPageServerSideProps;

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  return (
    <>
      {datoCmsData && <NextHead pagesSchema={datoCmsData.pagesSchema} />}
      <LoginCard />
    </>
  );
};

export default Login;
