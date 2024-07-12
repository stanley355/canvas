import React from 'react'
import { ITranscriptionWord } from '../lib/speechToTextStates'

interface SpeechToTextTranscriptionWordsTable {
  transcriptionWords: ITranscriptionWord[]
} 

const SpeechToTextTranscriptionWordsTable = (props: SpeechToTextTranscriptionWordsTable) => {
  const {transcriptionWords} = props;
  return (
    <div className='px-2 lg:px-0'>
      <div className='mb-2'>
        <div className='text-lg font-semibold'>Word Granularity</div>
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