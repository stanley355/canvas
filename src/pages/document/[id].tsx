import { useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const DocumentEditor = () => {
  const [suggestionValue, setSuggestionValue] = useState(false);
  const [editorText, setEditorText] = useState('');
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

      </div>
    </div>
  )
}

export default DocumentEditor