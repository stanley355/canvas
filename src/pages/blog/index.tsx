import NextLink from "@/common/components/NextLink";
import { cn } from "@/common/lib/cn";
import {
  getBlogServerSideProps,
  IDatoBlogHome,
} from "@/modules/blog/lib/getBlogServerSideProps";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { FaBlog } from "react-icons/fa6";

export const getServerSideProps: GetServerSideProps = getBlogServerSideProps;

const Blog = ({ allBlogs }: IDatoBlogHome) => {
  return (
    <div className="mt-16 text-sm px-4 lg:mt-0 pb-8">
      <div className="flex border border-brand-primary items-center gap-1 lg:justify-center rounded-lg p-2 bg-blue-100 mb-4 w-fit">
        <FaBlog />
        Blog
      </div>
      <div className="gap-2 lg:grid-cols-3 lg:grid">
        {allBlogs?.map(({ seo, slug }, index: number) => (
          <NextLink
            href={`/blog/${slug}`}
            className="w-full gap-4 hover:underline h-fit mb-4 flex items-center"
            key={seo.title}
            variant="none"
          >
            <img
              src={seo.image.url}
              alt={seo.image.alt}
              width={seo.image.width}
              height={seo.image.height}
              className="w-1/4 h-1/2 rounded-lg mb-2 shadow"
            />
            <div className="overflow-hidden text-ellipsis">
              <div className="font-semibold text-base">{seo.title}</div>
              <div className="text-gray-700 text-xs ">{seo.description}</div>
            </div>
          </NextLink>
        ))}
      </div>
    </div>
  );
};

export default Blog;
