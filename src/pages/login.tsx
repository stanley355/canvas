import { GetServerSideProps } from "next";
import { getLoginPageServerSideProps } from "@/modules/login/lib/getLoginPageServerSideProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import LoginCard from "@/modules/login/components/LoginCard";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";

interface ILoginProps {
  datoCmsData: NextHeadProps;
}

export const getServerSideProps: GetServerSideProps = getLoginPageServerSideProps;

const Login = (props: ILoginProps) => {
  const { datoCmsData } = props;

  return (
    <div className="px-4 lg:px-0">
      {datoCmsData && <NextHead pagesSchema={datoCmsData.pagesSchema} />}
      <div className="p-4 py-6 bg-blue-100 border border-blue-400 rounded-lg lg:w-[400px] mt-8 mx-auto">
        <div className="p-1 mb-4 text-sm bg-blue-200 rounded-md">We are experiencing issues with Password login, but you can login with your Gmail Account</div>
        <h1 className="mb-6 text-2xl font-bold text-center text-brand-primary">Login in one click</h1>
        <div className="flex items-center justify-center mb-4 animate-bounce">
          <GoogleLoginBtn />
        </div>

        <div>
          By signing up, you agree to the <b>Terms and Conditions</b> and <b> Privacy Policy</b>.
        </div>
      </div>
    </div>
  );
};

export default Login;
