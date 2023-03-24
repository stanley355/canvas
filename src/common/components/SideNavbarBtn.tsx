import React, { useState } from "react";
import {
  FaCrosshairs,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa";
import classNames from "classnames";
import Button from "./Button";

const SideNavbarBtn = () => {
  const [openBar, setOpenBar] = useState(false);

  const MENU_OPTIONS = [
    {
      title: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      title: "Scholar",
      href: "/scholar",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="relative">
      <Button
        type="button"
        wrapperClassName={classNames(
          "flex items-center rounded-full mx-2",
          openBar ? "text-black bg-white" : ""
        )}
        buttonClassName="p-2"
        onClick={() => setOpenBar(!openBar)}
      >
        <FaCrosshairs className="text-3xl" />
      </Button>
      {openBar && (
        <div className="absolute z-10 top-14 left-2 bg-white flex flex-col items-center w-4/5 h-fit pb-2 m-auto rounded-xl">
          {MENU_OPTIONS.map((option) => (
            <Button
              type="link"
              href={option.href}
              wrapperClassName="text-black text-3xl pt-2 hover:text-blue-400"
              key={option.title}
            >
              {option.icon}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNavbarBtn;
