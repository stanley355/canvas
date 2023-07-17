import React, { useState } from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import jwtDecode from 'jwt-decode';

import MetaSEO from '@/common/components/MetaSEO';
import Button from '@/common/components/Button';
import Layout from '@/common/components/Layout';
import NewDocForm from '@/modules/document/component/NewDocForm';
import DocumentList from '@/modules/document/component/DocumentList';
import { findDocument } from '@/modules/document/lib/findDocument';
import { HOME_SEO } from '@/modules/home/lib/constant';

interface IDocument {
  documents: Array<any>
}

const Document = (props: IDocument) => {
  const { documents } = props;
  const [showAddDoc, setShowAddDoc] = useState(false);

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className='container mx-auto bg-white text-black p-4 h-screen overflow-y-scroll'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold'>My Documents</h1>
          <Button
            type='button'
            wrapperClassName='w-fit bg-blue-900 text-white p-2 font-semibold rounded'
            buttonClassName='w-full h-full flex items-center gap-2'
            onClick={() => setShowAddDoc(!showAddDoc)}
          >
            {showAddDoc ? <FaTimesCircle /> : <FaPlusCircle />}
            <span>{showAddDoc ? "Close Form" : "Add New"}</span>
          </Button>
        </div>

        <div className='py-4'>
          {showAddDoc && <NewDocForm />}
          {documents?.length > 0 ?
            <DocumentList documents={documents} /> :
            <div className='mt-8 text-center'>*{showAddDoc ? "Click Close Form to close" : "Click Add New to add new Document"}</div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default Document;
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

  const user: any = jwtDecode(token);
  const documents = await findDocument(user.id);

  return {
    props: {
      documents: documents ?? []
    },
  };
};
