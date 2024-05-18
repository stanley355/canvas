import { useState, memo } from "react";
import CanvasButton from "./CanvasButton";
import { cn } from "@/common/lib/cn";

export interface IOption {
  label: string | number;
  value: any;
}
interface SelectProps {
  options: IOption[];
  onChange?: (option: IOption) => void;
  placeholder?: string | React.ReactNode;
  containerClassname?: string;
  selectClassname?: string;
  optionContainerClassname?: string;
  optionClassname?: string;
}

const Select = (props: SelectProps) => {
  const {
    options,
    onChange,
    placeholder,
    containerClassname,
    selectClassname,
    optionContainerClassname,
    optionClassname,
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption>({
    label: "",
    value: "",
  });

  const handleOptionClick = (option: IOption) => {
    onChange && onChange(option);
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className={cn("relative", containerClassname)}>
      <CanvasButton
        type="button"
        variant="none"
        onClick={() => setShowOptions(!showOptions)}
        className={cn("border px-4 py-2 rounded-md", selectClassname)}
      >
        {selectedOption.label
          ? selectedOption.label
          : placeholder
            ? placeholder
            : "Select"}
      </CanvasButton>


      <div
        className={cn(
          "absolute top-12 left-0 border py-2 rounded-md bg-white z-50 shadow",
          showOptions ? "visible" : "invisible",
          optionContainerClassname
        )}>
        {options.map((option: IOption) => (
          <CanvasButton
            key={option.label}
            type="button"
            variant="none"
            onClick={() => handleOptionClick(option)}
            className={cn(
              "py-2 px-4 cursor-pointer hover:bg-blue-100 w-full",
              optionClassname
            )}
          >

            {option.label}
          </CanvasButton>
        ))}
      </div>
    </div>
  );
};

export default memo(Select);
