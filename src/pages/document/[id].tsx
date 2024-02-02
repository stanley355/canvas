import { useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { fetchAIChatCompletion } from '@/common/lib/api/ai/fetchAIChatCompletion';

const DocumentEditor = () => {
  const [suggestionValue, setSuggestionValue] = useState(false);
  const [editorText, setEditorText] = useState('');
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const handleEditor = async () => {
    const content = `Correct this to standard English: ${editorText}`;
    const apiRes = await fetchAIChatCompletion(content);

    console.log(apiRes.choices[0]);
    
    return apiRes;
  } 


  return (
    <div className='w-full'>
      <div>
      </div>
      <div className='flex h-[90vh]'>
        <div className='w-1/2 border-black border'>
          <ReactQuill
            theme='snow'
            className='h-[85vh]' onChange={(content, delta, source, editor) => {
              setEditorText(editor.getText());
            }}
          />
        </div>
        <div className='px-4 w-1/2 border border-black'>
          <div className='flex items-center justify-between py-2'>
            <div className='text-lg font-bold'>Suggestion</div>
            <button type="button" className='bg-blue-900 p-2 rounded-md text-white' onClick={handleEditor}>
              Run Check
            </button>
          </div>
          <div
            placeholder=''
            className='w-full h-full text-gray-500'
          >
            Your Suggestion will appear here
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentEditor