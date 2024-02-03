import { GetServerSideProps, GetServerSidePropsContext } from "next";

const DocumentHome = () => {
  return (
    <div>index</div>
  )
}

export default DocumentHome;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  // if (!token) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/login/",
  //     },
  //   };
  // }


  return {
    props: {},
  };
};
