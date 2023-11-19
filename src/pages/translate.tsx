import MetaSEO from "@/common/components/MetaSEO";
import { PREMIUM_TRANSLATE_SEO } from "@/modules/premium/lib/constant";
import TranslateProvider from "@/modules/translate/components/TranslateProvider";
import TranslateContainer from "@/modules/translate/components/TranslateContainer";


const Translate = () => {
  return (
    <TranslateProvider>
      <MetaSEO seo={PREMIUM_TRANSLATE_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-400 to-white">
        <TranslateContainer />
      </div>
    </TranslateProvider>
  );
};

export default Translate;
