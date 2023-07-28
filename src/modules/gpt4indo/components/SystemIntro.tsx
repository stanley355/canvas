import React from "react";
import { SiOpenai } from "react-icons/si";
import Typewriter from "typewriter-effect";

const SystemIntro = () => (
  <div className="flex items-center gap-2 bg-gray-700 p-4 text-white lg:justify-center border-b">
    <div className="text-xl">
      <SiOpenai />
    </div>
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Halo, bagaimana saya bisa membantu Anda?")
          .start();
      }}
    />
  </div>
);

export default SystemIntro;
