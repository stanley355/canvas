import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface INYTSearchResults {
  articles: any[];
}

const NYTSearchResults = (props: INYTSearchResults) => {
  const { articles } = props;

  const isDesktop = useDesktopScreen();

  return (
    <div>
      {articles.map((article, index) => (
        <div key={article._id} className="p-4 border-b grid grid-cols-2 lg:flex lg:flex-row gap-4">
          {index >= 5 && (
            <Image
              loader={() => `https://nytimes.com/${article.multimedia[0].url}`}
              src="next.svg"
              className="w-full h-auto max-h-80"
              alt={article.headline.main}
              width={368}
              height={275}
            />
          )}
          <div className="lg:w-1/3">
              {isDesktop && <div>{new Date(article.pub_date).toLocaleDateString()}</div>}
            <Link
              href={article.web_url}
              passHref
              title={article.headline.main}
              className="text-blue-200"
            >
              {article.headline.main}
            </Link>
            {!isDesktop && <div>

              <div>{article.section_name}</div>
              <div>{new Date(article.pub_date).toLocaleDateString()}</div>
            </div>}
            {isDesktop && <div>{article.abstract}</div>}
          </div>

          {index < 5 && (
            <Image
              loader={() => `https://nytimes.com/${article.multimedia[0].url}`}
              src="next.svg"
              className="w-full h-auto max-h-80 lg:w-2/3"
              alt={article.headline.main}
              width={368}
              height={275}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NYTSearchResults;
