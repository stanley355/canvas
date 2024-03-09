import { TbLanguage } from "react-icons/tb";
import TranslateProps from "./TranslateProps";
import TranslateMobileView from "./TranslateMobileView";

const TranslateContainerV2 = () => {
  return (
    <div className="container px-0 mx-auto my-16">
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbLanguage className="text-xl" />
        <span>Text</span>
      </div>
      <TranslateMobileView />
      <TranslateProps />
    </div>
  );
};

export default TranslateContainerV2;
