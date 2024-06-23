import { GetServerSideProps } from "next";
import { getLoginPageServerSideProps } from "@/modules/login/lib/getLoginPageServerSideProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import LoginCard from "@/modules/login/components/LoginCard";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import LoginModal from "@/modules/login/components/LoginModal";

interface ILoginProps {
  datoCmsData: NextHeadProps;
}

export const getServerSideProps: GetServerSideProps = getLoginPageServerSideProps;

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  return (
    <div className="px-4 lg:px-0">
      {datoCmsData && <NextHead pagesSchema={datoCmsData.pagesSchema} />}
      <LoginCard />
      <LoginModal />
    </div>
  );
};

export default Login;
