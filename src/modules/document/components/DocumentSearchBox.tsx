import { IDocument } from "@/common/lib/api/documents/documentInterface"
import { ChangeEvent } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"

interface IDocumentSearchBox {
  userDocuments: IDocument[]
  setDocumentList: (documentList: IDocument[]) => void
}


const DocumentSearchBox = (props: IDocumentSearchBox) => {
  const { userDocuments, setDocumentList } = props;

  const handleSearch = (searchText: string) => {
    if (userDocuments.length > 0 && searchText) {
      const newList = userDocuments.filter((doc: IDocument) => doc.name.toLowerCase().includes(searchText.toLowerCase()));
      setDocumentList(newList);
      return;
    }

    setDocumentList(userDocuments);
    return;
  }

  return (
    <div className="w-4/5 mx-auto rounded-md mt-8 flex items-center shadow-lg border border-gray-300 focus:outline-none">
      <input type="text" placeholder="Cari Dokumen" className="w-[97.5%] p-1 rounded-md" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} />
      <FaMagnifyingGlass />
    </div>
  )
}

export default DocumentSearchBox