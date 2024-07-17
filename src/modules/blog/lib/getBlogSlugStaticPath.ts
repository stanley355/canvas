import { GetStaticPaths } from "next";

export const getBlogSlugStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}