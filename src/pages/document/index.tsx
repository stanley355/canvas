import { useDesktopScreen } from "@/common/lib/hooks/useDesktopScreen";
import DocumentBanner from "@/modules/document/components/DocumentBanner";
import DocumentMobile from "@/modules/document/components/DocumentMobile";
import DocumentSearchBox from "@/modules/document/components/DocumentSearchBox";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const DocumentHome = () => {
  const isDesktop = useDesktopScreen();

  if (!isDesktop) {
    return <DocumentMobile />
  }


  return (
    <div className="container mx-auto border-x border-blue-900 pt-[2.5%]">
      <DocumentBanner />
      <DocumentSearchBox />
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
