import { useContext, memo } from "react";
import { TbLanguage } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

import NextSelect from "@/common/components/NextSelect";
import { TranslateContext } from "./TranslateContext";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { PROMPT_VARIANT_OPTIONS } from "@/common/lib/api/prompts/promptVariantOptions";
import { PROMPT_DIFF_OPTIONS } from "@/common/lib/api/prompts/promptDiffOptions";

const TranslateHeader = () => {
  const { translateDispatch } = useContext(TranslateContext);

  return (
    <div className="p-4 lg:flex lg:w-1/2 lg:px-0">
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 mb-4 mx-auto lg:mx-0 w-fit lg:mb-0 lg:mr-2">
        <TbLanguage />
        Translate
      </div>
      <div className="flex justify-evenly gap-2 lg:w-full">
        <NextSelect
          id="translate_variant"
          placeholder="Variant: 1"
          selectClassname="border-gray-200"
          options={PROMPT_VARIANT_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_translate_n);
            translateDispatch({ key: "n", value: option.value });
          }}
        />
        <NextSelect
          id="translate_diff"
          placeholder="Diff: Mid"
          selectClassname="border-gray-200"
          options={PROMPT_DIFF_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(
              FIREBASE_EVENT_NAMES.change.change_translate_temperature
            );
            translateDispatch({ key: "temperature", value: option.value });
          }}
        />
        <Tooltip anchorSelect="#translate_variant" className="z-40">
          <div>How many text completion choices to</div>
          <div>generate for each input message</div>
        </Tooltip>
        <Tooltip anchorSelect="#translate_diff" className="z-40">
          <div>Higher diff will make the output more random,</div>
          <div>Lower diff will make it more focused and deterministic</div>
        </Tooltip>
      </div>
    </div>
  );
};

export default memo(TranslateHeader);
