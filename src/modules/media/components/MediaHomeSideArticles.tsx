import React from 'react';
import Link from 'next/link';

const MediaHomeSideArticles = ({ articles }: { articles: Array<any> }) => (
  <div>
  {articles.length > 0 &&
    articles.slice(articles.length / 2, articles.length - (articles.length / 4)).map((article: any) => (
      <div key={article.id} className="flex flex-row border mb-8 rounded-lg bg-gradient-to-b from-white via-blue-100 to-white shadow-lg shadow-slate-400">
        <div className="p-2">
          <Link href={`/media/${article.slug}/`}>
            <div className=" hover:text-blue-900 text-lg underline mb-2">
              {article.title}
            </div>
          </Link>
          <div >
            {article?._publishedAt &&
              new Date(article?._publishedAt).toLocaleString()}
          </div>
          <div className="text-sm ">
            {article.metaTags.description}
          </div>
        </div>
      </div>
    ))}
</div>
);

export default MediaHomeSideArticles;