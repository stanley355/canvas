
import { IDocument } from '@/common/lib/api/documents/documentInterface'
import { fetchUpdateDocument } from '@/common/lib/api/documents/fetchUpdateDocument'
import { IUser } from '@/common/lib/api/users/userInterfaces'
import { useState, ChangeEvent } from 'react'
import { FaPen } from 'react-icons/fa6'
import { useDocumentEditor } from '../lib/useDocumentEditor'

interface IDocumentTItle {
  user: IUser,
  document: IDocument
}


const DocumentTitle = (props: IDocumentTItle) => {
  const { user, document } = props;
  const {documentEditorStates} = useDocumentEditor();
  const {editorText, suggestionText} = documentEditorStates;
  const [titleValue, setTitleValue] = useState(document.name)
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = async () => {
    const updatePayload = {
      id: document.id,
      user_id: user.id,
      name: titleValue ? titleValue : "Dokumen Tanpa Judul",
      content: editorText,
      checkbot_completion: suggestionText,
    };

    await fetchUpdateDocument(updatePayload);
    return;
  }

  return (
    <div className='w-1/2'>
      {isEdit ?
        <input
          type="text"
          value={titleValue}
          className='p-2 w-full font-semibold rounded-md'
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitleValue(e.target.value)}
          onBlur={handleUpdate}
        /> :
        <button type="button" className='flex items-center gap-1 p-2 font-semibold  w-full' onClick={() => setIsEdit(true)}>
          <FaPen className='text-xl'  />
          <div className='truncate'>{document.name}</div>
        </button>}
    </div>

  )
}

export default DocumentTitle