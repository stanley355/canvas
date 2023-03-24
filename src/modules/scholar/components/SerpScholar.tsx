import React, { useState } from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Button from "@/common/components/Button";

interface ISerpScholar {
  paperList: any[];
}

const SerpScholar = (props: ISerpScholar) => {
  const { paperList } = props;

  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <Button
        type="button"
        buttonClassName="flex flex-row items-center justify-between p-2 border border-white rounded-sm w-full"
      >
        <span className="flex flex-row items-center">
          <FaGraduationCap className="text-xl mr-2" />
          <span>Google Scholar</span>
          <span>({paperList.length} Results)</span>
        </span>
        {showTable ? <FaChevronUp /> : <FaChevronDown />}
      </Button>
    </div>
  );
};

export default SerpScholar;
