import React from "react";
import Link from "next/link";

interface INewsHomeSideArticles {
  articles: any[];
}

const NewsHomeSideArticles = (props: INewsHomeSideArticles) => {
  const { articles } = props;

  return (
    <div className="lg:w-1/3">
      {articles.map((article) => (
        <div key={article.webUrl} className="p-4 border-b">
          <Link href={article.webUrl} className="text-blue-200 hover:underline">
            {article.webTitle}
          </Link>
          <div>
            <span className="mr-2 italic">{article.sectionName}</span>
            <span>
              {new Date(article.webPublicationDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHomeSideArticles;
