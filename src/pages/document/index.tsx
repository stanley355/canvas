import { useDesktopScreen } from "@/common/lib/hooks/useDesktopScreen";
import DocumentMobile from "@/modules/document/components/DocumentMobile";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const DocumentHome = () => {
  const isDesktop = useDesktopScreen();

  if (!isDesktop) {
    return <DocumentMobile />
  }


  return (
    <div className="">
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
