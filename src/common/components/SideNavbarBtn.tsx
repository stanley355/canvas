import React, { useState } from "react";
import { FaCrosshairs, FaHome, FaGraduationCap } from "react-icons/fa";
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
      icon: <FaHome />,
    },
    {
      title: "Scholar",
      href: "/scholar",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="mx-4"
        onClick={() => setOpenBar(!openBar)}
      >
        <FaCrosshairs className="text-3xl" />
      </button>
      {openBar && (
        <div>
          {MENU_OPTIONS.map((option) => (
            <Button type="link" key={option.title} children={option.icon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNavbarBtn;
