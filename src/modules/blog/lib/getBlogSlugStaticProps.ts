import { getDatoBlogSchema } from "@/common/lib/api/dato/datoQueries";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { IDatoBlogSchema } from "@/common/lib/api/dato/interfaces";
import { GetStaticProps, GetStaticPropsContext } from "next";

export const getBlogSlugStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const slug = params?.slug;
  const blogSchema = (await fetchDatoCms(getDatoBlogSchema, {
    slug,
  })) as IDatoBlogSchema;

  if (!blogSchema.blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogSchema,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
