import Button from "@/common/components/Button"
import Input from "@/common/components/Input"

const RegisterForm = () => {
  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      <label htmlFor="email_input">Email</label>
      <Input type="email" name="email" id="email_input" className="mb-4" />
      <label htmlFor="password_input">Password</label>
      <Input type="password" name="password" id="password_input" className="mb-4" />
      <label htmlFor="repassword_input">Re-type Password</label>
      <Input type="password" name="repassword" id="repassword_input" className="mb-4" />
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  )
}

export default RegisterForm