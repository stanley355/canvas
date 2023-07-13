import React from "react";
import classNames from "classnames";
import PackageJson from "../../../../package.json";
import styles from "./home.module.scss";

const HomeHero = () => (
  <div className={classNames(styles.home__hero, "p-2 lg:px-4 h-screen")}>
    <div className="mt-80 lg:mt-4 text-5xl lg:text-8xl mb-2 font-semibold">
      <h1 className="mb-4">LanguageAI</h1>
    </div>
    <div className="text-2xl lg:text-3xl font-semibold">
      AI Translation and Text Analysis for All Languages
    </div>
  </div>
);

export default HomeHero;
