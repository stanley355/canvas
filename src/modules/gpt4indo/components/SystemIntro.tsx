import React from "react";
import { SiOpenai } from "react-icons/si";

const SystemIntro = () => (
  <div className="flex items-center gap-2 bg-gray-700 p-4 text-white lg:justify-center border-b">
    <div className="text-xl">
      <SiOpenai />
    </div>
    <span>
      Halo, bagaimana saya bisa membantu Anda?
    </span>
  </div>
);

export default SystemIntro;
