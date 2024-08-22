import Link from "next/link";
import Textarea from "@/common/components/Textarea";
import Header from "@/common/components/Header";

const HomeHero = () => {
  return (
    <section className="h-screen snap-center bg-[url('/images/home/hero_bg.jpg')] bg-cover lg:bg-bottom">
      <Header pathname="/"/>
      <div className="container">
        <h1 className="text-xl font-bold text-center">#1 Language Processor</h1>
        <h2 className="mb-4 text-center">Check, translate, convert</h2>
        <div className="flex flex-col mb-4 bg-white bg-opacity-50 border rounded-md h-60 animate-visible-forward">
          <Textarea
            className="flex-1 w-full mx-auto border-none resize-none focus-visible:outline-none"
            placeholder="Enter your text"
          />
          <div className="flex items-center justify-end p-2">
            <Link href="#home_features" className="bg-brand-primary">Next</Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#home_features" className="underline text-brand-primary">
            I want to convert audio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
