import { GetServerSideProps, GetServerSidePropsContext } from "next";
import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";
import LoginHeader from "@/modules/login/components/LoginHeader";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import Link from "next/link";
import { HOME_SEO } from "@/modules/home/lib/constant";

const Login = () => {
  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white h-screen">
        <div className="container mx-auto p-4 lg:px-0 lg:w-1/4">
          <LoginHeader />
          <LoginForm />
          <div className="my-4 flex flex-col items-center">
            <div className="text-lg mb-2">atau</div>
            <GoogleLoginBtn />
          </div>

          <div className="text-center">
            Belum punya akun? <Link href="/register/" className="text-blue-900 underline">Daftar</Link>{" "}
          </div>
        </div>
      </div>
    </div>
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
