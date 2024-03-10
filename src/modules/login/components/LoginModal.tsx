import { Card } from '@/common/components/ui/card'
import React from 'react'
import LoginCard from './LoginCard'

const LoginModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50">
      <div className='mt-[5%]'>
        <LoginCard />
      </div>
    </div>
  )
}

export default LoginModal