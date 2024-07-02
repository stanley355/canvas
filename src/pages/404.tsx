import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import NextHead from "@/common/components/NextHead";
import NextButton from "@/common/components/NextButton";

import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";

import { getPagesSchema } from "@/common/lib/api/gql";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

const NotFound = () => {
  const router = useRouter();

  const pageSchema: IDatoPagesSchema= {
    _updatedAt: "",
    slug: "/404",
    keywords: "",
    faq: [],
    seo: {
      title: `Page Not Found`,
      description:"Languageai Page Not Found",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
      },
    },
  };
  

  return (
    <div className="container flex flex-col items-center h-screen mx-auto mt-16 lg:mt-0">
      <NextHead pagesSchema={pageSchema} />
      <Image
        src={"/images/404.webp"}
        alt="LanguageAi"
        width={100}
        height={100}
        className="w-full h-auto lg:w-1/5"
      />
      <NextButton onClick={() => router.back()}>Go Back</NextButton>
    </div>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "not-found",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
