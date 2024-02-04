import { useMemo, useRef } from 'react'
import dynamic from 'next/dynamic';
import DocumentSuggestion from '@/modules/document/components/DocumentSuggestion';

import { IUser } from '@/common/lib/api/users/userInterfaces';
import { IDocument } from '@/common/lib/api/documents/documentInterface';
import { useDocumentEditor } from '../lib/useDocumentEditor';
import { fetchUpdateDocument } from '@/common/lib/api/documents/fetchUpdateDocument';
import 'react-quill/dist/quill.snow.css';

export interface IDocumentEditor {
  user: IUser,
  document: IDocument
}

const DocumentEditor = (props: IDocumentEditor) => {
  const { user, document } = props;
  const { dispatch } = useDocumentEditor();
  
  const timeout = useRef<any>(null);
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const handleOnchange = async (content: string, _delta: any, _source: any, editor: any) => {
    const rawText = editor.getText();
    dispatch({
      type: "SET",
      name: "editorText",
      value: rawText
    });

    clearTimeout(timeout.current);
    const updatePayload = {
      id: document.id,
      user_id: user.id,
      name: document.name,
      content,
      checkbot_completion: document.checkbot_completion,
    };

    timeout.current = setTimeout(
      async () => await fetchUpdateDocument(updatePayload),
      2000
    );
  }

  return (
    <div className='w-full flex'>
      <ReactQuill
        theme='snow'
        className='h-[89vh] w-1/2'
        placeholder='Mulai mengetik..'
        defaultValue={document.content ? document.content : ""}
        onChange={handleOnchange}
      />
      <DocumentSuggestion user={user} document={document} />
    </div>
  )
}

export default DocumentEditor;