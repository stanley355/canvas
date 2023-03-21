import React, { useState } from "react";
import {
  FaCrosshairs,
  FaHome,
  FaGraduationCap,
  FaNewspaper,
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
      title: "News",
      href: "/news",
      icon: <FaNewspaper />,
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
        children={<FaCrosshairs className="text-3xl" />}
      />
      {openBar && (
        <div className="absolute z-10 top-14 left-2 bg-white flex flex-col items-center w-4/5 h-fit pb-2 m-auto rounded-xl">
          {MENU_OPTIONS.map((option) => (
            <Button
              type="link"
              href={option.href}
              wrapperClassName="text-black text-3xl pt-2 hover:text-blue-400"
              key={option.title}
              children={option.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNavbarBtn;
