import Link from 'next/link'
import { CardHeader, CardTitle } from '@/common/components/ui/card'
import { useState } from 'react'

const LoginCardHeader = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <CardHeader className="flex flex-row items-center justify-between pt-4">
      <CardTitle>{isRegister ? "Register" : "Login"}</CardTitle>
      <button className="text-sm border-b border-black cursor-pointer" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "I have an account" : "I don't have an account"}
      </button>
    </CardHeader>
  )
}

export default LoginCardHeader