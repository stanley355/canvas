import React from "react";
import Link from "next/link";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface INYTSearchResults {
  articles: any[];
}

const NYTSearchResults = (props: INYTSearchResults) => {
  const { articles } = props;

  const isDesktop = useDesktopScreen();

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id} className="p-4 border-b grid grid-cols-2 gap-2">
          <div >
            <div className="text-white-500">{new Date(article.pub_date).toLocaleDateString()}</div>
            <Link href={article.web_url} passHref title={article.headline.main} className="text-blue-200">
              {article.headline.main}
            </Link>
            {isDesktop && <div>{article.abstract}</div> }
          </div>
          <img
            src={`https://nytimes.com/${article.multimedia[0].url}`}
            alt={article.headline.main}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default NYTSearchResults;
