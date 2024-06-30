import React from 'react'
import PlanHomeListPremium from './PlanHomeListPremium'
import PlanHomeListStudent from './PlanHomeListStudent'
import PlanHomeListFree from './PlanHomeListFree'

const PlanHomeList = () => {
  return (
    <div className='mb-8'>
      <PlanHomeListPremium />
      <PlanHomeListStudent />
      <PlanHomeListFree />
    </div>
  )
}

export default PlanHomeList