import React from "react";
import Link from "next/link";
import { useDesktopScreen } from "@/common/lib/useDesktopScreen";

interface INewsHomeMainArticles {
  articles: any[];
}

const NewsHomeMainArticles = (props: INewsHomeMainArticles) => {
  const { articles } = props;

  const filteredArticles = articles
    .filter((article) => article.section !== "us")
    .filter((art, index) => index < (useDesktopScreen() ? 2 : 5));

  return (
    <div className="px-4 lg:w-2/3">
      {filteredArticles.map((article) => (
        <div
          key={article.short_url}
          className="py-4 border-b lg:flex lg:flex-row gap-2"
        >
          <div className="lg:w-1/3">
            <Link
              href={article.url}
              passHref
              className="text-blue-200 font-semibold text-2xl lg:text-base hover:underline"
            >
              {article.title}
            </Link>
            <div className="py-2 lg:text-sm">{article.abstract}</div>
          </div>
          <div className="w-full lg:w-2/3">
            <img
              className="w-full h-auto max-h-80"
              src={article.multimedia[0].url}
              alt={article.title}
              loading="lazy"
              width={article.multimedia[0].width}
              height={article.multimedia[0].height}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHomeMainArticles;
