import React, { useMemo } from "react";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRight, FaClock, FaTimes } from "react-icons/fa";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

interface IHistoryBar {
  pageType: "translate" | "checkbot";
  onCloseClick: () => void;
  onHistoryClick: (history: any) => void;
}

const HistoryBar = (props: IHistoryBar) => {
  const { pageType, onCloseClick, onHistoryClick } = props;

  const historyData = useMemo(() => {
    const history = sessionStorage.getItem("history");
    if (history) {
      const historyArr = JSON.parse(history);
      return historyArr.filter((history: any) => history.type === pageType);
    }

    return [];
  }, [pageType]);

  return (
    <div className="fixed top-0 left-0 w-full lg:w-1/4 h-full z-10 bg-black overflow-y-scroll">
      <div className="flex items-center text-xl justify-between border-b p-4 lg:p-2">
        <div className="flex items-center gap-2 font-semibold">
          <FaClock />
          <span>My History</span>
        </div>
        <Button
          type="button"
          wrapperClassName="text-2xl"
          buttonClassName="w-full flex items-center"
          onClick={onCloseClick}
        >
          <FaTimes />
        </Button>
      </div>

      {!historyData?.length && (
        <div className="text-white text-center p-2">
          No Recent {pageType} History
        </div>
      )}
      {historyData?.length > 0 && (
        <div>
          {historyData
            .sort(
              (a: any, b: any) =>
                new Date(b.time).getTime() - new Date(a.time).getTime()
            )
            .map((history: any, index: number) => (
              <div
                key={index}
                className="p-4 border-b flex items-center justify-between cursor-pointer hover:bg-white hover:text-black"
                onClick={() => onHistoryClick(history)}
              >
                <div>
                  <div className="p-1 rounded bg-white text-black w-fit mb-2">
                    {new Date(history.time).toLocaleTimeString()}
                  </div>
                  <div className="underline">{history.instruction}</div>
                  <div>
                    {history.originalText.length > 100
                      ? history.originalText.slice(0, 100).concat("...")
                      : history.originalText}
                  </div>
                </div>
                <FaArrowRight className="text-xl" />
              </div>
            ))}
        </div>
      )}
      <div className="text-center mt-2">
        *History will be cleared after browser is closed
      </div>
    </div>
  );
};

export default HistoryBar;
