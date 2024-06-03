import React from 'react'
import HomeAccordion from './HomeAccordion'

interface HomeFaqProps {
  faq: Record<string, string>[]
}

const HomeFaq = (props: HomeFaqProps) => {
  const { faq } = props;

  return (
    <div className='p-4 py-8 text-white bg-emerald-800 '>
      <div className='lg:container lg:mx-auto'>

      <div className='mb-8 text-3xl font-semibold text-center'>Tell us what you need</div>

      {faq.length > 0 && faq.map((f) => <HomeAccordion key={f.title} title={f.title} description={f.description} />)}
      </div>
    </div>
  )
}

export default HomeFaq