import { useState } from "react";
import Link from "next/link";
import Textarea from "@/common/components/Textarea";
import Header from "@/common/components/Header";
import Button from "@/common/components/Button";
import { cn } from "@/common/lib/cn";

const HomeHero = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="h-screen snap-center bg-[url('/images/home/hero_bg.jpg')] bg-cover bg-right-bottom lg:bg-[right_bottom_-20rem]">
      <Header />
      <div className="container p-4">
        <h1 className="text-xl font-bold text-center lg:text-3xl">#1 Language Processing AI</h1>
        <h2 className="mb-4 text-center">Simplify your text and audio conversion</h2>
        <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col mb-4 bg-white bg-opacity-50 border rounded-md animate-visible-forward focus-within:bg-opacity-100">
          <Textarea
            className="w-full mx-auto border-none resize-none focus-visible:outline-none lg:h-60"
            placeholder="Enter text"
          />
          <div className="flex justify-end p-2">
            <Button className="w-fit" onClick={()=> setShowOptions(true)}>Next</Button>
          </div>
        </form>
        <div className={cn("flex-col gap-4 p-4 text-sm bg-white bg-opacity-50 rounded-md animate-visible-forward lg:text-base", showOptions ? 'flex' : 'hidden')}>
          <div className="font-semibold">How should we proceed?</div>
          <Link href="/checkbot" className="py-1 hover:underline">
            I want to check grammar and spelling 
          </Link>
          <Link href="/translate" className="py-1 hover:underline">
            I want to translate
          </Link>
          <Link href="/translate" className="py-1 hover:underline">
            I want to translate audio file
          </Link>
          <Link href="/text-to-speech" className="py-1 hover:underline">
            I want to convert text to speech 
          </Link>
          <Link href="/text-to-speech" className="py-1 hover:underline">
            I want to convert audio to text 
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default HomeHero;
