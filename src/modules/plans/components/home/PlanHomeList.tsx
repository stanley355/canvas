import React from 'react'
import PlanHomeListPremium from './PlanHomeListPremium'
import PlanHomeListStudent from './PlanHomeListStudent'

const PlanHomeList = () => {
  return (
    <div className='mb-8'>
      <PlanHomeListPremium />
      <PlanHomeListStudent />
    </div>
  )
}

export default PlanHomeList