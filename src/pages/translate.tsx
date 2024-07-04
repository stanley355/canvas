import { GetStaticProps } from "next";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getTranslatePageStaticProps } from "@/modules/translateV2/lib/getTranslatePageStaticProps";
import TranslateProvider from "@/modules/translate/components/TranslateProvider";
import TranslateHeader from "@/modules/translate/components/TranslateHeader";
import TranslateBody from "@/modules/translate/components/TranslateBody";
import NextLink from "@/common/components/NextLink";

interface ITranslateProps {
  datoCmsData: NextHeadProps;
}

const Translate = (props: ITranslateProps) => {
  const { datoCmsData } = props;

  return (
    <div className="mt-16 container lg:mx-auto lg:mt-0 lg:text-sm pb-4 lg:h-[90vh]">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <TranslateProvider>
        <TranslateHeader />
        <TranslateBody />
      </TranslateProvider>
      <div className="flex w-fit items-center gap-1 mx-auto">Found an error? <NextLink href="/support" variant="none" className="text-blue-500 underline">Report</NextLink> </div>
    </div>
  );
};

export default Translate;
export const getStaticProps: GetStaticProps = getTranslatePageStaticProps;
