import React from 'react'
import HomeMobileFourHorsemen from './HomeMobileFourHorsemen'

const HomeMobile = () => {
  return (
    <div className='container px-4 mt-20 lg:hidden'>
      <h1 className='mb-4 text-4xl font-bold text-center'>Solve your language problems</h1>
      <h2 className='mb-8 text-xl text-center'>Multilanguage translation and writing, our AI gets it all covered </h2>

      <HomeMobileFourHorsemen />
    </div>
  )
}

export default HomeMobile