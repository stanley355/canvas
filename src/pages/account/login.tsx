import Image from "next/image";
import NextHead from "@/common/components/NextHead";
import LoginCard from "@/modules/login/components/LoginCard";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

const Login = () => {
  const pageSchema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/account/login",
    keywords:
      "languageai, translate, checkbot, text to speech, speech to text, login ",
    seo: {
      title: `Languageai Login`,
      description: "Login to Languageai to continue",
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
      <LoginCard />
      <div className="items-center justify-center flex-1 hidden lg:flex bg-brand-primary">
        <Image
          src="/images/account/login.png"
          alt="Languageai login"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Login;
