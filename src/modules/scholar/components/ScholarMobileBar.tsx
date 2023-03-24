
import React from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Button from "@/common/components/Button";

interface IScholarMobileBar {
    title: string;
  showTable: boolean;
  resultLength: number;
  onClick: () => void;
}

const ScholarMobileBar = (props: IScholarMobileBar) => {
  const { onClick, title, showTable, resultLength } = props;

  return (
    <Button
      type="button"
      onClick={onClick}
      buttonClassName="flex flex-row items-center justify-between p-2 border rounded-sm w-full"
    >
      <span className="flex flex-row items-center text-xl">
        <FaGraduationCap className="text-2xl" />
        <span className="mx-2">{title}</span>
        <span>({resultLength} Results)</span>
      </span>
      {showTable ? <FaChevronUp /> : <FaChevronDown />}
    </Button>
  );
};

export default ScholarMobileBar;
