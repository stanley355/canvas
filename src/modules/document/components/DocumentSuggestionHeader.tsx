import { IDocument } from '@/common/lib/api/documents/documentInterface'
import { IUser } from '@/common/lib/api/users/userInterfaces'
import { FaPen } from 'react-icons/fa6'
import ReactSelect from 'react-select'
import DocumentTitle from './DocumentTitle'

interface IDocumentSuggestionHeader {
  user: IUser,
  document: IDocument
}


const DocumentSuggestionHeader = (props: IDocumentSuggestionHeader) => {
  const { user, document } = props;

  return (
    <div className="flex items-center justify-between pt-1">
      <DocumentTitle user={user} document={document} /> 
      <ReactSelect options={[{ label: "hi", value: "woi" }]} placeholder="Pilih Instruksi" className="w-1/2" />
    </div>
  )
}

export default DocumentSuggestionHeader