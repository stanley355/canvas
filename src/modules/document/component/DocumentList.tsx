import Button from '@/common/components/Button';
import { useDesktopScreen } from '@/common/hooks/useDesktopScreen';
import Router from 'next/router';
import React from 'react';
import { FaLanguage, FaPen, FaTrash } from 'react-icons/fa';
import RenameDocBtn from './RenameDocBtn';

interface IDocumentList {
  documents: Array<any>
}

const DocumentList = (props: IDocumentList) => {
  const { documents } = props;
  const isDesktop = useDesktopScreen();

  const handleDateFormat = (createdAt: string) => {
    const date = new Date(createdAt);
    return isDesktop ? date.toLocaleString() : date.toLocaleDateString();
  }

  return (
    <div className='border-t border-gray-500'>
      {documents.map((doc: any) =>
        <div key={doc.id} className='border-b border-gray-500 flex items-center justify-between hover:bg-blue-500 hover:text-white hover:border-white'>
          <Button type='button' key={doc.id} wrapperClassName='w-full p-2' buttonClassName='flex items-center gap-4 w-full h-full'
            onClick={() => Router.push(`/document/${doc.doc_type}/${doc.id}`)}
          >
            <FaLanguage className='text-xl text-blue-900' />
            <span className='text-xl font-semibold'>{doc.name}</span>
            <span>{handleDateFormat(doc.created_at)}</span>
          </Button>
          <div className='flex items-center gap-4 px-2'>
            <RenameDocBtn docID={doc.id} />
            <Button type='button' wrapperClassName='text-red-500'>
              <FaTrash />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
};

export default DocumentList;