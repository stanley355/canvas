import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";

export const getLoginPageServerSideProps: GetServerSideProps= async (ctx: GetServerSidePropsContext) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/",
      },
    };
  }
  
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "login",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
