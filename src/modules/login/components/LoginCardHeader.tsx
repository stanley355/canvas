import Link from 'next/link'
import { CardHeader, CardTitle } from '@/common/components/ui/card'

const LoginCardHeader = () => {
  return (
    <CardHeader className="flex flex-row items-center justify-between pt-4">
      <CardTitle>Login</CardTitle>
      <Link href={"/"} className="text-sm border-b border-black">
        I don't have an account
      </Link>
    </CardHeader>
  )
}

export default LoginCardHeader