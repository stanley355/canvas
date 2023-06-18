import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "@/common/components/Button";
import { HOME_COPYWRITING } from "../lib/constant";

const HomeServices = () => {
  return (
    <div className="py-8">
      <div className="font-semibold text-4xl text-center">Our Services</div>
      <div className="font-semibold text-2xl text-center mt-2 mb-8">
        Translate and Check Not just English, but All Languages
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {HOME_COPYWRITING.map((copy: any) => (
          <div
            key={copy.title}
            className="flex flex-col items-center px-2 mb-8"
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
              type="link"
              href={copy.link}
              title={copy.ctaText}
              wrapperClassName="bg-white p-2 text-black w-4/5 lg:w-full text-center font-semibold rounded mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
