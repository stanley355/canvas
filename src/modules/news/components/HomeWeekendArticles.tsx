import React from "react";
import Link from "next/link";

interface INewsHomeWeekendArticles {
  articles: any[];
}

const NewsHomeWeekendArticles = (props: INewsHomeWeekendArticles) => {
  const { articles } = props;

  const filteredArticles = articles.filter((art, index) => index < 8);

  return (
    <div className="p-4">
      <div className="font-semibold text-lg mb-4">What to Watch and Read This Weekend</div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {filteredArticles.map((article) => (
          <div key={article.url}>
            <img src={article.urlToImage} alt={article.title} className="pb-2" />
            <Link href={article.url} passHref className="font-semibold hover:underline">{article.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHomeWeekendArticles;
