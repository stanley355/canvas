import Button from '@/common/components/Button'
import React, { useState } from 'react'
import { TbPlus } from 'react-icons/tb'

const HomeFeaturesAccordion = () => {
  const [showContent, setShowcontent] = useState(false);
  return (
    <div>
      <Button variant="ghost" className='justify-between w-full text-lg bg-transparent'>
        <span>Check grammar and spelling</span>
        <TbPlus />
      </Button>
    <div className='px-4 py-2 animate-visible-forward'>
      Checkbot is the answer
    </div>
    </div>
  )
}

export default HomeFeaturesAccordion