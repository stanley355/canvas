import { useMemo } from "react";
import { TbArrowRight, TbChevronDown } from "react-icons/tb";
import { Button } from "@/common/components/ui/button";
import { useTranslateV2 } from "../lib/useTranslateV2";
import { TRANSLATE_LANGUAGE_LIST_COMMON } from "../lib/constant";
import { cn } from "@/common/lib/cn";

interface ITranslateLanguageMenuDesktopBtn {
  onBtnClick: () => void;
  onShowSourceOptionClick: () => void;
  onShowTargetOptionClick: () => void;
}

const TranslateLanguageMenuDesktopBtn = (
  props: ITranslateLanguageMenuDesktopBtn
) => {
  const { onShowSourceOptionClick, onShowTargetOptionClick, onBtnClick } =
    props;
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceLanguage, targetLanguage } = translateStates;

  const sourceInCommonLanguage = useMemo(() => {
    const commonLanguage = TRANSLATE_LANGUAGE_LIST_COMMON.map(
      (language: any) => language.label
    );
    return commonLanguage.includes(sourceLanguage.label);
  }, [sourceLanguage]);

  const targetInCommonLanguage = useMemo(() => {
    const commonLanguage = TRANSLATE_LANGUAGE_LIST_COMMON.map(
      (language: any) => language.label
    );
    return commonLanguage.includes(targetLanguage.label);
  }, [targetLanguage]);

  return (
    <div className="grid grid-cols-[49%_2%_49%] ">
      <div className="flex items-center">
        {!sourceInCommonLanguage && (
          <Button
            variant={"ghost"}
            className="text-blue-800 border-b-2 rounded-none border-b-blue-800"
          >
            {sourceLanguage.label}
          </Button>
        )}
        {TRANSLATE_LANGUAGE_LIST_COMMON.map(
          (language: { label: string; value: string }) => (
            <Button
              variant={"ghost"}
              key={`source_${language.label}`}
              onClick={() => {
                onBtnClick();
                dispatch({
                  type: "SET",
                  name: "sourceLanguage",
                  value: language,
                });
              }}
              className={cn(
                sourceLanguage.label === language.label
                  ? "text-blue-800 border-b-2 border-b-blue-800 rounded-none"
                  : ""
              )}
            >
              {language.label}
            </Button>
          )
        )}
        <Button
          variant={"ghost"}
          className="text-xl rounded-full"
          onClick={onShowSourceOptionClick}
        >
          <TbChevronDown />
        </Button>
      </div>
      <div className="flex items-center">
        <TbArrowRight />
      </div>
      <div className="flex items-center">
        {!targetInCommonLanguage && (
          <Button
            variant={"ghost"}
            className="text-blue-800 border-b-2 rounded-none border-b-blue-800"
          >
            {targetLanguage.label}
          </Button>
        )}
        {TRANSLATE_LANGUAGE_LIST_COMMON.map(
          (language: { label: string; value: string }) => (
            <Button
              key={`target_${language.label}`}
              onClick={() => {
                onBtnClick();
                dispatch({
                  type: "SET",
                  name: "targetLanguage",
                  value: language,
                });
              }}
              variant={"ghost"}
              className={cn(
                targetLanguage.label === language.label
                  ? "text-blue-800 border-b-2 border-b-blue-800 rounded-none"
                  : ""
              )}
            >
              {language.label}
            </Button>
          )
        )}
        <Button
          variant={"ghost"}
          className="text-xl rounded-full"
          onClick={onShowTargetOptionClick}
        >
          <TbChevronDown />
        </Button>
      </div>
    </div>
  );
};

export default TranslateLanguageMenuDesktopBtn;
