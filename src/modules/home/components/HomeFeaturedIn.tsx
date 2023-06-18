import React from "react";
import Image from "next/image";
import Button from "@/common/components/Button";

const HomeFeaturedIn = () => {
  return (
    <div className="p-4 border-y">
      <div className="text-3xl font-semibold text-center mb-8">Featured In</div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="mb-8">
          <Image
            src="/images/smartling.png"
            alt="smartling"
            width={250}
            height={250}
            className="rounded mx-auto"
          />
          <Button
            type="link"
            href="https://www.smartling.com/resources/101/languageai-webinar/"
            title="Smartling - LanguageAI Webinar"
            wrapperClassName="text-xl text-center my-4 font-semibold underline hover:text-blue-200"
          />
          <div className="text-lg px-4 text-justify lg:hidden">
            How LanguageAI improves business outcomes and where the industry is
            headed with technology & machine translation
          </div>
        </div>
        <div>
          <Image
            src="/images/forbes.png"
            alt="smartling"
            width={250}
            height={250}
            className="rounded mx-auto"
          />
          <Button
            type="link"
            href="https://www.forbes.com/sites/robtoews/2022/02/13/language-is-the-next-great-frontier-in-ai/?sh=362144215c50"
            title="Language AI: The Next Great Frontier"
            wrapperClassName="text-center text-xl my-4 font-semibold underline hover:text-blue-200"
          />
          <div className="text-lg text-justify px-4 lg:hidden">
            Language AI is poised to transform vast swaths of society and the
            economy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedIn;
