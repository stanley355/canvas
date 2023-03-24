import React from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import Button from "@/common/components/Button";

interface IScholarDesktopBar {
  title: string;
  showTable: boolean;
  resultLength: number;
  filterOptions: Array<{ label: any; value: any }>;
  onFilterChange: (filter: any) => void;
  onToggleClick: () => void;
}

const ScholarDesktopBar = (props: IScholarDesktopBar) => {
  const {
    title,
    filterOptions,
    showTable,
    resultLength,
    onToggleClick,
    onFilterChange,
  } = props;

  return (
    <div className="flex flex-row items-center justify-between p-2 border rounded-sm w-full">
      <span className="flex flex-row items-center text-xl">
        <FaGraduationCap className="text-2xl" />
        <span className="mx-2">{title}</span>
        <span>({resultLength} Results)</span>
      </span>
      <div className="flex flex-row items-center w-1/5">
        <Select
          options={filterOptions}
          name="filter_options"
          placeholder="Filter"
          className="mr-4 text-black w-full"
          onChange={onFilterChange}
        />
        <Button
          type="button"
          onClick={onToggleClick}
          buttonClassName="bg-white p-2 rounded-md items-center text-black flex flex-row"
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

export default ScholarDesktopBar;
