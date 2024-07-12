import React from 'react'
import { ITranscriptionWord } from '../lib/speechToTextStates'
import NextButton from '@/common/components/NextButton';
import { TbCsv } from 'react-icons/tb';
import { convertJsonToCsvData } from '@/common/lib/convertJsonToCsvData';
import { exportToCSV } from '@/common/lib/exportToCsv';

interface SpeechToTextTranscriptionWordsTable {
  transcriptionWords: ITranscriptionWord[]
} 

const SpeechToTextTranscriptionWordsTable = (props: SpeechToTextTranscriptionWordsTable) => {
  const {transcriptionWords} = props;
  
  return (
    <div className='px-2 lg:px-0'>
      <div className='mb-2 flex justify-between items-center'>
        <div className='text-lg font-semibold'>Word Granularity</div>
        <NextButton onClick={()=> {
          const csvData = convertJsonToCsvData(['Word', 'Start', 'End'], transcriptionWords);
          exportToCSV('words.csv',csvData);
        }}>
          <TbCsv className='text-xl' />
        </NextButton>
      </div>
      <table className='w-full'>
        <thead>
          <tr className='[&>*]:border [&>*]:border-brand-primary [&>*]:p-2'>
            <th>No</th>
            <th>Word</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {transcriptionWords.map((transcript, index)=> <tr className='[&>*]:border [&>*]:border-brand-primary [&>*]:p-2'>
            <td>{index + 1}</td>
            <td>{transcript.word}</td>
            <td>{transcript.start}</td>
            <td>{transcript.end}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default SpeechToTextTranscriptionWordsTable