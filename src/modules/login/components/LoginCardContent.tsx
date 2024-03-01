import { FormEvent, useState } from "react"
import { Button } from "@/common/components/ui/button"
import GoogleLoginBtn from "./GoogleLoginBtn"
import { CardContent } from "@/common/components/ui/card"
import { Input } from "@/common/components/ui/input"
import { Label } from "@/common/components/ui/label"

const LoginCardContent = () => {
  const [showError, setShowError] = useState(false);

  return (
    <CardContent>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
        {showError && <div className="p-2 mt-4 text-sm bg-red-300">
          There was an error when processing, please use Google Login to continue
        </div>}
        <Button className="w-full mt-4" type="submit" onClick={() => setShowError(true)}>Submit</Button>
      </form>
      <div className="text-sm text-gray-500 border-b border-gray-500 w-fit">Can't Sign In?</div>
      <div className="mt-4">
        <GoogleLoginBtn />
      </div>
    </CardContent>
  )
}

export default LoginCardContent