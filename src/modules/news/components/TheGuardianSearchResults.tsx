import React from "react";
import Link from "next/link";

interface ITheGuardianSearchResults {
  articles: any[];
}

const TheGuardianSearchResults = (props: ITheGuardianSearchResults) => {
  const { articles } = props;

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="p-4 border-b">
          <Link
            href={article.webUrl}
            passHref
            title={article.webTitle}
            className="text-blue-200"
          >
            {article.webTitle}
          </Link>
          <div>
          <div className="text-white-500">
            {new Date(article.webPublicationDate).toLocaleDateString()}
          </div>
           <span>{article.sectionName}</span> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheGuardianSearchResults;
