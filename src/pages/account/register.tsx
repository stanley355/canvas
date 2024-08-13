import RegisterMain from "@/modules/account/register/components/RegisterMain"
import Image from "next/image"

const Register = () => {
  return (
    <div className="w-full h-screen lg:flex">
      <RegisterMain />
      <div className="items-center justify-center flex-1 hidden lg:flex bg-brand-primary">
        <Image
          src="/images/account/register.png"
          alt="Languageai register"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default Register