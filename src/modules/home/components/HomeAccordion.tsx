import { useState } from 'react'
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';
import { cn } from '@/common/lib/cn';
import CanvasButton from '@/common/components/ui/CanvasButton'

const HomeAccordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-white rounded-lg'>
      <CanvasButton variant='primary-reverse' className={cn('justify-between w-full text-lg font-semibold', open && 'rounded-b-none border-b')}
        onClick={() => setOpen(!open)}>
        <h3>woi</h3>
        {open ?
          <TbChevronUp className='text-3xl' /> :
          <TbChevronDown className='text-3xl' />}
      </CanvasButton>

      <p className={cn(' h-0 p-0 text-black invisible', open && 'h-auto p-4 visible')}>
        hai
      </p>
    </div>
  )
}

export default HomeAccordion