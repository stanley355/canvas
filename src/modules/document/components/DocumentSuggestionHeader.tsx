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

  const options = [
    {
      label: "Analyze Text Strength and Weakness",
      value: "Analyze the strength and weakness of this text:",
    },
    {
      label: "Correct grammar and spelling",
      value: "Correct the grammar and spelling of this text:",
    },
    {
      label: "Give Improvement Suggestion",
      value: "Give improvement suggestions of this text:",
    },
    {
      label: "Paraphrase Text",
      value: "Summarize this text:",
    },
    {
      label: "Rewrite Text",
      value: "Rewrite this text:",
    },
  ]

  return (
    <div className="flex items-center justify-between pt-1 gap-4">
      <DocumentTitle user={user} document={document} /> 
      <ReactSelect options={options} placeholder="Pilih Instruksi" className="w-1/2 border-blue-900 border rounded-md" />
    </div>
  )
}

export default DocumentSuggestionHeader