import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";

export const getLoginPageServerSideProps: GetServerSideProps= async (ctx: GetServerSidePropsContext) => {
  const token = ctx.req.cookies.token;

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/",
      },
    };
  }
  
  const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
    slug: "login",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
