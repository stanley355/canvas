import { useState } from "react";
import { TbArrowLeft, TbSearch } from "react-icons/tb";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";

interface ITranslateLanguageOptionsSearchMobile {
  title: string;
  onCloseClick: () => void;
}

const TranslateLanguageOptionsSearchMobile = (
  props: ITranslateLanguageOptionsSearchMobile
) => {
  const { title, onCloseClick } = props;
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="grid grid-cols-[15%_70%_15%] border">
      <Button variant={"ghost"} onClick={onCloseClick}>
        <TbArrowLeft className="text-2xl" />
      </Button>
      {showSearch ? (
        <Input
          placeholder="Search Language"
          autoFocus
          className="border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      ) : (
        <span className="flex items-center text-lg">{title}</span>
      )}
      <Button variant={"ghost"} onClick={() => setShowSearch(true)}>
        <TbSearch className="text-2xl" />
      </Button>
    </div>
  );
};

export default TranslateLanguageOptionsSearchMobile;
