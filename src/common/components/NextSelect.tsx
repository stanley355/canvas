import { memo, useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import NextButton from "./NextButton";
import { cn } from "../lib/cn";
import { IOption } from "./interfaces";

interface NextSelectProps {
  containerClassname?: string;
  selectClassname?: string;
  optionContainerClassname?: string;
  optionClassname?: string;
  placeholder?: string;
  onChange?: (option: IOption) => void;
  options: IOption[];
}

const NextSelect = (props: NextSelectProps) => {
  const {
    containerClassname,
    selectClassname,
    optionContainerClassname,
    optionClassname,
    placeholder,
    options,
    onChange,
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption>({
    label: placeholder ? placeholder : "Select",
    value: null,
  });

  return (
    <div className={cn("relative w-full", containerClassname)}>
      <NextButton
        type="button"
        variant="outline"
        className={cn("gap-1 w-full justify-between", selectClassname)}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedOption.label}
        {showOptions ? <TbChevronUp /> : <TbChevronDown />}
      </NextButton>

      <div
        className={cn(
          "absolute top-12 left-0 flex flex-col rounded-lg border border-brand-primary w-full bg-white",
          showOptions ? "visible h-auto" : "invisible h-0",
          optionContainerClassname
        )}
      >
        {options.map((option) => (
          <NextButton
            type="button"
            variant="none"
            className={cn(
              "px-4 py-2 w-full text-left z-10 hover:bg-blue-100 rounded-lg",
              optionClassname
            )}
            key={String(option.label)}
            onClick={() => {
              setSelectedOption(option);
              onChange && onChange(option);
              setShowOptions(false);
            }}
          >
            {option.label}
          </NextButton>
        ))}
      </div>
    </div>
  );
};

export default memo(NextSelect);
