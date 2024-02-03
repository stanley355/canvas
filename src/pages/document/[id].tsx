import { useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { decode } from "jsonwebtoken";
import DocumentSuggestion from '@/modules/document/components/DocumentSuggestion';
import 'react-quill/dist/quill.snow.css';
import { fetchUserDocument } from '@/common/lib/api/documents/fetchUserDocument';
import { IUser } from '@/common/lib/api/users/userInterfaces';
import { IDocument } from '@/common/lib/api/documents/documentInterface';

interface IDocumentEditor {
  user: IUser,
  document: IDocument
}

const DocumentEditor = (props: IDocumentEditor) => {
  const { user, document } = props;
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  return (
    <div className='w-full flex'>
      <div className='w-1/2 '>
        <ReactQuill
          theme='snow'
          className='h-[89vh]'
          placeholder='Mulai mengetik..'
          onChange={(content, delta, source, editor) => {
            // setEditorText(editor.getText());
          }}
        />
      </div>
      <div className='w-1/2 h-[89vh]'>
        <DocumentSuggestion user={user} document={document} />
      </div>
    </div>
  )
}

export default DocumentEditor;
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