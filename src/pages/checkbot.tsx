import MetaSEO from "@/common/components/MetaSEO";
import CheckbotProvider from "@/modules/checkbot/components/CheckbotProvider";
import CheckbotContainer from "@/modules/checkbot/components/CheckbotContainer";
import { CHECKBOT_SEO } from "@/modules/checkbot/lib/constant";

const CheckBot = () => {
  return (
    <CheckbotProvider>
      <MetaSEO seo={CHECKBOT_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-100 to-white">
        <CheckbotContainer />
      </div>
    </CheckbotProvider>
  );
};

export default CheckBot;
