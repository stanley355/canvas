import Link from "next/link";
import { TbWriting, TbWritingSign } from "react-icons/tb";

const HomeFeatures = () => {
  return (
    <section
      className="h-screen px-4 py-8 "
      id="home_features"
    >
      <div className="container">
        <h3 className="mb-8 text-xl">
          Before jumping in, let&apos;s explore why you&apos;re here
        </h3>

        <Link href="/checkbot">
          <div className="flex items-center justify-between gap-4 py-4 border-y border-y-white">
            <div className="w-6 h-6 px-3 border rounded-full"/>
            <span>
              I want to check my writing for grammar and spelling
            </span>
            <TbWritingSign className="text-5xl" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeFeatures;
