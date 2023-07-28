import { getMediaSitemapData } from "@/modules/media/lib/getMediaSitemapData";
import { GetServerSideProps } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { data } = await getMediaSitemapData();

  const mediaFields: Array<any> = data.allArticles.map((article: any) => {
    return {
      title: article.title,
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/media/${article.slug}`,
      lastmod: article._publishedAt,
    };
  });

  return await getServerSideSitemapLegacy(ctx, mediaFields);
};

const MediaSitemap = () => {};
export default MediaSitemap;
