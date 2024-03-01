import { Button } from "@/common/components/ui/button"
import { CardContent } from "@/common/components/ui/card"
import { Input } from "@/common/components/ui/input"
import { Label } from "@/common/components/ui/label"
import Link from "next/link"
import { FormEvent } from "react"
import GoogleLoginBtn from "./GoogleLoginBtn"

const LoginCardContent = () => {

  return (
    <CardContent>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
        <Button className="w-full mt-4" type="submit">Submit</Button>
      </form>
      <div className="text-sm text-gray-500 border-b border-gray-500 w-fit">Can't Sign In?</div>
      <div className="mt-4">
        <GoogleLoginBtn />
      </div>
    </CardContent>
  )
}

export default LoginCardContent