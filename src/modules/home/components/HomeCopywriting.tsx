import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "@/common/components/Button";
import { HOME_COPYWRITING } from "../lib/constant";

const HomeCopywriting = () => {

  const TranslateCopywriting = () => (
    <div>

    </div>
  )

  return (
    <div className="px-4 py-12">
      <h3 className="my-4 text-4xl text-center lg:text-5xl">
        Not Just English, but World Languages!
      </h3>
      <div className="text-xl lg:text-3xl text-center my-4 hidden lg:block">
        European, African, or Asian languages are all possible!
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8" >
        {HOME_COPYWRITING.map((copy: any) =>
          <div key={copy.title} className="flex flex-col items-center">
            <div className="text-8xl mb-4">{copy.icon}</div>
            <div className="text-2xl font-semibold">{copy.title}</div>
            <ul className="text-xl mt-4">
              {copy.features.map((feature: string) =>
                <li className="flex items-center gap-2 py-2">
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
