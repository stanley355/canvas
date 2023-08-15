import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import Button from "@/common/components/Button";

const HomeHero = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    const prompt = target.prompt.value;
    Router.push(`/languagegpt?prompt=${prompt}`);
  };

  return (
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
      <div className="text-2xl text-center">High Quality Translation and Grammar Check</div>
      <form onSubmit={handleSubmit} className='w-full lg:w-2/3 lg:mx-auto mt-12'>
        <label htmlFor="prompt" className="w-full">
          <textarea
            name='prompt'
            id='prompt'
            className='w-full rounded p-1 resize-none text-black'
            placeholder="Translate 'Apa kabar' in German, English, and Japanese"
          />
        </label>

        <Button type='submit' wrapperClassName='h-full text-white text-lg w-full bg-black p-1 mt-4 lg:w-1/2 lg:mx-auto border-white border' buttonClassName='w-full h-full flex items-center justify-center'>
          <span>Go</span>
        </Button>
      </form>

      <div className="mt-8 lg:w-2/3 lg:mx-auto">
        <div className="text-center text-lg font-semibold mb-4">You might want to try</div>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/languagegpt?prompt=Translate 'Apa kabar?' in German, English, and Japanese" className="bg-white text-black p-2 rounded">Translate &quot;Apa kabar?&quot; in German, English, and Japanese</Link>
          <Link href="/languagegpt?prompt=What is the meaning of 'Als ik Netherlander was'?" className="bg-white text-black p-2 rounded">What is the meaning of &quot;Als ik Netherlander was&quot;?</Link>
          <Link href="/languagegpt?prompt=Fix my spelling: There re ten thosand weys to go to Rome" className="bg-white text-black p-2 rounded">Fix my spelling: There re ten thosand weys to go to Rome </Link>
          <Link href="/languagegpt?prompt=What is the hardest language in the world?" className="bg-white text-black p-2 rounded">What is the hardest language in the world?</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
