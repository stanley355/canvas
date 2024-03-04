import { Button } from "@/common/components/ui/button";
import { TbArrowRight } from "react-icons/tb";
import TranslateLanguageMenuBtn from "./TranslateLanguageMenuBtn";

const TranslateLanguageMenuMobile = () => {
  return (
    <div className="grid grid-cols-[42.5%_15%_42.5%] w-full mt-4 place-items-center">
      <TranslateLanguageMenuBtn
        languageLabel="Detect Language"
        optionTitle="Translate From"
      />
      <TbArrowRight />
      <TranslateLanguageMenuBtn
        languageLabel="Indonesia"
        optionTitle="Translate To"
      />
    </div>
  );
};

export default TranslateLanguageMenuMobile;
