import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getRegisterServerSideprops: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/",
      },
    };
  }

  return {
    props: {},
  };
};
