import React, { useState } from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Button from "@/common/components/Button";
import SerpScholarTable from "./SerpScholarTable";

interface ISerpScholar {
  paperList: any[];
}

const SerpScholar = (props: ISerpScholar) => {
  const { paperList } = props;

  const [showTable, setShowTable] = useState(true);

  const SerpScholarResult = () => {
    if (paperList.length > 0) {
      return <SerpScholarTable paperList={paperList} />;
    }
    return (
      <div className="p-4 text-center text-xl border rounded-sm">
        No Results
      </div>
    );
  };

  return (
    <div>
      <Button
        type="button"
        onClick={() => setShowTable(!showTable)}
        buttonClassName="flex flex-row items-center justify-between p-2 border rounded-sm w-full"
      >
        <span className="flex flex-row items-center text-xl">
          <FaGraduationCap className="text-2xl" />
          <span className="mx-2">Google Scholar</span>
          <span>({paperList.length} Results)</span>
        </span>
        {showTable ? <FaChevronUp /> : <FaChevronDown />}
      </Button>
      <div className="overflow-y-scroll lg:overflow-hidden">
        {showTable && <SerpScholarResult />}
      </div>
    </div>
  );
};

export default SerpScholar;
