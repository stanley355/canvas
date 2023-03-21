import React, { useState } from "react";
import Link from "next/link";
import { FaCrosshairs, FaHome, FaGraduationCap } from "react-icons/fa";

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
    <div className="relative">
      <button
        type="button"
        className="mx-2"
        onClick={() => setOpenBar(!openBar)}
      >
        <FaCrosshairs className="text-3xl" />
      </button>
      {openBar && (
        <div>
          {MENU_OPTIONS.map((option) => (
            <Link href={option.href}>{option.icon}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNavbarBtn;
