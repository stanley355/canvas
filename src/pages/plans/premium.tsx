import { GetServerSideProps } from "next";
import { TbArrowLeft } from "react-icons/tb";

import { getPlanPremiumPageServerProps } from "@/modules/plans/lib/getPlanPremiumPageServerProps";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

import NextHead from "@/common/components/NextHead";
import NextButton from "@/common/components/NextButton";
import PlanPremiumFeatures from "@/modules/plans/components/premium/PlanPremiumFeatures";
import PlanPremiumForm from "@/modules/plans/components/premium/PlanPremiumForm";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps =
  getPlanPremiumPageServerProps;

const PremiumPlans = () => {
  const router = useRouter();

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
    <div className="container mt-20 lg:mt-0 lg:w-1/3 pb-8">
      <NextHead pagesSchema={schema} />
      <PlanPremiumFeatures />
      <PlanPremiumForm />
      <NextButton
        variant="outline"
        className="border-transparent p-2 mt-4 pl-4"
        onClick={() => router.back()}
      >
        <TbArrowLeft />
        <span>Back</span>
      </NextButton>
    </div>
  );
};

export default PremiumPlans;
