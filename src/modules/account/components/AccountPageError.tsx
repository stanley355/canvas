import { TbReload } from "react-icons/tb";
import NextButton from "@/common/components/NextButton";

const AccountPageError = () => {
  return (
    <div className="container px-6 mx-auto mt-16 lg:mt-4 lg:px-12">
      <div className="mt-40 text-xl text-center text-gray-500">
        Application error, please refresh and try again
      </div>
      <NextButton
        className="gap-2 px-4 mx-auto mt-8 text-lg"
        onClick={() => window.location.reload()}
      >
        <TbReload />
        Refresh
      </NextButton>
    </div>
  );
};

export default AccountPageError;
