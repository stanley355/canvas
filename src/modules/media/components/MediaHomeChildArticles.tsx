import React from "react";
import Link from "next/link";

const MediaHomeChildArticles = ({ articles }: { articles: Array<any> }) => (
  <div className="lg:col-span-2">
    {articles.length > 0 &&
      articles.slice(4, Math.floor(articles.length / 2)).map((article: any) => (
        <div
          key={article.id}
          className="flex flex-row border mb-8 rounded-lg bg-gradient-to-b from-white via-blue-100 to-white shadow-lg shadow-slate-400"
        >
          <div className="w-1/2 lg:w-full">
            <img
              src={article?.heroImg?.url}
              alt={article?.heroImg?.alt}
              loading="lazy"
              className="rounded-md w-full lg h-full"
              width={400}
              height={400}
            />
          </div>
          <div className="p-2">
            <Link href={`/media/${article.slug}/`}>
              <div className=" hover:text-blue-900 text-lg hover:underline mb-2">
                {article.title}
              </div>
            </Link>
            <div>
              {article?._publishedAt &&
                new Date(article?._publishedAt).toLocaleString()}
            </div>
            <div className="text-sm hidden lg:block">
              {article.metaTags.description}
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default MediaHomeChildArticles;
