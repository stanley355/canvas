import { useState } from "react";
import Link from "next/link";
import Textarea from "@/common/components/Textarea";
import Header from "@/common/components/Header";
import Button from "@/common/components/Button";

import { cn } from "@/common/lib/cn";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

const HomeHero = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="h-screen bg-[url('/images/home/hero_bg.jpg')] bg-cover bg-right-bottom lg:bg-[right_bottom_-20rem] bg-fixed">
      <Header />
      <div className="container p-4 lg:px-0 lg:py-12">
        <h1 className="mb-2 text-3xl font-bold text-center lg:text-5xl">
          #1 Language Processing AI
        </h1>
        <h2 className="mb-4 text-center lg:text-xl">
          Simplify your text and audio conversion
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowOptions(true);
            sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_form_submit);
          }}
          className="flex flex-col mb-4 bg-white border rounded-md animate-visible-forward focus-within:bg-opacity-100"
        >
          <Textarea
            className="w-full mx-auto border-none resize-none focus-visible:outline-none lg:h-60"
            placeholder="Enter text"
          />
          <div className="flex justify-end p-2">
            <Button className="w-fit">Next</Button>
          </div>
        </form>
        <div
          className={cn(
            "flex-col gap-4 p-4 text-sm bg-white bg-opacity-50 rounded-md animate-visible-forward lg:text-base",
            showOptions ? "flex" : "hidden"
          )}
        >
          <div className="font-semibold">How should we proceed?</div>
          <Link
            href="/checkbot"
            className="py-1 hover:underline"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_form_suggestion)
            }
          >
            I want to check my writing
          </Link>
          <Link
            href="/translate"
            className="py-1 hover:underline"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_form_suggestion)
            }
          >
            I want to translate
          </Link>
          <Link
            href="/text-to-speech"
            className="py-1 hover:underline"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_form_suggestion)
            }
          >
            I want to convert text to speech
          </Link>
          <Link
            href="/speech-to-text"
            className="py-1 hover:underline"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_form_suggestion)
            }
          >
            I want to convert audio to text
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
