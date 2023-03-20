import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { FaNewspaper, FaGraduationCap, FaHandPeace } from "react-icons/fa";
import SearchBox from "./SearchBox";

interface IAdvanceSearchPopup {
  className?: string;
  placeholder: string;
  onCloseClick: () => void;
}

const AdvanceSearchPopup = (props: IAdvanceSearchPopup) => {
  const { placeholder, className, onCloseClick } = props;

  const [searchVal, setSearchVal] = useState(placeholder);

  const ADVANCE_SEARCH_MENU = [
    {
      title: "News Data",
      href: `/news/search?q=${searchVal}`,
      icon: <FaNewspaper className="text-xl mr-2" />,
      className:
        "p-2 mt-2 rounded-sm border bg-white text-black flex flex-row items-center justify-center",
    },
    {
      title: "Research Journal/Paper",
      href: `/scholar?q=${searchVal}`,
      icon: <FaGraduationCap className="text-xl mr-2" />,
      className:
        "p-2 mt-2 rounded-sm border bg-white text-black flex flex-row items-center justify-center",
    },
    // {
    //   title: "Why not both",
    //   href: "/news",
    //   icon: <FaHandPeace className="text-xl mr-2" />,
    //   className:
    //     "p-2 mt-2 rounded-sm border bg-white text-black flex flex-row items-center justify-center",
    // },
  ];

  return (
    <div
      className={classNames(
        "fixed inset-x-0 top-40 bg-black m-auto fit-content p-4",
        "animate-slide-advance-search",
        className
      )}
    >
      <div className="border rounded-md">
        <SearchBox
          placeholder={searchVal}
          onChange={setSearchVal}
          onSubmit={setSearchVal}
        />
        <div className="p-4 flex flex-col">
          <div className="mb-2 text-center">
            Databond is on Beta Version, which of these suits your need?
          </div>
          {ADVANCE_SEARCH_MENU.map((menu) => (
            <Link
              href={menu.href}
              passHref
              className={menu.className}
              key={menu.title}
            >
              {menu.icon}
              <span>{menu.title}</span>
            </Link>
          ))}
          <button
            type="button"
            onClick={() => onCloseClick()}
            className="p-2 mt-2"
          >
            Let me Think Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearchPopup;
