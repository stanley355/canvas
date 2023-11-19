import dynamic from "next/dynamic";
import TranslateHeader from "./TranslateHeader";
import TranslateLanguageDropdown from "./TranslateLanguageDropdown";
import TranslateContextInput from "./TranslateContextInput";
import TranslateTextInput from "./TranslateTextInput";
import TranslateResultBox from "./TranslateResultBox";
import { useTranslate } from "../lib/useTranslate";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"));

const TranslateContainer = () => {
  const { translateStates } = useTranslate();
  const { showLoginModal } = translateStates;
  // TODO: showHistory and show no plan
  return (
    <div className="container mx-auto">
      <TranslateHeader />
      <div className="px-2 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <TranslateLanguageDropdown />
          <TranslateContextInput />
          <TranslateTextInput />
        </div>
        <TranslateResultBox />
      </div>
      {showLoginModal && <LoginModal />}
    </div>
  );
};

export default TranslateContainer;
