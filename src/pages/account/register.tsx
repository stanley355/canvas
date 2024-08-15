import Image from "next/image";

import NextHead from "@/common/components/NextHead";
import RegisterMain from "@/modules/account/register/components/RegisterMain";

import { getRegisterServerSideprops } from "@/modules/account/register/lib/getRegisterServerSideProps";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

export const getServerSideProps = getRegisterServerSideprops;

const Register = () => {
  const pageSchema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/account/register",
    keywords:
      "languageai, translate, checkbot, text to speech, speech to text, register ",
    seo: {
      title: `Languageai sign up`,
      description: "Sign up or register to Languageai.id to continue",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
        width: 400,
        height: 400,
      },
    },
  };
  return (
    <div className="w-full h-screen lg:flex">
      <NextHead pagesSchema={pageSchema} />
      <RegisterMain />
      <div className="items-center justify-center flex-1 hidden lg:flex bg-brand-primary">
        <Image
          src="/images/account/register.png"
          alt="Languageai register"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Register;
