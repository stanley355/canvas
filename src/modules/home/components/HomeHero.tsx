import React from "react";
import classNames from "classnames";
import PackageJson from "../../../../package.json";
import styles from './home.module.scss';

const HomeHero = () => (
  <div className={classNames(styles.home__hero, "p-4 pb-12 lg:pb-40 flex flex-col h-screen")}>
    <div className="mb-4 lg:flex lg:gap-4 lg:items-center mt-auto">
      <h1 className="text-6xl mb-4 lg:mb-0">LanguageAI</h1>
      <h2 className="text-6xl">v{PackageJson.version}</h2>
    </div>
    <div className="text-2xl">
      10x Better Writing Check and Translation for All Languages
    </div>
  </div>
);

export default HomeHero;
