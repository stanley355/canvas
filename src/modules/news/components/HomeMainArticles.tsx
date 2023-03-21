import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface INewsHomeMainArticles {
  articles: any[];
}

const NewsHomeMainArticles = (props: INewsHomeMainArticles) => {
  const { articles } = props;

  return (
    <div className="px-4 lg:w-2/3">
      {articles.map((article) => (
        <div
          key={article.short_url}
          className="py-4 border-b lg:flex lg:flex-row gap-2"
        >
          <div className="lg:w-1/3">
            <div>{new Date(article.published_date).toLocaleDateString()}</div>
            <Link
              href={article.url}
              passHref
              className="text-blue-200 font-semibold text-2xl lg:text-xl hover:underline"
            >
              {article.title}
            </Link>
            <div className="py-2 lg:text-md">{article.abstract}</div>
          </div>
          <div className="w-full lg:w-2/3">
            <Image
              loader={() => article.multimedia[0].url}
              className="w-full h-auto max-h-80"
              src="next.svg"
              alt={article.title}
              width={368}
              height={275}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHomeMainArticles;
