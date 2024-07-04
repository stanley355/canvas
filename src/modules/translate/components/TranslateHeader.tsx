import { useContext, memo } from "react";
import { TbLanguage } from "react-icons/tb";

import NextSelect from "@/common/components/NextSelect";
import { TranslateContext } from "./TranslateContext";

import { TRANSLATE_VARIANT_OPTIONS } from "../lib/translateVariantOptions";
import { TRANSLATE_VOLUMES_OPTIONS } from "../lib/translateVolumeOptions";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

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
          selectClassname="border-gray-200"
          options={TRANSLATE_VARIANT_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_translate_n);
            translateDispatch({ key: "n", value: option.value });
          }}
        />
        <NextSelect
          placeholder="Volume: Unset"
          selectClassname="border-gray-200"
          options={TRANSLATE_VOLUMES_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(
              FIREBASE_EVENT_NAMES.change.change_translate_temperature
            );
            translateDispatch({ key: "temperature", value: option.value });
          }}
        />
      </div>
    </div>
  );
};

export default memo(TranslateHeader);
