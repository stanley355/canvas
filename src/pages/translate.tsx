import MetaSEO from "@/common/components/MetaSEO";
import TranslateProvider from "@/modules/translate/components/TranslateProvider";
import TranslateContainer from "@/modules/translate/components/TranslateContainer";
import { TRANSLATE_SEO } from "@/modules/translate/lib/constant";

const Translate = () => {
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
