import { useContext, memo } from "react";
import { TbLanguage } from "react-icons/tb";

import NextSelect from "@/common/components/NextSelect";
import { TranslateContext } from "./TranslateContext";

import { TRANSLATE_VARIANT_OPTIONS } from "../lib/translateVariantOptions";
import { TRANSLATE_RANDOMNESS_OPTIONS } from "../lib/translateRandomnessOptions";

const TranslateHeader = () => {
  const { translateDispatch } = useContext(TranslateContext);

  return (
    <div className="p-4 lg:flex lg:w-1/2 lg:px-0">
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 mb-4 mx-auto lg:mx-0 w-fit lg:mb-0 lg:mr-2">
        <TbLanguage />
        <div>
          <span className="lg:hidden mr-1">Languageai</span>
          Translate
        </div>
      </div>
      <div className="flex justify-evenly gap-2 lg:w-full">
        <NextSelect
          placeholder="Variant: 1"
          options={TRANSLATE_VARIANT_OPTIONS}
          onChange={(option) =>
            translateDispatch({ key: "n", value: option.value })
          }
        />
        <NextSelect
          placeholder="Random: Mid"
          options={TRANSLATE_RANDOMNESS_OPTIONS}
          onChange={(option) =>
            translateDispatch({ key: "temperature", value: option.value })
          }
        />
      </div>
    </div>
  );
};

export default memo(TranslateHeader);
