import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";

import ScholarMobileBar from "../ScholarMobileBar";
import ScholarDesktopBar from "../ScholarDesktopBar";
import SemanticScholarTable from "./SemanticScholarTable";

import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { fetchSemanticScholar } from "../../lib/fetchSemanticScholar";
import { SEMANTIC_SCHOLAR_FILTER_OPTIONS } from "../../lib/constant";

const SemanticScholar = () => {
  const [showTable, setShowTable] = useState(true);
  const router = useRouter();
  const isDesktop = useDesktopScreen();

  const { isLoading, data } = useQuery({
    queryKey: ["fetchSemanticScholar"],
    queryFn: () => fetchSemanticScholar(String(router.query.q)),
  });

  console.log(data);

  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: (filter: any) =>
  //     fetchSerpScholar(String(router.query.q), {
  //       key: filter.value[0],
  //       value: filter.value[1],
  //     })
  //     ,
  //   onSuccess: (newData) => {
  //     queryClient.setQueryData(["fetchSerpScholar"], newData);
  //   },
  // });

  const SemanticScholarResult = () => {
    if (isLoading)
      return (
        <div className="py-4 flex items-center justify-center">
          <FaSpinner className="animate-spin text-3xl" />
        </div>
      );

    if (data && data.data) {
      if (data.data.length > 0) {
        return <SemanticScholarTable paperList={data.data} />;
      }
    }

    return (
      <div className="p-4 text-center text-xl border rounded-sm">
        No Results
      </div>
    );
  };

  return (
    <div>
      {isDesktop ? (
        <ScholarDesktopBar
          title="Semantic Scholar"
          showTable={showTable}
          filterOptions={SEMANTIC_SCHOLAR_FILTER_OPTIONS}
          onFilterChange={() => {}}
          onToggleClick={() => setShowTable(!showTable)}
          resultLength={0}
        />
      ) : (
        <ScholarMobileBar
          title="Semantic Scholar"
          showTable={showTable}
          resultLength={0}
          onClick={() => setShowTable(!showTable)}
        />
      )}
      <div className="overflow-y-scroll lg:overflow-hidden">
        {showTable && <SemanticScholarResult />}
      </div>
    </div>
  );
};

export default SemanticScholar;
