import { CardContent } from "@/common/components/ui/card"
import { Input } from "@/common/components/ui/input"
import { Label } from "@/common/components/ui/label"

const LoginCardContent = () => {
  return (
    <CardContent>
      <form onSubmit={(e) => e.preventDefault()}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
      </form>
    </CardContent>
  )
}

export default LoginCardContent