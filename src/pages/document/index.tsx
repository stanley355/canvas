import DocumentMobile from "@/modules/document/components/DocumentMobile";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const DocumentHome = () => {
  return (
    <div className="min-h-[100vh]">
      <DocumentMobile />
    </div>
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
