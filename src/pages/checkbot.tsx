import MetaSEO from "@/common/components/MetaSEO";
import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import CheckbotProvider from "@/modules/checkbot/components/CheckbotProvider";
import CheckbotContainer from "@/modules/checkbot/components/CheckbotContainer";

const CheckBot = () => {
  return (
    <CheckbotProvider>
      <MetaSEO seo={PREMIUM_CHECKBOT_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-400 to-white">
        <CheckbotContainer />
      </div>
    </CheckbotProvider>
  );
};

export default CheckBot;
