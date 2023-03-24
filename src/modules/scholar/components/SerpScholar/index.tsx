import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FaGraduationCap,
  FaChevronUp,
  FaChevronDown,
  FaSpinner,
} from "react-icons/fa";

import SerpScholarMobileBar from "./MobileBar";
import SerpScholarDesktopBar from "./DesktopBar";
import SerpScholarTable from "./SerpScholarTable";

import { fetchSerpScholar } from "../../lib/fetchSerpScholar";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const SerpScholar = () => {
  const [showTable, setShowTable] = useState(true);
  const router = useRouter();
  const isDesktop = useDesktopScreen();

  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["fetchSerpScholar"],
    // queryFn: () => fetchSerpScholar(String(router.query.q)),
  });

  const mutation = useMutation({
    mutationFn: () => fetchSerpScholar(String(router.query.q)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchSerpScholar"] });
    },
  });

  const SerpScholarResult = () => {
    if (isLoading)
      return (
        <div className="py-4 flex items-center justify-center">
          <FaSpinner className="animate-spin text-3xl" />
        </div>
      );

    // if (data && data.organic_results) {
    //   if (data.organic_results.length > 0) {
    //     return <SerpScholarTable paperList={data.organic_results} />;
    //   }
    // }
    return (
      <div className="p-4 text-center text-xl border rounded-sm">
        No Results
      </div>
    );
  };

  return (
    <div>
      {isDesktop ? (
        <SerpScholarDesktopBar
          showTable={showTable}
          onFilterChange={(filter:any) => {}}
          onToggleClick={() => setShowTable(!showTable)}
          resultLength={0}
        />
      ) : (
        <SerpScholarMobileBar
          showTable={showTable}
          onClick={() => setShowTable(!showTable)}
          resultLength={0}
          // resultLength={bonly
          //   data && data.organic_results ? data.organic_results.length : 0
          // }
        />
      )}
      <div className="overflow-y-scroll lg:overflow-hidden">
        {showTable && <SerpScholarResult />}
      </div>
    </div>
  );
};

export default SerpScholar;
