import { ChangeEvent, memo, useState } from "react";
import { TbChevronDown, TbChevronUp, TbSearch } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

import NextButton from "@/common/components/NextButton";
import NextInput from "@/common/components/NextInput";
import { cn } from "@/common/lib/cn";
import { ISpeechToTextReducerAction } from "../lib/speechToTextReducer";
import {
  SPEECH_TO_TEXT_COMMON_LANGUAGE_LIST,
  SPEECH_TO_TEXT_LANGUAGE_LIST,
} from "../lib/speechToTextLanguageList";
import { IOption } from "@/common/components/interfaces";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

interface SpeechToTextLanguageSelectProps {
  language: IOption;
  speechToTextDispatch: (action: ISpeechToTextReducerAction) => void;
}

const SpeechToTextLanguageSelect = (props: SpeechToTextLanguageSelectProps) => {
  const { language, speechToTextDispatch } = props;
  const [languageList, setLanguageList] = useState(
    SPEECH_TO_TEXT_LANGUAGE_LIST
  );
  const [openDropdown, setOpenDropdown] = useState(false);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = SPEECH_TO_TEXT_LANGUAGE_LIST.filter((language) =>
      String(language.label)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setLanguageList(newList);
    return;
  };

  return (
    <div className="relative px-2 lg:px-0">
      <NextButton
        id="language_select"
        variant="outline"
        className="w-full justify-between mb-2"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <span>{language.label ? language.label : "Select language"}</span>
        {openDropdown ? <TbChevronUp /> : <TbChevronDown />}
      </NextButton>

      <Tooltip anchorSelect="#language_select" className="z-40">
        <div>*Required: The language of the input audio</div>
        <div>Supplying the input language will improve accuracy</div>
      </Tooltip>

      <div
        className={cn(
          "absolute top-12 left-[1%] z-30 bg-white border border-brand-primary rounded-lg w-[98%] lg:left-0 lg:w-full max-h-[50vh] overflow-y-scroll",
          openDropdown ? "block" : "hidden"
        )}
      >
        <div className="flex items-center w-full mb-4 border border-b rounded-t-lg">
          <NextInput
            autoFocus
            placeholder="Search Language"
            className="p-4 focus:outline-none w-[92.5%] rounded-tl-lg"
            variants="none"
            onChange={onSearch}
          />
          <TbSearch className="text-xl" />
        </div>

        <div
          className={cn(
            "mb-4",
            languageList.length === SPEECH_TO_TEXT_LANGUAGE_LIST.length
              ? "block"
              : "hidden"
          )}
        >
          <div className="p-2 text-gray-500 font-semibold">
            Common Languages
          </div>
          {SPEECH_TO_TEXT_COMMON_LANGUAGE_LIST.map((language) => (
            <NextButton
              key={`common_${language.value}`}
              variant="none"
              onClick={() => {
                sendFirebaseEvent(
                  FIREBASE_EVENT_NAMES.change.change_stt_language
                );
                speechToTextDispatch({ key: "language", value: language });
                setOpenDropdown(false);
              }}
              className="rounded-none w-full border border-b p-4 text-left hover:bg-blue-100"
            >
              {language.label}
            </NextButton>
          ))}
        </div>

        <div>
          <div className="p-2 text-gray-500 font-semibold">All Languages</div>
          {languageList.map((language) => (
            <NextButton
              key={`all_${language.value}`}
              variant="none"
              onClick={() => {
                sendFirebaseEvent(
                  FIREBASE_EVENT_NAMES.change.change_stt_language
                );
                speechToTextDispatch({ key: "language", value: language });
                setOpenDropdown(false);
              }}
              className="rounded-none w-full border border-b p-4 text-left hover:bg-blue-100"
            >
              {language.label}
            </NextButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SpeechToTextLanguageSelect);
