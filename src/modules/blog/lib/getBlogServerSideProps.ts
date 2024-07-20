import { GetServerSideProps } from "next";
import { getDatoBlogHomeSchema } from "@/common/lib/api/dato/datoQueries";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { IDatoPagesSchemaSeo } from "@/common/lib/api/dato/interfaces";

export interface IDatoBlogHome {
  allBlogs: { slug: string; seo: IDatoPagesSchemaSeo }[];
}

export const getBlogServerSideProps: GetServerSideProps = async () => {
  const blogSchema = (await fetchDatoCms(
    getDatoBlogHomeSchema,
    {}
  )) as IDatoBlogHome;

  if (!blogSchema?.allBlogs?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allBlogs: blogSchema.allBlogs,
    },
  };
};
