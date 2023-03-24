import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";

import Button from "@/common/components/Button";
import { fetchSerpScholar } from "../lib/fetchSerpScholar";
import SerpScholarTable from "./SerpScholarTable";

interface ISerpScholar {
  paperList: any[];
}

const SerpScholar = (props: ISerpScholar) => {
  const { paperList } = props;

  const [showTable, setShowTable] = useState(true);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["fetchSerpScholar"],
    queryFn: () => fetchSerpScholar(String(router.query.q)),
  });

  console.log(data);

  const mutation = useMutation({
    mutationFn: () => fetchSerpScholar(String(router.query.q)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchSerpScholar"] });
    },
  });

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
        {/* {showTable && <SerpScholarResult />} */}
        {isLoading ? "Loading..." : "hi"}
      </div>
    </div>
  );
};

export default SerpScholar;
