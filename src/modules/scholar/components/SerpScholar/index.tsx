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
import Button from "@/common/components/Button";
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

  const DesktopBar = () => (
    <div className="flex flex-row items-center justify-between p-2 border rounded-sm w-full">
      <span className="flex flex-row items-center text-xl">
        <FaGraduationCap className="text-2xl" />
        <span className="mx-2">Google Scholar</span>
        <span>
          {/* ({data && data.organic_results ? data.organic_results.length : 0}{" "} */}
          Results
        </span>
      </span>
      <div>
        <Button
          type="button"
          buttonClassName="bg-white px-2 items-center text-black flex flex-row"
        >
          <span className="font-semibold mr-2">
            {showTable ? "Hide" : "Show"}
          </span>
          {showTable ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      {isDesktop ? (
        <DesktopBar />
      ) : (
        <SerpScholarMobileBar
          showTable={showTable}
          onClick={() => setShowTable(!showTable)}
          resultLength={0}
          // resultLength={
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
