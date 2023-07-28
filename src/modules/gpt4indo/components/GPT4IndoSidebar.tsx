import { HEADER_MENU } from "@/common/components/Header/constant";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { SiOpenai } from "react-icons/si";

const GPT4IndoSidebar = () => {
  return (
    <div className="h-screen lg:col-span-1 hidden lg:block">
      <div className="text-center p-2 pb-0 text-2xl">GPT4Indo</div>
      <div className="text-center">Beta Access from LanguageAI</div>

      <div className="mt-16">
        <div className="text-center mb-2">Explore Other Stuffs</div>
        {HEADER_MENU.slice(0, 7).map((menu, i) => (
          <Link
            key={menu.title}
            href={menu.url}
            className={classNames(
              "flex items-center justify-center p-2 gap-2 w-full h-full hover:bg-white hover:text-black",
              i === 0 ? "bg-white text-black" : ""
            )}
          >
            <span>{menu.icon}</span>
            <span>{menu.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GPT4IndoSidebar;
