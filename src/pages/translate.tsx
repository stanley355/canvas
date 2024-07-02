import { GetStaticProps } from "next";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getTranslatePageStaticProps } from "@/modules/translateV2/lib/getTranslatePageStaticProps";
import TranslateProvider from "@/modules/translate/components/TranslateProvider";
import TranslateHeader from "@/modules/translate/components/TranslateHeader";
import TranslateBody from "@/modules/translate/components/TranslateBody";

interface ITranslateProps {
  datoCmsData: NextHeadProps;
}

const Translate = (props: ITranslateProps) => {
  const { datoCmsData } = props;

  // TODO: Remove h-screen if unnecessary
  return (
    <div className="mt-16 container lg:mx-auto lg:mt-0 h-screen">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <TranslateProvider>
        <TranslateHeader />
        <TranslateBody />
      </TranslateProvider>
    </div>
  );
};

export default Translate;
export const getStaticProps: GetStaticProps = getTranslatePageStaticProps;
