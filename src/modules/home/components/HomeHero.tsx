import Link from "next/link";
import Textarea from "@/common/components/Textarea";

const HomeHero = () => {
  return (
    <section className="container h-screen px-4 py-8 snap-center">
      <h1 className="text-xl font-bold text-center">#1 Language Processor</h1>
      <h2 className="mb-4 text-center">Check, translate, convert</h2>
      <div
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col mb-4 border rounded-md h-60 animate-visible-forward"
      >
        <Textarea
          className="flex-1 w-full mx-auto border-none resize-none focus-visible:outline-none"
          placeholder="Enter your text"
        />
        <div className="flex items-center justify-end p-2">
          <Link href="#home_features">Next</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="#home_features" className="underline text-brand-primary">
          I want to convert audio
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
