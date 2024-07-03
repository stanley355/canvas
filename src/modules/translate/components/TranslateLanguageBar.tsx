import { useContext, memo } from "react";
import { TbArrowRight } from "react-icons/tb";
import TranslateLanguageBtn from "./TranslateLanguageBtn";
import { TranslateContext } from "./TranslateContext";

const TranslateLanguageBar = () => {
  const { translateStates, translateDispatch } = useContext(TranslateContext);

  return (
    <div className="grid grid-cols-[42.5%_15%_42.5%] lg:grid-cols-[49%_2%_49%] w-full place-items-center border-b relative">
      <TranslateLanguageBtn
        isFirstLanguage
        language={translateStates.firstLanguage}
        translateDispatch={translateDispatch}
      />
      <TbArrowRight />
      <TranslateLanguageBtn
        isFirstLanguage={false}
        language={translateStates.secondLanguage}
        translateDispatch={translateDispatch}
      />
    </div>
  );
};

export default memo(TranslateLanguageBar);
