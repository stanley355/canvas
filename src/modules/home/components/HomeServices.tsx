import React from "react";
import Router from "next/router";
import { FaCheck } from "react-icons/fa";
import Button from "@/common/components/Button";
import { CHECKBOT_COPYWRITING, TRANSLATE_COPYWRITING } from "../lib/constant";

const HomeServices = () => {
  return (
    <div className="py-4" id="homeServices">
      <div className="hidden lg:block text-4xl text-center mt-8 mb-2 font-bold ">
        Choose your Services
      </div>
      <div className="text-center text-xl mb-8 px-2">
        Translate and Fix Writing not just English but All Languages
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="text-center text-4xl font-semibold mb-8 underline">
            Translation Services
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2">
            {TRANSLATE_COPYWRITING.map((copy: any) => (
              <div
                key={copy.title}
                className="flex flex-col items-center p-2 mb-8 bg-white text-black rounded-md"
              >
                <div className="text-7xl mb-4">{copy.icon}</div>
                <div className="text-3xl font-semibold">{copy.title}</div>
                <ul className="text-lg mt-2">
                  {copy.features.map((feature: string) => (
                    <li
                      className="flex items-center gap-2 py-2"
                      key={`${copy.title}_${feature}`}
                    >
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  title={copy.ctaText}
                  wrapperClassName="bg-blue-900 p-2 text-white w-4/5 lg:w-full text-center font-semibold rounded mt-2"
                  buttonClassName="w-full h-full"
                  onClick={() => Router.push(copy.link)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center text-4xl font-bold mb-8 underline">
            Checkbot Services
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2">
            {CHECKBOT_COPYWRITING.map((copy: any) => (
              <div
                key={copy.title}
                className="flex flex-col items-center p-2 mb-8 bg-white text-black rounded-md"
              >
                <div className="text-7xl mb-4">{copy.icon}</div>
                <div className="text-3xl font-semibold">{copy.title}</div>
                <ul className="text-lg mt-2">
                  {copy.features.map((feature: string) => (
                    <li
                      className="flex items-center gap-2 py-2"
                      key={`${copy.title}_${feature}`}
                    >
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  title={copy.ctaText}
                  wrapperClassName="bg-blue-900 p-2 text-white w-4/5 lg:w-full text-center font-semibold rounded mt-2"
                  buttonClassName="w-full h-full"
                  onClick={() => Router.push(copy.link)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
