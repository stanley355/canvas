import React from "react";
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

  const ADVANCE_SEARCH_MENU = [
    {
      title: "News Data",
      href: "/news",
      icon: <FaNewspaper className="text-xl mr-2" />,
      className:
        "p-2 mt-2 rounded-sm border bg-white text-black flex flex-row items-center justify-center",
    },
    {
      title: "Research Journal/Paper",
      href: "/scholar",
      icon: <FaGraduationCap className="text-xl mr-2" />,
      className:
        "p-2 mt-2 rounded-sm border bg-white text-black flex flex-row items-center justify-center",
    },
    {
      title: "Why not both",
      href: "/news",
      icon: <FaHandPeace className="text-xl mr-2" />,
      className:
        "p-2 mt-2 rounded-sm border bg-white text-black flex flex-row items-center justify-center",
    },
  ];

  return (
    <div
      className={classNames(
        "fixed inset-x-0 top-40 bg-black m-auto fit-content p-4",
        className
      )}
    >
      <div className="border rounded-md">
        <SearchBox placeholder={placeholder} onSubmit={(val) => {}} />
        <div className="p-4 flex flex-col">
          <div className="mb-2 text-center">
            Data is on Beta Version, which of these suits your need?
          </div>
          {ADVANCE_SEARCH_MENU.map((menu) => (
            <Link href={menu.href} passHref className={menu.className}>
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
