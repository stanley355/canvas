import React from "react";
import Link from "next/link";

interface INewsHomeSideArticles {
  articles: any[];
}

const NewsHomeSideArticles = (props: INewsHomeSideArticles) => {
  const { articles } = props;

  const filteredArticles = articles.filter((article, index) => index < 5);

  return (
    <div className="lg:w-1/3">
      {filteredArticles.map((article) => (
        <div key={article.webUrl} className="p-4 border-b">
          <Link href={article.webUrl} className="text-blue-200 hover:underline">
            {article.webTitle}
          </Link>
          <div>{article.sectionName}</div>
        </div>
      ))}
    </div>
  );
};

export default NewsHomeSideArticles;
