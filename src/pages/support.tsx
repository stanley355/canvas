import Image from "next/image";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";
import NextHead from "@/common/components/NextHead";

const Support = () => {
  const pageSchema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/404",
    keywords: "",
    faq: [],
    seo: {
      title: `Suppport and Help`,
      description:
        "Found an error on Languageai? Email me at winatastanley355@gmail.com",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
      },
    },
  };

  const link =
    "mailto:winatastanley355@gmail.com?subject=I%20found%20a%20bug%20on%20LanguageAi";

  return (
    <div className="container h-screen px-4 mt-20 lg:mt-0 lg:px-0">
      <NextHead pagesSchema={pageSchema} />
      <Image
        src={"/images/support.png"}
        alt="Languageai Support"
        width={400}
        height={400}
        className="mx-auto w-full h-auto rounded-lg mb-4 lg:w-1/5 "
      />
      <h1 className="text-3xl font-bold mb-2 lg:text-center">
        Found an error?
      </h1>
      <div className="text-lg lg:flex lg:justify-center">
        <div>Email me at</div>
        <a
          className="text-blue-500 border-b border-b-blue-500 lg:ml-2"
          href={link}
        >
          winatastanley355@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Support;
