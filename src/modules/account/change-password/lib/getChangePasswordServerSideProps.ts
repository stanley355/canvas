import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getChangePasswordServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/login/",
      },
    };
  }

  return {
    props: {},
  };
};
