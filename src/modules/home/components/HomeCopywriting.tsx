import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "@/common/components/Button";
import { HOME_COPYWRITING } from "../lib/constant";

const HomeCopywriting = () => {

  return (
    <div className="px-4 py-8">
      <div className="font-semibold text-4xl text-center">
        Translate and Check Not Just English, but All Languages!
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8" >
        {HOME_COPYWRITING.map((copy: any) =>
          <div key={copy.title} className="flex flex-col items-center">
            <div className="text-8xl mb-4">{copy.icon}</div>
            <div className="text-2xl font-semibold">{copy.title}</div>
            <ul className="text-xl mt-4">
              {copy.features.map((feature: string) =>
                <li className="flex items-center gap-2 py-2" key={`${copy.title}_${feature}`}>
                  <FaCheck />
                  <span>{feature}</span>
                </li>)}
            </ul>
            <Button
              type="link"
              href={copy.link}
              title={copy.ctaText}
              wrapperClassName="bg-white p-2 text-black w-4/5 text-center font-semibold rounded mt-4"
            />
          </div>
        )}
      </div>
    </div>
  )
};

export default HomeCopywriting;
