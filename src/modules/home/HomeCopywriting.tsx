import React from "react";
import { FaLanguage, FaRobot, FaPlusCircle } from "react-icons/fa";
import Button from "@/common/components/Button";

const HomeCopywriting = () => (
  <div className="px-4 border-b py-12">
    <h3 className="my-4 text-4xl text-center lg:text-5xl">
      Not Just English, but World Languages!
    </h3>
    <div className="text-xl lg:text-3xl text-center my-4 lg:mb-8">
      Indonesian, European, or African languages are all possible!
    </div>
    <div className="text-lg lg:grid lg:grid-cols-2 lg:gap-16">
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
            wrapperClassName="text-center border-2 font-bold p-1 rounded-sm hover:text-black hover:bg-white animate-pulse"
          />
          <Button
            type="link"
            title="See Docs"
            href="/translate/#translate_comparison"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
        </div>
      </div>
      <div id="checkbot_copywriting" className="mb-8">
        <div className="flex flex-row items-center gap-2">
          <FaRobot className="text-4xl" />
          <span className="text-2xl">LanguageAI Checkbot</span>
        </div>
        <ul className="list-disc ml-4 mt-2">
          <li className="font-bold">10x better than Grammarly</li>
          <li>
            Correct Grammar and Spelling, not just in English but World
            Languages
          </li>
          <li>
            Can Provide Feedback, Rewrite, or Analyse Strength and Weaknesses of
            the writing{" "}
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-2 my-2 mt-4">
          <Button
            type="link"
            title="Try it out"
            href="/checkbot/"
            wrapperClassName="text-center border-2 font-bold p-1 rounded-sm hover:text-black hover:bg-white animate-pulse"
          />
          <Button
            type="link"
            title="See Docs"
            href="/checkbot/#checkbot_comparison"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
        </div>
      </div>
      <div id="premium_translate_copywriting" className="mb-8">
        <div className="flex flex-row items-center gap-2 bg-white text-black px-2 rounded w-fit font-semibold">
          <FaLanguage className="text-5xl" />
          <span className="text-2xl">Premium Translate</span>
        </div>
        <ul className="list-disc ml-4 mt-2">
          <li className="font-bold">Translation Updated with Real Time Data</li>
          <li className="font-bold">10x better than Google Translate</li>
          <li>User can provide context to translation</li>
          <li>Meaningful result, even for non-english translation</li>
          <li>Only Rp1 per token/word</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 my-2 mt-4">
          <Button
            type="link"
            title="Try it out"
            href="/premium/translate/"
            wrapperClassName="text-center border-2 font-bold p-1 rounded-sm hover:text-black hover:bg-white animate-pulse"
          />
          <Button
            type="link"
            title="See Docs"
            href="/premium/translate/#translate_comparison"
            wrapperClassName="text-center border p-1 rounded-sm hover:text-black hover:bg-white"
          />
        </div>
      </div>
      <div id="premium_checkbot_copywriting" className="mb-8">
        <div className="flex flex-row items-center gap-2 bg-white text-black px-2 py-1 rounded w-fit font-semibold">
          <FaPlusCircle className="text-3xl" />
          <span className="text-2xl">Premium Checkbot</span>
        </div>
        <ul className="list-disc ml-4 mt-2">
          <li className="font-bold">20x better than Grammarly</li>
          <li className="font-bold">Writing Check updated with real time Language Data</li>
          <li>
            Correct Grammar and Spelling, not just in English but World
            Languages
          </li>
          <li>
            Can Provide Feedback, Rewrite, or Analyse Strength and Weaknesses of
            the writing{" "}
          </li>
        </ul>
        <div className="grid grid-cols-1 gap-2 my-2 mt-4">
          <Button
            type="link"
            title="Coming Soon"
            href="/checkbot/"
            wrapperClassName="text-center border-2 font-bold p-1 rounded-sm hover:text-black hover:bg-white animate-pulse"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HomeCopywriting;
