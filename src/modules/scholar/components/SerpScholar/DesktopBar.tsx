import React from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Button from "@/common/components/Button";

interface ISerpScholarDesktopBar {
  showTable: boolean;
  resultLength: number;
  onToggleClick: () => void;
}

const SerpScholarDesktopBar = (props: ISerpScholarDesktopBar) => {
  const { showTable, resultLength, onToggleClick } = props;

  return (
    <div className="flex flex-row items-center justify-between p-2 border rounded-sm w-full">
      <span className="flex flex-row items-center text-xl">
        <FaGraduationCap className="text-2xl" />
        <span className="mx-2">Google Scholar</span>
        <span>({resultLength} Results)</span>
      </span>
      <div>
        <Button
          type="button"
          onClick={onToggleClick}
          buttonClassName="bg-white px-2 items-center text-black flex flex-row"
        >
          <span className="font-semibold mr-2">
            {showTable ? "Hide" : "Show"}
          </span>
          {showTable ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </div>
    </div>
  );
};

export default SerpScholarDesktopBar;
