import Link from "next/link";
import { TbLanguage } from "react-icons/tb";
import TranslateMobileView from "./TranslateMobileView";
import TranslateDesktopView from "./TranslateDesktopView";

const TranslateContainerV2 = () => {
  return (
    <div className="container px-0 mx-auto my-16 lg:my-4 lg:px-4 lg:min-h-[80vh]">
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbLanguage className="text-xl" />
        <span>Translate</span>
      </div>
      <TranslateDesktopView />
      <TranslateMobileView />

      <div className="flex items-center justify-center gap-2 mt-16">
        <span>Found an Issue ? </span>
        <Link className="text-blue-500 border-b border-b-blue-500" href={'/support'}>Report</Link> 
      </div>
    </div>
  );
};

export default TranslateContainerV2;
