import React from "react";
import Link from "next/link";

interface INewsHomeMainArticles {
  articles: any[];
}

const NewsHomeMainArticles = (props: INewsHomeMainArticles) => {
  const { articles } = props;

  const filteredArticles = articles
    .filter((article) => article.section !== "us")
    .filter((art, index) => index < 5);

  return (
    <div className="px-4 lg:w-2/3">
      {filteredArticles.map((article) => (
        <div key={article.short_url} className="py-4 border-b">
          <Link href={article.url} passHref className="text-blue-200 font-semibold text-2xl">
            {article.title}
          </Link>
          <div className="py-2">{article.abstract}</div>
          <div>
            <img
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
