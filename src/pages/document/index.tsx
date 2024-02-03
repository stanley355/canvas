import { decode } from "jsonwebtoken";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { IUser } from "@/common/lib/api/users/userInterfaces";
import { useDesktopScreen } from "@/common/lib/hooks/useDesktopScreen";
import DocumentBanner from "@/modules/document/components/DocumentBanner";
import DocumentList from "@/modules/document/components/DocumentList";
import DocumentMobile from "@/modules/document/components/DocumentMobile";
import DocumentSearchBox from "@/modules/document/components/DocumentSearchBox";
import { fetchAllDocument } from "@/common/lib/api/documents/fetchAllDocument";
import { IDocument } from "@/common/lib/api/documents/documentInterface";

interface IDocumentHome {
  user: IUser,
  userDocuments: IDocument[]
}

const DocumentHome = (props: IDocumentHome) => {
  const {user, userDocuments} = props;

  const isDesktop = useDesktopScreen();
  if (!isDesktop) {
    return <DocumentMobile />
  }

  return (
    <div className="container mx-auto border-x border-blue-900 pt-[2.5%] min-h-screen">
      <DocumentBanner user={user} />
      <DocumentSearchBox />
      <DocumentList user={user} userDocuments={userDocuments} />
    </div>
  )
}

export default DocumentHome;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  const user: any = decode(token);

  const userDocuments = await fetchAllDocument(user.id);

  return {
    props: {
      user,
      userDocuments,
    },
  };
};
