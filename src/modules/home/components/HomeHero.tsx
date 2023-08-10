import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { HEADER_MENU } from "@/common/components/Header/constant";
import Button from "@/common/components/Button";

const HomeHero = () => (
  <div
    className={classNames(
      "bg-gradient-to-b from-black via-blue-900 to-white lg:h-screen p-4 pb-8"
    )}
  >
    <h1 className="text-center flex items-center justify-center text-4xl">
      <span>Language</span>
      <Image
        src="/images/languageai_white.png"
        alt="Language AI"
        width={50}
        height={50}
      />
    </h1>
    <div className="text-2xl text-center">Language made Eazy</div>
    <div className="mt-12 lg:hidden">
      {HEADER_MENU.slice(0, 4).map((menu: any, i: number) => (
        <Button
          type="link"
          href={menu.url}
          key={menu.title}
          wrapperClassName={classNames(
            "bg-white text-blue-900 rounded-full p-2 w-1/2 mb-4 text-lg font-semibold",
            i % 2 !== 0 ? "ml-auto" : ""
          )}
          buttonClassName="flex items-center gap-2 justify-center"
        >
          <span className="text-xl">{menu.icon}</span>
          <span>{menu.title}</span>
        </Button>
      ))}
    </div>
    <div className="mt-12 hidden w-1/2 mx-auto lg:grid grid-cols-2 gap-4">
      {HEADER_MENU.slice(0, 4).map((menu: any) => (
        <div
          key={menu.title}
          className="bg-white rounded-md text-black p-2 group"
        >
          <div className="text-2xl flex items-center gap-2 mb-2">
            <span className="text-3xl">{menu.icon}</span>
            <span>{menu.title}</span>
          </div>
          <ul className="list-disc ml-4">
            {menu.desc?.map((des: string) => (
              <li key={des}>{des}</li>
            ))}
          </ul>
          <Button
            type="link"
            href={menu.url}
            title="Get Started"
            wrapperClassName="mx-auto w-fit p-1 border-white shadow shadow-gray-500 rounded mt-2 hover:bg-gradient-to-r hover:from-indigo-500"
          />
        </div>
      ))}
    </div>
  </div>
);

export default HomeHero;
