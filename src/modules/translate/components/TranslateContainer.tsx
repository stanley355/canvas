import dynamic from "next/dynamic";
import TranslateHeader from "./TranslateHeader";
import TranslateLanguageDropdown from "./TranslateLanguageDropdown";
import TranslateContextInput from "./TranslateContextInput";
import TranslateTextInput from "./TranslateTextInput";
import TranslateResultBox from "./TranslateResultBox";
import { useTranslate } from "../lib/useTranslate";
import PlanList from "@/modules/plans/components/PlanList";
import HomeVideo from "@/modules/home/components/HomeVideo";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"));
const NoPlansModal = dynamic(
  () => import("../../plans/components/NoPlansModal")
);

const TranslateContainer = () => {
  const { translateStates } = useTranslate();
  const { showLoginModal, showNoPlansModal } =
    translateStates;
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
      <div className="mt-12 px-4 lg:px-0">
        <HomeVideo />
        <PlanList />
      </div>
      {showLoginModal && <LoginModal />}
      {showNoPlansModal && <NoPlansModal />}
    </div>
  );
};

export default TranslateContainer;
