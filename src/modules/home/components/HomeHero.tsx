import React from "react";
import classNames from "classnames";
import PackageJson from "../../../../package.json";
import styles from "./home.module.scss";

const HomeHero = () => (
  <div className={classNames(styles.home__hero, "p-2 lg:px-4 h-screen")}>
    <div className="mt-80 text-6xl lg:text-8xl mb-4 font-semibold">
      <h1 className="mb-4">LanguageAI</h1>
      <h2>v{PackageJson.version}</h2>
    </div>
    <div className="text-2xl lg:text-3xl font-semibold">
      AI Translation and Text Analysis for All Languages
    </div>
  </div>
);

export default HomeHero;
