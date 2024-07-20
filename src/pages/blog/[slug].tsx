import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { TbArrowLeft, TbProgress } from "react-icons/tb";

import NextHead from "@/common/components/NextHead";
import { getBlogSlugStaticPaths } from "@/modules/blog/lib/getBlogSlugStaticPath";
import { getBlogSlugStaticProps } from "@/modules/blog/lib/getBlogSlugStaticProps";
import { IDatoBlogSchema } from "@/common/lib/api/dato/interfaces";
import NextButton from "@/common/components/NextButton";

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
    <div className="mt-16 lg:mt-4 text-sm pb-8">
      <NextHead pagesSchema={blogSchema.blog} />
      <div className="lg:w-1/3 lg:mx-auto lg:shadow-inner lg:rounded-lg">
        <div className="p-4">
          <div className="mb-2">
            {new Date(blogSchema.blog._updatedAt).toLocaleDateString("id-ID")}
          </div>
          <h1 className="text-lg font-bold">{blogSchema.blog.seo.title}</h1>
        </div>
        <img
          src={blogSchema.blog.heroImage.url}
          alt={blogSchema.blog.heroImage.title}
          width={blogSchema.blog.heroImage.width}
          height={blogSchema.blog.heroImage.height}
          className="w-full h-auto lg:w-1/2 lg:h-1/2 lg:rounded-lg lg:mx-4"
          loading="eager"
        />

        <div
          className="p-4 [&_a]:underline [&_p]:mb-4 [&_ul]:mb-4 [&_ol]:mb-4 [&_ul]:list-inside [&_ol]:list-inside [&_ul]:list-disc [&_ol]:list-decimal"
          dangerouslySetInnerHTML={{ __html: blogSchema.blog.content }}
        />

        <NextButton className="ml-4 rounded-3xl" variant="outline" onClick={()=> router.back()}>
          <TbArrowLeft />
          Back
        </NextButton>
      </div>
    </div>
  );
};

export default BlogSlug;
