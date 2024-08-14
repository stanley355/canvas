import { FormEvent, useState } from "react"
import Button from "@/common/components/Button"
import Input from "@/common/components/Input"

const RegisterForm = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const {fullname, email, password, repassword} = target;

    if (!fullname.value) {
      setErrorMsg("Fullname can't be empty");
      return;
    }

    if (!email.value) {
      setErrorMsg("Email can't be empty");
      return;
    }
    if (!password.value) {
      setErrorMsg("Password can't be empty");
      return;
    }
    if (!repassword.value) {
      setErrorMsg("Re-type Password can't be empty");
      return;
    }

    const hasSymbolRegex = /[^A-Za-z0-9\s]/g;
    if (hasSymbolRegex.test(fullname.value)) {
      setErrorMsg("Invalid fullname: Fullname can't contain symbol");
      return;
    }

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email.value)) {
      setErrorMsg("Invalid email: format");
      return;
    }

    if (String(password.value).length < 4) {
      setErrorMsg("Invalid password: 4 characters minimum");
      return;
    }

    if (password.value !== repassword.value) {
      setErrorMsg("Invalid password: Password is not similar to re-typed password");
      return;
    }
  
    setErrorMsg("Good");
    return;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname_input">Fullname</label>
        <Input type="text" name="fullname" id="fullname_input" className="mb-4" onChange={()=> setErrorMsg("")} />
        <label htmlFor="email_input">Email</label>
        <Input type="email" name="email" id="email_input" className="mb-4" onChange={()=> setErrorMsg("")} />
        <label htmlFor="password_input">Password</label>
        <Input type="password" name="password" id="password_input" className="mb-4" onChange={()=> setErrorMsg("")} />
        <label htmlFor="repassword_input">Re-type Password</label>
        <Input type="password" name="repassword" id="repassword_input" className="mb-4" onChange={()=> setErrorMsg("")} />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
      <span className="text-red-600">{errorMsg}</span>
    </div>
  )
}

export default RegisterForm