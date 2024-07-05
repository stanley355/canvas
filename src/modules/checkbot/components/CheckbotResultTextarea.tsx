import NextTextarea from '@/common/components/NextTextarea'
import CheckbotResulTextareaDiffBtn from './CheckbotResultTextareaDiffBtn'
import { useState } from 'react'
import { ICheckbotResult } from '../lib/checkbotStates'
import NextButton from '@/common/components/NextButton'
import { TbCopy } from 'react-icons/tb'
import { copyToClipboard } from '@/common/lib/copyToClipboard'
import { cn } from '@/common/lib/cn'

export enum CheckbotDiff {
  Added = 'added',
  Base = 'base',
  Removed = 'removed'
}

interface CheckbotResultTextareaProps {
  checkbotResult: ICheckbotResult
}

const CheckbotResultTextarea = (props: CheckbotResultTextareaProps) => {
  const { checkbotResult } = props;
  const [activeDiff, setActiveDiff] = useState(CheckbotDiff.Base);

  return (
    <div className='relative mb-4'>
      <CheckbotResulTextareaDiffBtn activeDiff={activeDiff} setActiveDiff={setActiveDiff} />
      <div>
        <div className='border h-60 rounded-t-none p-2 overflow-y-scroll'>
          {activeDiff !== CheckbotDiff.Base ?
            checkbotResult[activeDiff].map((diff: any, i: number) => (
              <span
                key={i}
                className={cn(
                  activeDiff === CheckbotDiff.Added && diff.added && "text-green-500 underline font-semibold",
                  activeDiff === CheckbotDiff.Removed && diff.removed && "text-red-500 underline font-semibold"
                )}>
                {diff.value}
              </span>
            )) : checkbotResult.base}
        </div>
        {activeDiff === CheckbotDiff.Base && <NextButton
          className="absolute bottom-2 lg:bottom-8 right-2 p-2"
          onClick={() => copyToClipboard(checkbotResult.base)}
        >
          <TbCopy />
          <span>Copy</span>
        </NextButton>}
      </div>
    </div>
  )
}

export default CheckbotResultTextarea