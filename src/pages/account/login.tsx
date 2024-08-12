import NextHead from "@/common/components/NextHead";
import LoginCard from "@/modules/login/components/LoginCard";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

const Login = () => {
  const pageSchema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/login",
    keywords:
      "languageai, language ai, translate, translation, grammar and spelling check, paraphrase text",
    seo: {
      title: `Languageai.id Login`,
      description: "Login to Languageai.id to continue",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
        width: 400,
        height: 400,
      },
    },
  };

  return (
    <div className="px-4">
      <NextHead pagesSchema={pageSchema} />
      <LoginCard />
    </div>
  );
};

export default Login;
