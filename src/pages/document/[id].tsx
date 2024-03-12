import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { decode } from "jsonwebtoken";

import DocumentEditor from "@/modules/document/components/DocumentEditor";
import DocumentEditorProvider from "@/modules/document/components/DocumentEditorProvider";
import { IDocumentEditor } from "@/modules/document/components/DocumentEditor";

import { fetchUserDocument } from "@/common/lib/api/documents/fetchUserDocument";
import "react-quill/dist/quill.snow.css";

const DocumentPage = (props: IDocumentEditor) => {
  const { user, document } = props;

  return (
    <DocumentEditorProvider>
      <DocumentEditor user={user} document={document} />
    </DocumentEditorProvider>
  );
};

export default DocumentPage;
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
  const document = await fetchUserDocument(user.id, String(ctx.query.id));

  return {
    props: {
      user,
      document,
    },
  };
};
