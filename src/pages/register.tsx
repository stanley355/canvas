import Link from "next/link";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import RegisterForm from "@/modules/login/components/RegisterForm";
import MetaSEO from "@/common/components/MetaSEO";
import RegisterHeader from "@/modules/login/components/RegisterHeader";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import { HOME_SEO } from "@/modules/home/lib/constant";

const Register = () => {
  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="h-screen bg-gradient-to-br from-white via-slate-100 to-white">
        <div className="container mx-auto p-4 lg:px-0 lg:w-1/4">
          <RegisterHeader />
          <RegisterForm />
          <div className="my-4 flex flex-col items-center">
            <div className="text-lg mb-2">atau</div>
            <GoogleLoginBtn />
          </div>
          <div className="text-center">
            Sudah punya akun? <Link href="/login/" className="text-blue-900 underline">Masuk</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
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
