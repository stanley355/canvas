import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";

import ScholarMobileBar from "../ScholarMobileBar";
import ScholarDesktopBar from "../ScholarDesktopBar";
import SerpScholarTable from "./SerpScholarTable";

import { fetchSerpScholar } from "../../lib/fetchSerpScholar";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { SERP_SCHOLAR_FILTER_OPTIONS } from "../../lib/constant";

const SerpScholar = () => {
  const [showTable, setShowTable] = useState(true);
  const router = useRouter();
  const isDesktop = useDesktopScreen();

  const { isLoading, data } = useQuery({
    queryKey: ["fetchSerpScholar"],
    queryFn: () => fetchSerpScholar(String(router.query.q)),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (filter: any) =>
      fetchSerpScholar(String(router.query.q), {
        key: filter.value[0],
        value: filter.value[1],
      }),
    onSuccess: (newData) => {
      queryClient.setQueryData(["fetchSerpScholar"], newData);
    },
  });

  const SerpScholarResult = () => {
    if (isLoading)
      return (
        <div className="py-4 flex items-center justify-center">
          <FaSpinner className="animate-spin text-3xl" />
        </div>
      );

    if (data && data.organic_results) {
      if (data.organic_results.length > 0) {
        return <SerpScholarTable paperList={data.organic_results} />;
      }
    }
    return (
      <div className="p-4 text-center text-xl border rounded-sm">
        No Results
      </div>
    );
  };

  return (
    <div className="mb-4">
      {isDesktop ? (
        <ScholarDesktopBar
          title="Additional Search"
          showTable={showTable}
          filterOptions={SERP_SCHOLAR_FILTER_OPTIONS}
          onFilterChange={mutation.mutate}
          onToggleClick={() => setShowTable(!showTable)}
          resultLength={
            data && data.search_information ? data.search_information.total_results : 0
          }
        />
      ) : (
        <ScholarMobileBar
          title="Additional Search"
          showTable={showTable}
          onClick={() => setShowTable(!showTable)}
          resultLength={
            data && data.search_information ? data.search_information.total_results : 0
          }
        />
      )}
      <div className="overflow-y-scroll lg:overflow-hidden">
        {showTable && <SerpScholarResult />}
      </div>
    </div>
  );
};

export default SerpScholar;
