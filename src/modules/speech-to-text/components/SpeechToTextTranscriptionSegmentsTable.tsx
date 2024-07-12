import { TbCsv } from 'react-icons/tb';

import NextButton from '@/common/components/NextButton';

import { exportToCSV } from '@/common/lib/exportToCsv';
import { ITranscriptionSegment } from '../lib/speechToTextStates'
import { convertJsonToCsvData } from '@/common/lib/convertJsonToCsvData';

interface SpeechToTextTranscriptionSegmentTable {
  transcriptionSegment: ITranscriptionSegment[]
} 

const SpeechToTextTranscriptionSegmentTable = (props: SpeechToTextTranscriptionSegmentTable) => {
  const {transcriptionSegment} = props;
  
  return (
    <div className='px-2 lg:px-0'>
      <div className='mb-2 flex justify-between items-center'>
        <div className='text-lg font-semibold'>Segment Granularity</div>
        <NextButton onClick={()=> {
          const csvData = convertJsonToCsvData(['Segment', 'Start', 'End'], transcriptionSegment);
          exportToCSV('words.csv',csvData);
        }}>
          <TbCsv className='text-xl' />
        </NextButton>
      </div>
      <table className='w-full'>
        <thead>
          <tr className='[&>*]:border [&>*]:border-brand-primary [&>*]:p-2'>
            <th>No</th>
            <th>Segment</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {transcriptionSegment.map((transcript, index)=> <tr className='[&>*]:border [&>*]:border-brand-primary [&>*]:p-2'>
            <td>{index + 1}</td>
            <td>{transcript.text}</td>
            <td>{transcript.start}</td>
            <td>{transcript.end}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default SpeechToTextTranscriptionSegmentTable