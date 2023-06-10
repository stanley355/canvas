import React from "react";
import PackageJson from '../../../package.json';

const HomeHero = () => (
  <div className="p-4 border-b flex flex-col justify-center h-screen lg:h-80">
    <div className="mb-4 lg:flex lg:gap-4 lg:items-center">
      <h1 className="text-6xl mb-4 lg:mb-0">LanguageAI</h1>
      <h2 className="text-6xl">v{PackageJson.version}</h2>
    </div>
    <div className="text-2xl">
      10x Better Writing Check and Translation for All Languages
    </div>
  </div>
);

export default HomeHero;
