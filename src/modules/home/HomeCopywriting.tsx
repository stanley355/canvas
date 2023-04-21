import React from "react";
import { FaLanguage, FaRobot } from "react-icons/fa";
import Button from "@/common/components/Button";

const HomeCopywriting = () => (
  <div className="px-2">
    <h3 className="my-4 text-4xl text-center">
      Not Just English, but World Languages!
    </h3>
    <div className="px-2 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8 ">
      <div id="translate_copywriting" className="mb-8">
        <div className="flex flex-row items-center gap-2">
          <FaLanguage className="text-5xl" />
          <span className="text-2xl">LanguageAI Translate</span>
        </div>
        <ul className="list-disc ml-4 mt-2">
          <li className="font-bold">5x better than Google Translate</li>
          <li>User can provide context to translation</li>
          <li>Meaningful result, even for non-english translation</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 my-2 mt-4">
          <Button
            type="link"
            title="Try it out"
            href="/translate/"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
          <Button
            type="link"
            title="See Docs"
            href="/translate/#translate_comparison"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
        </div>
      </div>
      <div id="checkbot_copywriting">
        <div className="flex flex-row items-center gap-2">
          <FaRobot className="text-4xl" />
          <span className="text-2xl">LanguageAI Checkbot</span>
        </div>
        <ul className="list-disc ml-4 mt-2">
          <li className="font-bold">10x better than Grammarly</li>
          <li>Correct Grammar and Spelling, not just in English but World Languages</li>
          <li>Can Provide Feedback, Rewrite, or Analyse Strength and Weaknesses of the writing </li>
        </ul>
        <div className="grid grid-cols-2 gap-2 my-2 mt-4">
          <Button
            type="link"
            title="Try it out"
            href="/checkbot/"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
          <Button
            type="link"
            title="See Docs"
            href="/checkbot/#checkbot_comparison"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HomeCopywriting;
