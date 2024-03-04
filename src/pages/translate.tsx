import MetaSEO from "@/common/components/MetaSEO";
import TranslateProvider from "@/modules/translate/components/TranslateProvider";
import TranslateContainer from "@/modules/translate/components/TranslateContainer";
import { TRANSLATE_SEO } from "@/modules/translate/lib/constant";
import { GetStaticProps } from "next";
import { getTranslatePageStaticProps } from "@/modules/translateV2/lib/getTranslatePageStaticProps";
import { IMetaHead } from "@/common/components/MetaHead";

interface ITranslateProps {
  datoCmsData: IMetaHead
}

const Translate = (props: ITranslateProps) => {
  const {datoCmsData} = props;
  console.log(datoCmsData);
  
  return (
    <TranslateProvider>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-100 to-white">
        <TranslateContainer />
      </div>
    </TranslateProvider>
  );
};

export default Translate;
export const getStaticProps: GetStaticProps = getTranslatePageStaticProps;
