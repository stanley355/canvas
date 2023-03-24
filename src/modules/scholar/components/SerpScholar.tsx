import React, { useState } from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Button from "@/common/components/Button";

interface ISerpScholar {
  paperList: any[];
}

const SerpScholar = (props: ISerpScholar) => {
  const { paperList } = props;

  return (
    <div>
      <Button type="button" wrapperClassName="flex flex-row justify-between">
        <span>
          <FaGraduationCap />
          <span>Google Scholar</span>
          <span>({paperList.length} Results)</span>
        </span>
        <FaChevronUp />
      </Button>
    </div>
  );
};

export default SerpScholar;
