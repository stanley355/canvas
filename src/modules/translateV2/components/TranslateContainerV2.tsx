import Link from "next/link";
import TranslateMobileView from "./TranslateMobileView";
import TranslateDesktopView from "./TranslateDesktopView";
import TranslateHeader from "./TranslateHeader";

const TranslateContainerV2 = () => {
  return (
    <div className="container px-0 mx-auto my-16 lg:my-4 lg:px-4 lg:min-h-[80vh]">
      <TranslateHeader />
      <TranslateDesktopView />
      <TranslateMobileView />

      <div className="flex items-center justify-center gap-2 mt-16">
        <span>Found an Issue ? </span>
        <Link
          className="text-blue-500 border-b border-b-blue-500"
          href={"/support"}
        >
          Report
        </Link>
      </div>
    </div>
  );
};

export default TranslateContainerV2;
