
import { IDocument } from '@/common/lib/api/documents/documentInterface'
import { fetchUpdateDocument } from '@/common/lib/api/documents/fetchUpdateDocument'
import { IUser } from '@/common/lib/api/users/userInterfaces'
import { useState, ChangeEvent } from 'react'
import { FaPen } from 'react-icons/fa6'

interface IDocumentTItle {
  user: IUser,
  document: IDocument
}


const DocumentTitle = (props: IDocumentTItle) => {
  const { user, document } = props;
  const [titleValue, setTitleValue] = useState(document.name)
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = async () => {
    const updatePayload = {
      id: document.id,
      user_id: user.id,
      name: titleValue,
      content: document.content,
      checkbot_completion: document.content,
    };

    await fetchUpdateDocument(updatePayload);
    return;
  }

  return (
    <div>
      {isEdit ?
        <input
          type="text"
          value={titleValue}
          className='p-2 focus:outline-none'
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitleValue(e.target.value)}
          onBlur={handleUpdate}
        /> :
        <button type="button" className='flex items-center gap-1 p-2 font-bold' onClick={() => setIsEdit(true)}>
          <FaPen />
          <div>{document.name}</div>
        </button>}
    </div>

  )
}

export default DocumentTitle