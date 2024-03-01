import { Button } from "@/common/components/ui/button"
import { CardContent } from "@/common/components/ui/card"
import { Input } from "@/common/components/ui/input"
import { Label } from "@/common/components/ui/label"
import Link from "next/link"
import { FormEvent } from "react"

const LoginCardContent = () => {
  return (
    <CardContent>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
        <Button className="w-full mt-4">Submit</Button>
      </form>
      <Link href="/forgot-password" className="mx-auto mb-4 text-sm text-gray-500 border-b border-gray-500">Can't Sign In?</Link>

    </CardContent>
  )
}

export default LoginCardContent