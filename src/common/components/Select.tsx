import { memo, useState } from "react";
import { IOption } from "./interfaces";
import { cn } from "../lib/cn";
import Button from "./Button";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

type TSelectProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassname?: string;
  selectClassname?: string;
  optionContainerClassname?: string;
  optionClassname?: string;
  options: IOption[];
};

const Select = ({
  containerClassname,
  selectClassname,
  optionContainerClassname,
  optionClassname,
  options,
  placeholder,
  onChange,
  ...props
}: TSelectProps) => {
  const [option, setOption] = useState<IOption>({ label: "", value: "" });
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={cn("relative w-full", containerClassname)}>
      <input
        type="text"
        className="invisible w-0 h-0"
        value={option.value}
        onChange={onChange}
        {...props}
      />
      <Button
        type="button"
        variant="outline"
        className={cn(
          "w-full justify-between hover:bg-gradient-to-b hover:from-white hover:to-blue-100 gap-2",
          selectClassname
        )}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{option.label ? option.label : placeholder}</span>
        {showOptions ? <TbChevronUp /> : <TbChevronDown />}
      </Button>

      <div
        className={cn(
          "border rounded-md absolute top-10 left-0 overflow-y-auto animate-visible-forward z-10",
          optionContainerClassname,
          showOptions ? "block max-h-40" : "hidden"
        )}
      >
        {options.map((opt) => (
          <Button
            key={String(opt.label)}
            type="button"
            variant="ghost"
            className={cn(
              "w-full justify-start hover:bg-blue-100 rounded-none",
              optionClassname
            )}
            onClick={() => {
              setOption(opt);
              setShowOptions(false);
            }}
          >
            {opt.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default memo(Select);
