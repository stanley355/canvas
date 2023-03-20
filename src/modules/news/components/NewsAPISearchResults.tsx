import React from "react";
import Link from "next/link";
import Image from "next/image";

interface INewsAPISearchResults {
  articles: any[];
}

const NewsAPISearchResults = (props: INewsAPISearchResults) => {
  const { articles } = props;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
      {articles.map((article) => (
        <div key={article.title} className="p-4 pb-0">
          <Image
            loader={() => article.urlToImage}
            src="next.svg"
            alt={article.title}
            width={176}
            height={100}
          />
          <div>
            <div className="text-white-500">
              {new Date(article.publishedAt).toLocaleDateString()}
            </div>
            <Link
              href={article.url}
              passHref
              title={article.title}
              className="text-blue-200"
            >
              {article.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsAPISearchResults;
