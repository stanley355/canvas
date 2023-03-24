import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";

import ScholarMobileBar from "../ScholarMobileBar";

import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const SemanticScholar = () => {
  const [showTable, setShowTable] = useState(true);
  const router = useRouter();
  const isDesktop = useDesktopScreen();

  //   const queryClient = useQueryClient();

  //   const { isLoading, data } = useQuery({
  //     queryKey: ["fetchSerpScholar"],
  //     queryFn: () => fetchSerpScholar(String(router.query.q)),
  //   });

  //   const mutation = useMutation({
  //     mutationFn: (filter: any) =>
  //       fetchSerpScholar(String(router.query.q), {
  //         key: filter.value[0],
  //         value: filter.value[1],
  //       }),
  //     onSuccess: (newData) => {
  //       queryClient.setQueryData(["fetchSerpScholar"], newData);
  //     },
  //   });

  const SerpScholarResult = () => {
    // if (isLoading)
    //   return (
    //     <div className="py-4 flex items-center justify-center">
    //       <FaSpinner className="animate-spin text-3xl" />
    //     </div>
    //   );

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
        <></>
      ) : (
        <ScholarMobileBar
          title="Semantic Scholar"
          showTable={showTable}
          resultLength={0}
          onClick={() => setShowTable(!showTable)}
        />
      )}
      <div className="overflow-y-scroll lg:overflow-hidden">
        hi
        {/* {showTable && <SerpScholarResult />} */}
      </div>
    </div>
  );
};

export default SemanticScholar;
