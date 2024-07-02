import { GetServerSideProps } from "next";

import { getPlanPremiumPageServerProps } from "@/modules/plans/lib/getPlanPremiumPageServerProps";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

import NextHead from "@/common/components/NextHead";

export const getServerSideProps: GetServerSideProps = getPlanPremiumPageServerProps;

const PremiumPlans = () => {
  const schema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/plans",
    keywords: "",
    faq: [],
    seo: {
      title: `Premium Plans`,
      description: "Enjoy Languageai.id Premium Plans for unlimited access",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
      },
    },
  };

  return (
    <div className="container mt-14 lg:mt-0 lg:w-1/3 pb-8">
      <NextHead pagesSchema={schema} />

    </div>
  );
};

export default PremiumPlans;