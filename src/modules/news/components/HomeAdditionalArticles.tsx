import React from "react";
import Link from "next/link";
import Image from "next/image";

interface INewsHomeAdditionalArticles {
  title: string;
  articles: any[];
}

const NewsHomeAdditonalArticles = (props: INewsHomeAdditionalArticles) => {
  const { title, articles } = props;

  return (
    <div className="p-4 border-b">
      <div className="font-semibold text-xl mb-4">{title}</div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {articles
          .filter((article) => article.urlToImage)
          .map((article) => (
            <div key={article.url}>
              <Image
                loader={() => article.urlToImage}
                className="pb-2 w-full h-auto"
                src="next.svg"
                alt={article.title}
                width={176}
                height={100}
              />
              <Link
                href={article.url}
                passHref
                className="font-semibold hover:underline"
              >
                {article.title}
              </Link>
              <div>{new Date(article.publishedAt).toLocaleDateString()}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsHomeAdditonalArticles;
