import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { TbArrowLeft, TbHome, TbProgress } from "react-icons/tb";

import NextHead from "@/common/components/NextHead";
import NextButton from "@/common/components/NextButton";
import { getBlogSlugStaticPaths } from "@/modules/blog/lib/getBlogSlugStaticPath";
import { getBlogSlugStaticProps } from "@/modules/blog/lib/getBlogSlugStaticProps";
import { IDatoBlogSchema } from "@/common/lib/api/dato/interfaces";
import NextLink from "@/common/components/NextLink";

export const getStaticPaths: GetStaticPaths = getBlogSlugStaticPaths;
export const getStaticProps: GetStaticProps = getBlogSlugStaticProps;

interface BlogSlugProps {
  blogSchema: IDatoBlogSchema;
}

const BlogSlug = ({ blogSchema }: BlogSlugProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <TbProgress className="animate-spin text-5xl mb-4" />
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mt-16 lg:mt-0 text-sm pb-8 lg:container lg:mx-auto lg:flex lg:gap-8">
      <NextHead pagesSchema={blogSchema.blog} />
      <div className="w-2/3">
        <img
          src={blogSchema.blog.seo.image.url}
          alt={blogSchema.blog.seo.image.alt}
          width={blogSchema.blog.seo.image.width}
          height={blogSchema.blog.seo.image.height}
          className="w-full h-auto shadow"
          loading="eager"
        />

        <div className="p-4">
          <>{new Date(blogSchema.blog._updatedAt).toLocaleDateString("id-ID")}</>
          <h1 className="text-lg font-bold mb-4">{blogSchema.blog.seo.title}</h1>

          <div
            className="[&_a]:underline [&_p]:mb-4 [&_ul]:mb-4 [&_ol]:mb-4 [&_ul]:list-inside [&_ol]:list-inside [&_ul]:list-disc [&_ol]:list-decimal"
            dangerouslySetInnerHTML={{ __html: blogSchema.blog.content }}
          />

          <div className="flex justify-between items-center">
            <NextButton
              className="rounded-3xl"
              variant="outline"
              onClick={() => router.back()}
            >
              <TbArrowLeft />
              Back
            </NextButton>
            <NextButton
              className="rounded-3xl"
              variant="outline"
              onClick={() => router.push("/blog")}
            >
              <TbHome />
              Blog Home
            </NextButton>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="p-4 border-b">Related Articles</div>
        <div>
          {blogSchema.blog.relatedArticles.map((article)=> 
          <NextLink href={`/blog/${article.slug}`} variant="outline" className="flex-col items-start border-none">
            <div>{article.title}</div>
            <div>{new Date(article._createdAt).toLocaleDateString('id-ID')}</div>
          </NextLink> )}
        </div>
      </div>
    </div>
  );
};

export default BlogSlug;
